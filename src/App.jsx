import { useEffect, useState } from "react";
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

  return (
    <>
      <div
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
           <a href="">Skills</a>
           <a href="">Portfolio</a>
          </nav>
        </header>
      <Hero 
      isDarkMode={isDarkMode}
      />
      <About 
      isDarkMode={isDarkMode}
      />
      <Work 
      isDarkMode={isDarkMode}
      />
      <Contact 
      isDarkMode={isDarkMode}
      />
      </div>
    </>
  );
};

export default App;
