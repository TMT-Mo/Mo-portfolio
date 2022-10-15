import React from "react";
import Project from "../Project/Project";
import todoImg from "../../assets/todo.png";
import eboxImg from "../../assets/project-2.png";
import capImg from "../../assets/capstone.png";

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
    id: "item1",
    title: "E-box VLU",
    img: eboxImg,
    description:
      "Main functions: question management, chat, notification management, account management, ... and more. Please read README.md on github for full accessibility",
    technologies: ["React", "Redux-toolkit", "TailwindCss", "Socket.io"],
    github: "https://github.com/TMT-Mo/E-box-VLU-Client",
    address: "https://jovial-cobbler-3fdbeb.netlify.app/E-boxVLU",
    isProcessing: false,
    account: [{
      username: 'Admin account: 197ad00001',
      password: 'Password: 32343638'
    },
  {
      username: 'Student account: 197st00001',
      password: 'Password: 32343638'
    }]
  },
  {
    id: "item2",
    title: "Tic-tac-toe",
    img: capImg,
    description: "Just a normal tic-tac-toe game with a little advanced",
    technologies: ["React"],
    github: "https://github.com/TMT-Mo/tic-tac-toe",
    address: "https://tmt-mo.github.io/tic-tac-toe/",
    isProcessing: false,
  },
  {
    id: "item3",
    title: "Capstone",
    img: capImg,
    description: "The project is still in development process...",
    technologies: ["React", "Redux-toolkit", "Scss", "Typescript"],
    github: "https://github.com/TMT-Mo/capstone-project-client",
    address: "",
    isProcessing: true,
  },
  
  
];

export default function ProjectList() {
  return (
    <div data-aos="fade-up" id="projects" className="bg-slate-200 py-16  relative">
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
