import Container from "../UI/Container/Container";
import classes from "./About.module.css";
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
    <section id="about" className="bg-slate-200">
      <Container className="flex flex-col px-6 py-20 items-center">
        <span className="relative flex text-black mb-16 font-bold text-2xl md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
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
          <div className="relative group cursor-pointer bg-white rounded-xl shadow-sm py-10 px-8 tracking-wider  text-black text-md lg:text-justify lg:text-lg md:w-1/2 xl:w-1/3 lg:py-10">
            <p>
              <span className="font-bold text-secondary-blue underline">
                Little of me:
                <br />
              </span>
              Currently, I am a final year student who is self-taught and seriously
              determined on becoming{" "}
              <span className="font-bold">a good frontend developer</span>. I have some experience working with Node + Express and ReactJS 18 
            </p>
            <div
              className={`${classes["second-about"]} hidden group-hover:block`}
            >
              <p>
                <span className="font-bold text-white underline">
                  Something else:
                </span>
                <ul className="list-disc pl-3">
                  <li>My university: Van Lang uni.</li>
                  <li>Major: Software Engineering.</li>
                  <li>GPA: 3.32 =&gt; 8.35.</li>
                  <li>TOEIC: 670/ 990.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
