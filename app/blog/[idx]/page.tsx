/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaUserEdit } from "react-icons/fa";

import Service from "@lib/atoms/service";
import { ROUTES } from "@lib/atoms/routes";
import { IBlog } from "@lib/interfaces";

import Subscribe from "@components/Subscribe";
import Button from "@components/widgets/Button";
import { MdFacebook, MdOutlineContentCopy } from "react-icons/md";

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
      <div className="w-full px-5 relative lg:px-0 lg:w-6/12 space-y-10 mx-auto">
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

        <div className="w-full relative">
          <div
            className="lg:text-lg max-h-72 overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: blog ? blog.blog : "loading...",
            }}
          />

          <div className="py-1">
            <p className="text-center text-2xl">
              <span className="font-bold">...</span> Subscribe to our newsletter
              to continue reading
            </p>
          </div>

          <div className="border-t border-gray-400 py-2"></div>
          <div
            className={`bg-yellow-700 rounded-md w-full absolute bottom-0 h-5/6 backdrop-filter backdrop-blur-lg shadow-gray-50 shadow-inner bg-opacity-5 `}
          ></div>
        </div>

        <Subscribe />
      </div>
    </div>
  );
};

export default Blog;
