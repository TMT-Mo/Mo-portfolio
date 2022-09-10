import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Technologies from "./components/Technologies/Technologies";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import ProjectList from "./components/ProjectList/ProjectList";
function App() {
  const [introIsDisplayed, setIntroIsDisplayed] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setTimeout(() => setIntroIsDisplayed(false), 5000);
  }, []);
  return (
    <>
      {introIsDisplayed && <Intro/>}
      <Header/>
      {useMemo(()=> <Hero/>,[])}
      <About/>
      <Technologies/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </>
  );
}
//

export default App;
