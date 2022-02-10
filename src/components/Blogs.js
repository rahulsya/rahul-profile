import React from "react";

export default function Blogs({ blogs }) {
  return (
    <div className="layout text-gelap-primary dark:text-terang-primary mt-4">
      <p className="font-semibold text-xl">Blogs</p>
      <div className="flex flex-col w-full lg:w-3/4">
        {blogs.map((blog, index) => {
          return (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row justify-between items-center text-sm lg:text-lg py-4 px-4 shadow-lg rounded-md bg-terang-primary dark:bg-gelap-primary mt-4"
            >
              {blog.title}
              {index === 0 && (
                <div className="text-gray-100 animate-pulse py-2 px-2 rounded-md bg-blue-500">
                  New Post
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
