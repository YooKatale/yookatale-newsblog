/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  FaRegComment,
  FaRegHeart,
  FaUserCircle,
  FaUserEdit,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";

import Service from "@lib/atoms/service";
import { ROUTES } from "@lib/atoms/routes";
import { IBlog } from "@lib/interfaces";

import Subscribe from "@components/Subscribe";
import Button from "@components/widgets/Button";
import { isLoggedInState } from "@lib/atoms";
import { comments } from "@lib/constants";

type TReply = {
  id: number;
  content: string;
  author: string;
  timestamp: string;
};

type TComment = {
  id: number;
  content: string;
  author: string;
  timestamp: string;
  replies: Array<TReply>;
  likes: number;
};

const Blog = ({ params: { idx } }: { params: { idx: string } }) => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  useEffect(() => {
    if (!blog) fetchBlog();
  }, [blog]);

  const fetchBlog = async () => {
    const { data } = await Service.get(`${ROUTES.BLOG}/${idx}`);
    if (data) setBlog(data);
  };

  return (
    <div className="w-full bg-white py-10 text-black">
      <div
        className={`fixed top-0 flex items-center justify-center z-[3] bg-gray-800/90 w-full h-screen ${
          isLoggedIn === false ? " block " : " hidden "
        }`}
      >
        <div className="w-11/12 md:w-6/12 mx-auto">
          <Subscribe />
        </div>
      </div>
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
            className={`lg:text-lg ${
              isLoggedIn === false ? " line-clamp-[15] " : "line-camp-none"
            }`}
            dangerouslySetInnerHTML={{
              __html: blog ? blog.blog : "loading...",
            }}
          />

          <div className="border-t border-gray-400 py-2"></div>
          {isLoggedIn === false ? (
            <div
              className={`bg-yellow-700 rounded-md w-full absolute bottom-0 h-4/6 backdrop-filter backdrop-blur-lg shadow-gray-50 shadow-inner bg-opacity-5 `}
            ></div>
          ) : null}
        </div>
        <div className="w-10/12 mx-auto">
          <div className="space-y-8">
            <TextArea />
            <div className="space-y-6">
              {comments.map((item, i) => (
                <Comment key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

const TextArea = ({
  onChange,
  value,
}: {
  onChange?: () => void;
  value?: string;
}) => {
  return (
    <div className="w-full flex items-center gap-3">
      <FaUserCircle className="text-5xl text-gray-500" />
      <textarea
        className="w-full focus:border-gray-300 resize-none px-3 py-2 border border-gray-200 bg-gray-50 rounded-lg outline-none "
        rows={1}
        placeholder="Add your comment here"
        onChange={onChange}
        value={value}
      ></textarea>

      <Button className="text-white focus:ring-0 hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-md px-3 py-2 border bg-gray-900">
        <MdSend className="text-2xl text-white" />
      </Button>
    </div>
  );
};

const Comment = ({
  id,
  author,
  content,
  likes,
  replies,
  timestamp,
}: TComment) => {
  const [openTextArea, setOpenTextArea] = useState(false);

  return (
    <div className="space-y-3">
      <div className="w-full font-light py-2 border space-y-2 bg-gray-50 rounded-md border-gray-200 pb-4 px-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            <FaUserCircle className="text-gray-500" />
            <span className="font-semibold">{author}</span>
          </div>

          <p className="text-sm">{new Date(timestamp).toDateString()}</p>
        </div>

        <p>{content}</p>
      </div>

      <div className="flex items-center  gap-10">
        <Button className="flex text-gray-900 hover:text-gray-700 transition-all duration-150 ease-in-out items-center gap-1 text-sm font-semibold">
          <FaRegHeart className="" />
          <span>{likes} likes</span>
        </Button>
        <Button
          onClick={() => setOpenTextArea(!openTextArea)}
          className="flex items-center ring-0 gap-1 text-gray-900 hover:text-gray-700 transition-all duration-150 ease-in-out text-sm font-semibold"
        >
          {openTextArea === false ? <FaRegComment className="" /> : ""}

          <span>{openTextArea === false ? "Reply" : "Dismiss"}</span>
        </Button>
      </div>

      <div
        className={`flex gap-2 w-10/12 justify-start ${
          openTextArea === false ? " hidden " : " block "
        }`}
      >
        <textarea
          className="w-full focus:border-gray-300 resize-none px-3 py-2 border border-gray-200 bg-gray-50 rounded-lg outline-none "
          rows={1}
          placeholder="Add your comment here"
        ></textarea>

        <Button className="text-white focus:ring-0 hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-md px-3 py-2 border bg-gray-900">
          <MdSend className="text-2xl text-white" />
        </Button>
      </div>

      <div className="flex flex-col items-end space-y-4 ">
        {replies.map((item, i) => (
          <div
            key={i}
            className="px-3 py-2 w-11/12 space-y-2 font-light bg-gray-200 border border-gray-300 rounded-md"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1 items-center">
                <FaUserCircle className="text-gray-500" />
                <span className="font-semibold">{item.author}</span>
              </div>

              <p className="text-sm">
                {new Date(item.timestamp).toDateString()}
              </p>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
