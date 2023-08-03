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
import { IBlog, IComment } from "@lib/interfaces";

import Subscribe from "@components/Subscribe";
import Button from "@components/widgets/Button";
import { isLoggedInState, useAuth } from "@lib/atoms";
import { comments } from "@lib/constants";
import TextArea from "@components/widgets/TextArea";

const Blog = ({ params: { idx } }: { params: { idx: string } }) => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [comment, setComment] = useState<string>("");
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [loading, setLoading] = useState<boolean>(false);
  const [blogComments, setBlogComments] = useState<IComment[]>([]);
  const authData = useAuth();

  useEffect(() => {
    if (!blog) fetchBlog();

    if (blogComments.length === 0) getComments();
  }, [blog, blogComments]);

  const fetchBlog = async () => {
    const { data } = await Service.get(`${ROUTES.BLOG}/${idx}`);
    if (data) setBlog(data);
  };

  const getComments = async () => {
    const { data } = await Service.get(ROUTES.NEWSBLOGCOMMENT);

    if (data) setBlogComments(data);
  };

  const addComment = async () => {
    try {
      if (
        comment !== "" &&
        comment !== undefined &&
        comment !== null &&
        authData !== null
      ) {
        setLoading(true);

        const newComment: any = {
          user: authData._id,
          comment,
          newsblogId: idx,
        };

        await Service.post(ROUTES.NEWSBLOGCOMMENT, newComment);

        setLoading(false);
        setComment("");
      }
    } catch (error) {}
  };

  const getCommentTime = (createdAt: string) => {
    return new Date(createdAt);
  };

  return (
    <div className="w-full bg-white py-10 text-black">
      <div
        className={`fixed top-0 flex items-center justify-center z-[3] bg-gray-800/40 w-full h-screen ${
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
            <div className="w-full flex justify-between items-center gap-3">
              <FaUserCircle className="text-4xl w-14 text-gray-500" />
              <TextArea
                className="focus:border-gray-300 w-full resize-none px-3 py-2 border border-gray-200 bg-gray-50 rounded-lg outline-none "
                value={comment}
                placeholder="Comment here"
                handleChange={(e) => setComment(e.target.value)}
                rows={1}
              />

              <Button
                onClick={addComment}
                className="text-white focus:ring-0 hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-md px-3 py-2 border bg-gray-900"
              >
                {loading === false ? (
                  <MdSend className="text-2xl text-white" />
                ) : (
                  <span className="text-white">loading...</span>
                )}
              </Button>
            </div>

            <div className="space-y-6">
              {blogComments
                ? blogComments
                    .filter((comment) => comment.newsblog === idx)
                    .map((item, i) => <Comment key={i} {...item} />)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

const Comment = ({
  _id,
  user,
  comment,
  replies,
  newsblog,
  createdAt,
}: IComment) => {
  const [openTextArea, setOpenTextArea] = useState<boolean>(false);

  return (
    <div className="space-y-3">
      <div className="w-full font-light py-2 border space-y-2 bg-gray-50 rounded-md border-gray-200 pb-4 px-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            <FaUserCircle className="text-gray-500" />
            <span className="text-xs md:text-base font-semibold">{user}</span>
          </div>

          <p className="text-xs font-light md:font-normal md:text-sm">
            {createdAt ? new Date(createdAt).toDateString() : ""}
          </p>
        </div>

        <p>{comment}</p>
      </div>

      <div className="flex items-center hidden  gap-10">
        <Button className="flex text-gray-900 hover:text-gray-700 transition-all duration-150 ease-in-out items-center gap-1 text-sm font-semibold">
          <FaRegHeart className="" />
          <span>{0} likes</span>
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
        <TextArea
          rows={1}
          className="w-full focus:border-gray-300 resize-none px-3 py-2 border border-gray-200 bg-gray-50 rounded-lg outline-none"
          placeholder="Reply here"
          value={""}
          handleChange={(e) => e.target.value}
        />

        <Button className="text-white focus:ring-0 hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-md px-3 py-2 border bg-gray-900">
          <MdSend className="text-2xl text-white" />
        </Button>
      </div>

      <div className="hidden flex-col items-end space-y-4 ">
        {replies
          ? replies.map((item, i) => (
              <div
                key={i}
                className="px-3 py-2 w-11/12 space-y-2 font-light bg-gray-200 border border-gray-300 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 items-center">
                    <FaUserCircle className="text-gray-500" />
                    <span className="text-xs md:text-base font-semibold">
                      author
                    </span>
                  </div>

                  <p className="text-xs font-light md:font-normal md:text-sm">
                    date
                  </p>
                </div>
                <p>comment</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
