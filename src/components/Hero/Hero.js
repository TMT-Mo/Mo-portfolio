import Container from "../UI/Container/Container";
import { ReactComponent as Blob } from "../../assets/blob_6-6-39555.svg";
import classes from "./Hero.module.css";
import MyResume from "../../cv/cv.pdf";
import mouseIcon from "../../assets/noun-mouse-scroll-496875.svg";
const Hero = () => {
  return (
    <section id="hero">
      <Container className="z-0 relative bg-gradient-to-b items-center justify-center flex flex-col h-screen sm:p-2">
        <div className="flex flex-row">
          <Blob className={`${classes["blob-1"]} mt-80 h-20 md:ml-0 md:h-60`} />
          <Blob
            className={`${classes["blob-2"]} -mt-40 h-20 md:ml-80 md:h-60`}
          />
        </div>
        <div className="flex absolute flex-row">
          <Blob
            className={`${classes["blob-1"]} blur-2xl mt-80 ml-0 h-60 md:ml-0`}
          />
          <Blob className={`${classes["blob-2"]} blur-2xl -mt-40 ml-80 h-60`} />
        </div>
        <div
          className={`${classes["hero-animation"]} absolute flex flex-col space-y-8 p-10 text-center items-center md:text-left md:items-start md:w-2/3`}
        >
          <p className="text-2xl text-white font-medium lg:text-6xl md:text-4xl">
            Welcome To My Personal Portfolio
          </p>
          <p className="text-md text-justify text-gray-400 md:text-xl lg:text-2xl">
            Hi! My name is Triet but you can call me Mo. This is a portfolio of
            a student who intends to become a professional{" "}
            <span className="text-white uppercase font-medium">
              front-end dev
            </span>{" "}
            in the next few years. Please feel free to look around and hopefully
            you can give me some feedbacks. Thank you so much!
          </p>
          <a href={MyResume} download={MyResume}>
            <button className="px-8 py-4 border border-blue-600 w-fit text-white font-medium rounded-xl bg-transparent transition duration-500 hover:bg-white hover:text-black hover:border-0 hover:scale-105">
              Download CV
            </button>
          </a>
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
