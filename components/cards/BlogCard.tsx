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
      className="space-y-3 cursor-pointer border-b md:border-b-0 pb-8 md:pb-0 md:border-r border-emerald-700 md:pr-5 xl:pr-10 text-gray-600"
    >
      <img
        src={image}
        alt={author}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <small className="text-amber-600 text-sm">{new Date(createdAt).toDateString()}</small>
      <div>
        <p className="flex items-center gap-2 text-slate-900 opacity-80  text-sm italic mb-1">
          <FaUserEdit className="text-xl" />
          <span>by {author}</span>
        </p>
        <p className="line-clamp-2 font-semibold text-emerald-800 text-lg md:text-xl">{title}</p>
      </div>
      <div
        className="line-clamp-3 text-slate-900 opacity-80"
        dangerouslySetInnerHTML={{ __html: blog }}
      />
    </Link>
  );
};

export default BlogCard;
