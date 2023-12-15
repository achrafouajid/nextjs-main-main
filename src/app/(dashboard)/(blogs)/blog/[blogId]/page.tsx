import Image from "next/image";
import React from "react";
import { data } from "../page";
import { paste } from "@testing-library/user-event/dist/paste";
import { notFound } from "next/navigation";

const Page = ({ params: { blogId } }: { params: { blogId: string } }) => {
  if (isNaN(parseInt(blogId))) notFound();

  const blog = data.find((post) => post.id === parseInt(blogId));

  if (!blog) notFound();

  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        {/* Blog Image or Video */}
        <div className="rounded-lg  relative overflow-hidden mb-4">
          <Image
            loading="eager"
            height={1000}
            width={1000}
            src={blog.image}
            alt={`Blog Image ${blog.id}`}
            className=" object-cover w-full h-auto "
          />
          {/* Replace the img tag with your video embed code if needed */}
        </div>
        {/* Blog Information */}
        <div className="text-center mb-4">
          <p className="text-gray-500">{blog.date}</p>
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-gray-500">
            Number of Words - Min of Reading - Total Views
          </p>
        </div>
        {/* Blog Content */}
        <div>
          <p>{blog.content}</p>
          {/* Add more content as needed */}
        </div>
      </div>
      <div className="w-1/4 p-4 ">
        <div className="mb-4 bg-white rounded-lg p-6">
          <a href="/previous-article" className="flex items-center mt-2">
            <div className="relative">
              {" "}
              <Image
                height={64}
                width={64}
                src={blog.image}
                alt={`Previous Article ${blog.id}`}
                className="rounded-full w-16 h-16 mr-2"
              />
            </div>
            <div>
              <p className="text-lg font-bold">Previous Article Title</p>
              <p className="text-gray-500">Date of Publication</p>
            </div>
          </a>
        </div>
        <div className="mb-4 bg-white rounded-lg p-6">
          <p>Tags:</p>
          <ul className="list-disc pl-4">
            <li>Tag 1</li>
            <li>Tag 2</li>
          </ul>
        </div>
        <div className="mb-4 bg-white rounded-lg p-6">
          <a href="/previous-article" className="flex items-center mt-2">
            <div className="relative">
              <Image
                height={32}
                width={32}
                src={blog.image}
                alt={`Previous Article ${blog.id}`}
                className="w-8 h-8 rounded mr-2"
              />
            </div>
            <span>Previous Article Title</span>
          </a>
        </div>
        <div className="mb-4 bg-white rounded-lg p-6">
          <a href="/blog">Back to Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
