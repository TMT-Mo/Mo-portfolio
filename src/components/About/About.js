import Container from "../UI/Container/Container";
// import classes from "./About.module.css";
// import Avatar from "../../assets/avartar.png";
// import MyResume from "../../cv/cv.pdf";
import Lottie from "react-lottie";
import boy from "../../assets/68377-coder-boy.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: boy,
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
    <section id="about">
      <Container className="flex flex-col px-6 items-center">
        <span className="relative flex text-white mb-16 font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          About me
        </span>
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center justify-evenly min-w-full space-y-14 space-x-0 md:flex-row md:space-y-0 md:space-x-16"
        >
          {/* <div className={`${classes["about-me"]} md:w-1/2`}>
            <div className={classes.content}>
              <img src={Avatar} alt="" />
              <h2>
                A final year student
                <br />
                <span>A front-end developer</span>
              </h2>
              <a href={MyResume} download={MyResume}>
                <button>See more</button>
              </a>
            </div>
          </div> */}
          <div style={{ maxWidth: 400 }}>
            <Lottie
              options={defaultOptions}
              height={dimension}
              width={dimension}
            />
          </div>
          <p className="border-2 border-white border-double py-10 px-8 tracking-wider text-justify text-white text-lg md:w-1/2 xl:w-1/3 lg:py-20">
            Currently, I am a 4th year student who is self-taught and really
            determined on becoming a good frontend developer. With all of
            effort, I will try my best to contribute to any projects!
          </p>
        </div>
      </Container>
    </section>
  );
};
export default About;
