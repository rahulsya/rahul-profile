import { useState } from "react";

export default function TechStack() {
  const [stacks] = useState([
    "react.js",
    "react native",
    "express.js",
    "tailwinds",
    "bootstrap",
    "firebase",
    "contentful",
  ]);
  return (
    <div className="layout py-12 text-gelap-primary dark:text-terang-primary">
      <div className="text-xl  font-semibold">Tech Stack</div>
      <div className="flex flex-row justify-start flex-wrap w-full lg:w-1/2">
        {stacks.map((stack, index) => {
          return (
            <div
              key={index}
              className="py-1 px-4 shadow-lg bg-terang-primary dark:bg-gelap-primary rounded-md mt-2 mr-2"
            >
              {stack}
            </div>
          );
        })}
      </div>
    </div>
  );
}
