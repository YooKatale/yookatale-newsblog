"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { BlogsState, TopBlogState } from "@lib/atoms";
import { ROUTES } from "@lib/atoms/routes";
import Service from "@lib/atoms/service";
import { IBlog } from "@lib/interfaces";
import Link from "next/link";
import { useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useRecoilState } from "recoil";

const Header = () => {
  const [blogs, setBlogs] = useRecoilState(BlogsState);
  const [blog, setBlog] = useRecoilState(TopBlogState);

  useEffect(() => {
    if (!blogs) fetchBlogs();

    if (!blog && blogs) {
      const randomIndex = Math.floor(Math.random() * blogs.length);
      setBlog(blogs[randomIndex]);
    }
  }, [blogs]);

  const fetchBlogs = async () => {
    const { data } = await Service.get(ROUTES.BLOGS);
    if (data) setBlogs(data);
  };

  return (
    <div className="bg-emerald-100 text-emerald-800">
      <div className="w-full lg:w-10/12 px-5 lg:px-0 mx-auto">
        <div
          className="
            w-full
            text-emerald-900
            flex
            items-center
            justify-center
            border-b
            border-t
            border-emerald-600
            lg:py-10
            py-8
            font-extrabold
            text-3xl
            md:text-xl
            uppercase
        "
        >
          yookatale blog
        </div>

        <Link
          href={blog ? `/blog/${blog._id}` : "/"}
          className="grid grid-cols-1 py-10 md:grid-cols-2 gap-10 w-full"
        >
          <div className="space-y-3 text-emerald-950 opacity-80">
            <img
              src={
                blog
                  ? blog.image
                  : `https://ik.imagekit.io/2ujnunod7moo/background_7g_VstGPj.jpg?updatedAt=1666645091604`
              }
              alt={blog ? blog.author : "yookatale"}
              className="lg:h-96 h-60 w-full object-cover"
            />
            <p className="text-yellow-500">
              {blog ? new Date(blog.createdAt).toDateString() : "loading..."}
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-slate-800 opacity-80">
                <FaUserEdit size={20} />
                <span>by {blog ? blog.author : "Yookatale"}</span>
              </p>
              <p className="line-clamp-2 font-semibold text-emerald-900 text-xl lg:text-2xl">
                {blog ? blog.title : "loading..."}
              </p>
            </div>
            <div
              className="line-clamp-3 text-slate-900"
              dangerouslySetInnerHTML={{
                __html: blog ? blog.blog : "loading...",
              }}
            />
          </div>

          <div className="space-y-4">
            {blogs
              ? blogs.map((card, i) => <Card key={i} {...card} />)
              : "loading"}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

const Card = ({
  __v,
  _id,
  author,
  blog,
  createdAt,
  image,
  title,
  updatedAt,
}: IBlog) => {
  return (
    <Link
      href={`/blog/${_id}`}
      className="flex lg:flex-row flex-row-reverse cursor-pointer gap-4 border-b border-emerald-600 pb-6"
    >
      <img
        src={image}
        alt={author}
        className="lg:h-40 h-28 lg:w-56 w-40  object-cover"
      />
      <p>
        <p className="text-amber-400">{new Date(createdAt).toDateString()}</p>
        <h2 className="text-lg font-semibold line-clamp-3 capitalize">{title}</h2>
      </p>
    </Link>
  );
};
