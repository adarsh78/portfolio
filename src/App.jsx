import { useEffect, useRef, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa6";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    setIsDarkMode(storedMode === "dark");
  }, []);

  const handleToggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };


  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const topOfPageRef = useRef(null);

  const scrollToTop = () => {
    topOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const skillsRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const workRef = useRef(null);

  const scrollToMyWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  }


  return (
    <>
      <div
      ref={topOfPageRef}
        className={`relative w-full h-full px-[35px] pt-[3rem] lg:px-[80px] lg:pt-[4rem] ${
          isDarkMode ? "bg-[color:hsl(0,0%,21%)] text-[color:hsl(0,7%,76%)]" : "bg-[color:hsl(0,7%,76%)] text-[color:hsl(0,0%,21%)]"
        }`}
      >
        <header className="flex items-center justify-between">
          {isDarkMode ? (
            <MdOutlineLightMode
              onClick={handleToggleMode}
              className="w-[30px] h-[30px] cursor-pointer text-[color:hsl(0,7%,76%)]"
            />
          ) : (
            <FaMoon
              onClick={handleToggleMode}
              className="w-[30px] h-[30px] cursor-pointer text-[color:hsl(0,0%,21%)]"
            />
          )}
          {isDarkMode ? (
            <RiMenu3Fill className="w-[30px] h-[30px] cursor-pointer text-[color:hsl(0,7%,76%)] lg:hidden" />
          ) : (
            <RiMenu3Fill className="w-[30px] h-[30px] cursor-pointer text-[color:hsl(0,0%,21%)] lg:hidden" />
          )}

          <nav className="hidden cursor-pointer lg:flex gap-8 font-merriweather text-[16px] font-bold mr-[3rem]">
           <span onClick={scrollToSkills}>Skills</span>
           <span onClick={scrollToMyWork}>Portfolio</span>
          </nav>
        </header>
      <Hero 
      isDarkMode={isDarkMode}
      scrollToContact={scrollToContact}
      />
      <About 
      isDarkMode={isDarkMode}
      skillsRef={skillsRef}
      />
      <Work 
      isDarkMode={isDarkMode}
      workRef={workRef}
      />
      <Contact 
      isDarkMode={isDarkMode}
      contactRef={contactRef}
      scrollToTop={scrollToTop}
      />
      </div>
    </>
  );
};

export default App;
