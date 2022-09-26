import Container from "../UI/Container/Container";
// import htmlIcon from "../../assets/icons8-html-5.svg";
// import cssIcon from "../../assets/icons8-css3.svg";
// import tailwindIcon from "../../assets/tailwind-css.svg";
// import jsIcon from "../../assets/icons8-javascript.svg";
// import sassIcon from "../../assets/icons8-sass.svg";
// import nextIcon from "../../assets/nextjs.svg";
// import reduxIcon from "../../assets/icons8-redux.svg";
// import materialIcon from "../../assets/icons8-material-ui.svg";
// import reactIcon from "../../assets/icons8-react.svg";
// import typescript from "../../assets/typescript-svgrepo-com.svg";
import classes from "./Technologies.module.css";
import TagSphere from "../TagSphere/TagSphere";
import toolIcon from "../../assets/88930-coding.json";
import Lottie from "react-lottie";
import React from "react";
import { Popover, Typography } from "@mui/material";
const Technologies = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: toolIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerWidth } = window;
  const dimension = () => {
    if (innerWidth < 500) return 200;
    else return 400;
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <section id="technologies" className={`${classes.technologies} py-16`}>
      <Container className="flex flex-col space-y-12  items-center mx-auto px-6 md:px-16">
        <span className="relative flex text-black font-bold text-2xl md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Technologies
        </span>
        <div className="w-full self-start lg:w-1/2">
          <p
            data-aos="fade-up"
            className="text-lg min-w-full md:pl-20 text-black tracking-wider"
          >
            These are some technologies that I've learnt so far through some
            courses on Udemy such as: 
            <a
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              className="font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              React full complete guide
            </a>
            ,{" "}
            <a
              href="https://www.udemy.com/course/the-web-developer-bootcamp/"
              className="font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              Web Developer Bootcamp
            </a>
            . Others are from university, internship, youtube,...
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col space-y-8 min-w-full justify-around items-center md:flex-row md:space-y-0 md:space-x-24 lg:w-9/12"
        >
          {/* Card 1 */}
          {/* <div
            className={`${classes["first-card"]} relative md:w-1/2 group rounded-xl  overflow-hidden bg-white`}
          >
            <div className={`flex flex-col space-y-2 text-black p-4 `}>
              <h1 className="font-medium text-xl">DOM world</h1>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col text-center">
                  <img src={htmlIcon} alt="" />
                  <span>Html</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={cssIcon} alt="" />
                  <span>Css</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={jsIcon} className="h-12" alt="" />
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col text-center">
                  <img src={typescript} className="h-12" alt="" />
                  <span>Typescript</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={sassIcon} className="h-12" alt="" />
                  <span>Sass/ Scss</span>
                </div>
              </div>
            </div>

            <div
              className={`${classes["left-extras"]} group-hover:flex flex-col space-y-2 text-black p-4 rounded-xl group-hover:translate-x-full  transition duration-300 group-hover:opacity-100 ease-in`}
            >
              <h1 className="font-medium text-xl">DOM world</h1>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col text-center">
                  <img src={htmlIcon} alt="" />
                  <span>Html</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={cssIcon} alt="" />
                  <span>Css</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={jsIcon} className="h-12" alt="" />
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col text-center">
                  <img src={typescript} className="h-12" alt="" />
                  <span>Typescript</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={sassIcon} className="h-12" alt="" />
                  <span>Sass/ Scss</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Card 2 */}
          {/* <div 
          className="flex flex-col space-y-2 text-black p-4 rounded-xl bg-white md:w-1/2"
          >
            <div>
              <h1 className="font-medium text-xl">Libraries/ Frameworks</h1>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col text-center">
                  <img src={reactIcon} className="h-12" alt="" />
                  <span>React JS</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={reduxIcon} className="h-12" alt="" />
                  <span>Redux</span>
                </div>
                <div className="flex flex-col text-center">
                  <img src={tailwindIcon} className="h-12 w-12" alt="" />
                  <span>Tailwind Css</span>
                </div>
              </div>
              <div className="flex flex-row justify-evenly ">
                <div className="flex flex-col text-center">
                  <img src={materialIcon} className="h-12" alt="" />
                  <span>Material UI</span>
                </div>
              </div>
            </div>
          </div> */}
          <TagSphere />
          <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <div className="relative" style={{ maxWidth: 500 }}>
              {/* <Tyora */}
              <Lottie
                options={defaultOptions}
                height={dimension}
                width={dimension}
              />
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <div
                  className={`${classes["first-card"]} z-30  w-full top-0 group rounded-xl  bg-white`}
                >
                  <div className={`flex flex-col space-y-2 text-black p-4`}>
                    <h1 className="font-medium text-xl">What I can do:</h1>
                    <ul className="flex flex-col list-disc pl-4">
                      <li>Call API</li>
                      <li>Read Libraries/ Frameworks's document</li>
                      <li>Generate components</li>
                      <li>Learn to write clean code</li>
                    </ul>
                  </div>
                </div>
              </Popover>
            </div>
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
