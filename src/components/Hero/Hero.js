import Container from "../UI/Container/Container";
import { ReactComponent as Blob } from "../../assets/blob_6-6-39555.svg";
import classes from "./Hero.module.css";
import MyResume from '../../cv/cv.pdf'
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
            a student who intends to become a professional <span className="text-white uppercase font-medium">front-end dev</span> in the
            next few years. Please feel free to look around and hopefully you
            can give me some feedbacks. Thank you so much!
          </p>
          <a href={MyResume} download={MyResume}><button className="px-8 py-4 border border-blue-600 w-fit text-white font-medium rounded-xl bg-transparent transition duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 hover:border-0 hover:scale-105">
            Download CV
          </button></a>
          
        </div>
      </Container>
    </section>
  );
};

export default Hero;
