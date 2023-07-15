import React from "react";
import Project from "../Project/Project";
import todoImg from "../../assets/todo.png";
import eboxImg from "../../assets/project-2.png";
import capImg from "../../assets/capstone.png";

const projectList = [
  {
    id: "item1",
    title: "E-Form",
    img: capImg,
    description:
      "E-Form is a software that manages digital application form designed to help individuals and businesses create, manage, and store application forms electronically. This type of software simplifies the process of creating, tracking, and executing applications, making it easier for businesses to manage their files. Please read Readme for full details.",
    technologies: ["React", "Redux-toolkit", "MUI", "Typescript"],
    github: "https://lnkd.in/gRaNnVxR",
    address: "https://e-form.netlify.app",
    account: [
      {
        username: "Admin account: admin",
        password: "Password: P@ssw0rd",
      }
    ],
    isProcessing: false,
  },
  {
    id: "item2",
    title: "E-box VLU",
    img: eboxImg,
    description:
      "Main functions: question management, chat, notification management, account management, ... and more. Please read README.md on github for full accessibility",
    technologies: ["React", "Redux-toolkit", "TailwindCss", "Socket.io"],
    github: "https://github.com/TMT-Mo/E-Box-Client.git",
    address: "https://e-box.netlify.app",
    isProcessing: false,
    account: [
      {
        username: "Admin account: admin",
        password: "Password: admin",
      }
    ],
  },
  // {
  //   id: "item3",
  //   title: "Tic-tac-toe",
  //   img: capImg,
  //   description: "Just a normal tic-tac-toe game with a little advanced",
  //   technologies: ["React"],
  //   github: "https://github.com/TMT-Mo/tic-tac-toe",
  //   address: "https://tmt-mo.github.io/tic-tac-toe/",
  //   isProcessing: false,
  // },
];

export default function ProjectList() {
  return (
    <div
      data-aos="fade-up"
      id="projects"
      className="bg-slate-200 py-16  relative"
    >
      <span className="relative flex text-black font-bold w-fit m-auto text-2xl  md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
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
