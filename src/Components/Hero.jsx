import { IoMdMail } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Hero = ({ isDarkMode, scrollToContact }) => {

  const redirectToGithub = () => {
    window.open("https://github.com/adarsh78", "_blank", "noopener,noreferrer")
  }

  const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/adarsh78/", "_blank", "noopener,noreferrer")
  }

  const redirectToTwitter = () => {
    window.open("https://x.com/adarsh_kgupta", "_blank", "noopener,noreferrer")
  }

  const downloadResume = () => {
    window.location.href = "https://code-crusader-portfolio.netlify.app/src/assets/files/Resume_Adarsh_Gupta.pdf"
  }

  return (
    <>
      <div className="absolute right-[70px] hidden lg:flex flex-col gap-4 items-center">
        <div className={`w-[1px] h-[100px] ${isDarkMode ? "bg-[hsla(0,7%,76%,1)]" : "bg-[hsla(0,0%,21%,1)]"}`}></div>
        <div
          className={`flex flex-col text-[20px] cursor-pointer gap-4 my-3 ${
            isDarkMode
              ? "border-[color:hsla(0,7%,76%,1)] text-[color:hsla(48,71%,49%,1)]"
              : "border-[color:hsla(0,0%,21%,1)] text-[color:hsla(0,0%,21%,1)]"
          }`}
        >
          <FaGithub onClick={redirectToGithub}/>
          <FaLinkedin onClick={redirectToLinkedIn}/>
          <FaXTwitter onClick={redirectToTwitter}/>
        </div>
        <div className={`w-[1px] h-[30rem] ${isDarkMode ? "bg-[hsla(0,7%,76%,1)]" : "bg-[hsla(0,0%,21%,1)]"}`}></div>
      </div>

      <div className="mt-[5rem] lg:mt-[7rem]">
        <h1 className="text-[2.2rem] font-bree-serif leading-[42px] lg:text-[6.25rem] lg:w-[860px] lg:leading-[105px]">
          Nice to meet you! I'm{" "}
          <span
            className={`${
              isDarkMode
                ? "text-[color:hsl(48,71%,49%)]"
                : "text-[color:hsl(0,0%,40%)]"
            } `}
          >
            Adarsh Gupta
          </span>
          .
        </h1>

        <img
          src={
            isDarkMode
              ? "./underline_dark_mode.png"
              : "./underline_light_mode.png"
          }
          alt={isDarkMode ? "underline_dark_mode" : "underline_light_mode"}
          className="ml-[112px] lg:hidden"
        />

        <img
          src={
            isDarkMode
              ? "./underline_dark_mode_desktop.png"
              : "./underline_light_mode_desktop.png"
          }
          alt={
            isDarkMode
              ? "underline_dark_mode_desktop"
              : "underline_light_mode_desktop"
          }
          className="lg:ml-[280px] hidden lg:block"
        />

        <p className="text-center font-merriweather text-[12.7px] mt-8 leading-5 lg:text-[18px] lg:text-left lg:w-[450px] lg:leading-[30px] lg:mt-10 lg:ml-1">
          Based in Pune, India, I’m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
      </div>

      <div className="flex justify-center gap-5 mt-[60px] text-[12px] font-semibold lg:justify-start lg:mt-[50px]">
        <button 
        onClick={scrollToContact}
        className="hover:bg-[color:hsla(48,71%,70%,1)] bg-[color:hsla(48,71%,49%,1)] text-[color:hsla(0,3%,17%,1)] flex items-center gap-2 px-4 py-2 cursor-pointer rounded-2xl lg:px-8 lg:py-4 lg:rounded-full lg:text-xl">
          Contact Me
          <IoMdMail />
        </button>

        <button 
        onClick={downloadResume}
        className="hover:bg-[color:hsla(0,2%,30%,1)] bg-[color:hsla(0,2%,17%,1)] text-[color:hsla(0,7%,76%,1)] flex items-center gap-2 px-6 py-2 cursor-pointer rounded-2xl lg:px-8 lg:py-4 lg:rounded-full lg:text-xl">
          Resume
          <FaDownload />
        </button>
      </div>

      <div
        className={`uppercase mt-[100px] pb-8 lg:pb-10 border-b-[1px] ${
          isDarkMode
            ? "border-[color:hsl(0,7%,76%)]"
            : "border-[color:hsl(0,0%,21%)]"
        }`}
      >
        <img
          src={
            isDarkMode ? "./curved_text_dark.png" : "./curved_text_light.png"
          }
          alt={isDarkMode ? "curve_text_dark" : "curve_text_light"}
          className="mx-auto lg:mr-[3.5rem] lg:-mt-[10rem]"
        />
        <FiArrowDownCircle className="text-[30px] mx-auto cursor-pointer relative bottom-[105px] lg:bottom-0" />
      </div>
    </>
  );
};

export default Hero;
