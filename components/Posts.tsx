/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import BlogCard from "@components/cards/BlogCard";
import { BlogsState } from "@lib/atoms";
import { ROUTES } from "@lib/atoms/routes";
import Service from "@lib/atoms/service";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Posts = () => {
  const [blogs, setBlogs] = useRecoilState(BlogsState);

  useEffect(() => {
    if (!blogs) fetchBlogs();
  }, [blogs]);

  const fetchBlogs = async () => {
    const { data } = await Service.get(ROUTES.BLOGS);
    if (data) setBlogs(data);
  };

  return (
    <div className="w-10/12  mx-auto space-y-10 my-10">
      <h2 className="uppercase font-bold text-emerald-900 text-xl">More from YooKatale</h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs
          ? blogs.map((card, i) => <BlogCard key={i} {...card} />)
          : "loading"}
      </div>
    </div>
  );
};

export default Posts;
