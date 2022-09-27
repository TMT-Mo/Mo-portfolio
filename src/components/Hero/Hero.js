import Container from "../UI/Container/Container";
import { ReactComponent as Blob } from "../../assets/blob_6-6-39555.svg";
import classes from "./Hero.module.css";
import MyResume from "../../cv/cv.pdf";
import mouseIcon from "../../assets/noun-mouse-scroll-496875.svg";
import Lottie from "react-lottie";
import coding from "../../assets/71619-coding.json";
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerWidth } = window;
  const dimension = () => {
    if (innerWidth < 500) return 200;
    else return 400;
  };
  return (
    <section id="hero" className="bg-slate-200">
      <Container
        className={`z-0 relative items-center justify-center py-20 flex flex-col h-fit min-w-full p-0 md:h-screen`}
      >
        <div
          className={`${classes["bg-effect"]} flex absolute flex-row w-full h-full`}
        >
          {/* <Blob
            className={`${classes["blob-1"]} mt-100 h-20 md:ml-0 md:h-60`}
          />
          <Blob
            className={`${classes["blob-2"]} -mt-40 h-20 md:ml-80 md:h-60`}
          /> */}
        </div>
        {/* <div className="flex absolute flex-row">
          <Blob
            className={`${classes["blob-1"]} blur-2xl mt-100 h-20 md:ml-0 md:h-60`}
          />
          <Blob
            className={`${classes["blob-2"]} blur-2xl -mt-40 h-20 md:ml-80 md:h-60`}
          />
        </div> */}
        <div
          // data-aos={setTimeout(() => "fade-up", [2000])}
          className={`${classes["hero-animation"]} flex w-full items-center justify-between flex-col md:flex-row lg:justify-evenly 2xl:w-2/3`}
        >
          <div className="flex flex-col  space-y-8 p-10 text-center items-center mt-10 md:text-left md:items-start md:w-1/2 md:mt-0">
            <p className="text-2xl text-white font-medium lg:text-6xl md:text-4xl">
              Welcome To My Personal Portfolio
            </p>
            <p className="text-md text-justify text-slate-300 md:text-xl lg:text-2xl">
              Hi! My name is Triet but you can call me Mo. This is a portfolio
              of a student who intends to become a professional{" "}
              <span className="text-white uppercase font-semibold">
                front-end dev
              </span> in the next few years. Please feel free to look around and
              hopefully you can give me some feedbacks. Thank you so much!
            </p>
            <a href={MyResume} download={MyResume}>
              <button
                className={` px-8 py-4 border group relative border-blue-600 w-fit text-white font-medium hover:text-black rounded-xl overflow-hidden bg-transparent`}
              >
                Download CV
                <div
                  className={`absolute hidden top-0 left-0 ${classes.downloadBtn} group-hover:block`}
                >
                  <button
                    className={`px-8 py-4 border relative w-fit whitespace-nowrap text-black font-medium`}
                  >
                    Download CV
                  </button>
                </div>
              </button>
            </a>
          </div>
          <div style={{ maxWidth: 400 }} className="flex">
            <Lottie
              options={defaultOptions}
              height={dimension}
              width={dimension}
            />
          </div>
          {/* <div className="w-24 self-center flex flex-col animate-bounce -bottom-24 absolute items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-white "
            >
              <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
              <path d="M11 6h2v6h-2z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
            </svg>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
