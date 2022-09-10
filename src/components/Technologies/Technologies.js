import Container from "../UI/Container/Container";
import htmlIcon from "../../assets/icons8-html-5.svg";
import cssIcon from "../../assets/icons8-css3.svg";
import tailwindIcon from "../../assets/tailwind-css.svg";
import jsIcon from "../../assets/icons8-javascript.svg";
import sassIcon from "../../assets/icons8-sass.svg";
import nextIcon from "../../assets/nextjs.svg";
import reduxIcon from "../../assets/icons8-redux.svg";
import materialIcon from "../../assets/icons8-material-ui.svg";
import reactIcon from "../../assets/icons8-react.svg";
import typescript from "../../assets/typescript-svgrepo-com.svg";
const Technologies = () => {
  return (
    <section id="technologies">
      <Container className="flex flex-col space-y-12 mt-36 items-center mx-auto px-6 md:px-16 ">
        <span className="relative flex text-white font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Technologies
        </span>
        <p
          data-aos="fade-up"
          className="text-lg text-justify w-full text-gray-400 tracking-wider lg:w-9/12"
        >
          These are some technologies that I've learnt <br /> so far through
          some small projects and courses.
        </p>
        <div
          data-aos="fade-up"
          className="flex flex-col space-y-8 w-full justify-evenly md:flex-row md:space-y-0 md:space-x-8 lg:w-9/12"
        >
          <div className=" flex flex-col space-y-2 text-black p-4 rounded-xl bg-white md:w-1/2">
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
          <div className="flex flex-col space-y-2 text-black p-4 rounded-xl bg-white md:w-1/2">
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
              {/* <div className="flex flex-col text-center">
                <img src={nextIcon} className="h-12 w-12" alt="" />
                <span>Next JS</span>
              </div> */}
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
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
