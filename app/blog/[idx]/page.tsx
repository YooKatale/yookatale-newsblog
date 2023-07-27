/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { ROUTES } from "@lib/atoms/routes";
import Service from "@lib/atoms/service";
import { IBlog } from "@lib/interfaces";
import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";

const Blog = ({ params: { idx } }: { params: { idx: string } }) => {
  const [blog, setBlog] = useState<IBlog | null>(null);

  useEffect(() => {
    if (!blog) fetchBlog();
  }, [blog]);

  const fetchBlog = async () => {
    const { data } = await Service.get(`${ROUTES.BLOG}/${idx}`);
    if (data) setBlog(data);
  };

  return (
    <div className="w-full bg-white py-10 text-black">
      <div className="w-full px-5 lg:px-0 lg:w-6/12 space-y-10 mx-auto">
        <p className="flex items-center gap-2">
          <FaUserEdit className="text-xl" />
          <span>by {blog ? blog.author : "YooKatale"}</span>
        </p>
        <p className="text-xl lg:text-4xl xl:text-5xl font-bold">
          {blog ? blog.title : "loading..."}
        </p>

        <img
          src={
            blog
              ? blog.image
              : "https://ik.imagekit.io/2ujnunod7moo/img-kit/0b8c551e7041ac733f985a40c10343c7_vKvvM3NyJ.jpg?updatedAt=1666650285761"
          }
          alt={blog ? blog.author : "loading..."}
          className="w-full"
        />

        <p>{blog ? new Date(blog.createdAt).toDateString() : "loading..."}</p>

        <div
          className="lg:text-lg"
          dangerouslySetInnerHTML={{ __html: blog ? blog.blog : "loading..." }}
        />
      </div>
    </div>
  );
};

export default Blog;
