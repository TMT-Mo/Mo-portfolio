import React from "react";
import Project from "../Project/Project";
import todoImg from "../../assets/todo.png";
import eboxImg from "../../assets/project-2.png";

const projectList = [
  // {
  //   id: "item1",
  //   title: "TODO List",
  //   img: todoImg,
  //   description:
  //     "With my todo website, users can utilize it for authentication, fetching, adding, removing and updating data.",
  //   technologies: ["Next JS", "Redux-toolkit", "React", "Material-UI"],
  //   github: "https://github.com/TravisClark/mo-portfolio.git",
  //   address: "https://nextjs-todo-project.vercel.app",
  // },
  {
    id: "item2",
    title: "E-box VLU",
    img: eboxImg,
    description:
      "Main functions: question management, chat, notification management, account management, ... and more. Please read README.md on github for more information",
    technologies: ["React", "Redux-toolkit", "TailwindCss", "Socket.io"],
    github: "https://github.com/TravisClark/E-box-VLU-Client",
    address: "https://jovial-cobbler-3fdbeb.netlify.app/E-boxVLU",
  },
];

export default function ProjectList() {
  return (
    <div data-aos="fade-up">
      <span className="relative flex text-white font-bold w-fit m-auto text-2xl mt-20 -mb-20 md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
        Projects
      </span>
      <div className="carousel m-auto">
        <Project projectList={projectList} />
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {projectList.map((_, index) => (
          <a href={`#item${++index}`} className="btn btn-xs">
            {index}
          </a>
        ))}
      </div>
    </div>
  );
}
