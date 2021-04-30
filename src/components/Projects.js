import { useState } from "react";
import DummyImg from "../assets/icons/ecommerce.jpeg";

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "courses dashboard",
      tags: ["tailwids", "firebase", "react.js", "express"],
    },
    {
      id: 2,
      title: "gogarden ecommerce",
      tags: [
        "tailwids",
        "courses dashboard with react native and firebase",
        "react.js",
        "express",
      ],
    },
    {
      id: 3,
      title: "fland react native",
      tags: ["tailwids", "mysql", "react.js"],
    },
  ]);
  return (
    <div className="layout flex flex-col ">
      <div className="text-xl text-gelap-primary dark:text-terang-primary font-semibold mb-4">
        Projects
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="w-full p-4 bg-terang-primary dark:bg-gelap-primary flex flex-col rounded-lg text-terang-primary shadow-lg"
            >
              <p className="text-gelap-primary capitalize dark:text-terang-primary font-semibold pb-2">
                {project.title}
              </p>
              <img
                src={DummyImg}
                alt="ecommerce"
                className="h-40 w-full object-cover rounded-md"
              />
              <p className="mt-2 text-gelap-primary dark:text-terang-primary py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                odit.
              </p>
              <div className="flex flex-row flex-wrap justify-start ">
                {project.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 px-4 text-gelap-primary dark:text-terang-primary bg-terang-secondary dark:bg-gelap-secondary rounded-md mt-2 mr-2"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
