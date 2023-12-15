// components/BlogCard.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ id, date, title, content, image }) => {
  return (
    <div className="bg-white rounded-lg">
      <div className="overflow-hidden aspect-square rounded-t-lg">
        <Image
          width={500}
          height={500}
          src={image}
          className="w-full object-cover"
          alt={`blog-${id}`}
        />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide font-normal text-gray-600">
          {date}
        </p>
        <h5 className="text-lg text-gray-900 mt-2">{title}</h5>
        <p className="text-xs leading-6 text-gray-600 mt-2">{content}</p>
        <Link
          className="text-lg text-gray-600 my-5 block"
          href={`/blog/${id}`}
          passHref
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
