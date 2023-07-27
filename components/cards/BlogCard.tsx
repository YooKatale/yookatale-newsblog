/* eslint-disable @next/next/no-img-element */
import { IBlog } from "@lib/interfaces";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";

const BlogCard = ({
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
      className="space-y-3 cursor-pointer md:border-r border-gray-400 md:pr-5 lg:pr-10 text-gray-600"
    >
      <img
        src={image}
        alt={author}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <p>{new Date(createdAt).toDateString()}</p>
      <div>
        <p className="flex items-center gap-2">
          <FaUserEdit className="text-xl" />
          <span>by {author}</span>
        </p>
        <p className="line-clamp-2 font-semibold text-black text-xl">{title}</p>
      </div>
      <div
        className="line-clamp-3"
        dangerouslySetInnerHTML={{ __html: blog }}
      />
    </Link>
  );
};

export default BlogCard;
