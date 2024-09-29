import React from "react";
import { skillsData } from "../Api/skills";

const About = ({ isDarkMode }) => {
  return (
    <>
      <div className="text-center mt-[60px] lg:text-justify lg:mt-[30px]">
        <h2 className="font-bree-serif text-[36px] lg:text-[100px]">
          About Me
        </h2>

        <section className="font-merriweather text-[13px] mt-5">
          <div className="lg:hidden flex flex-col gap-4">
            <p>
              I'm a passionate front-end developer with a knack for turning
              ideas into beautiful and interactive web experiences.
            </p>
            <p>
              I thrive in collaborative environments and enjoy using my
              problem-solving skills to bridge the gap between design and
              functionality.
            </p>
            <p>
              My expertise lies in HTML, CSS, JavaScript and React, and I'm
              constantly learning and exploring new technologies to stay ahead
              of the curve. I believe in creating user-centric interfaces that
              are not only visually appealing but also intuitive and accessible
              for everyone.
            </p>
          </div>

          <div className="hidden lg:block lg:text-[21px] lg:leading-[35px]">
            <p>
              {" "}
              I'm a passionate front-end developer with a knack for turning
              ideas into beautiful and interactive web experiences. I thrive in
              collaborative environments and enjoy using my problem-solving
              skills to bridge the gap between design and functionality. My
              expertise lies in HTML, CSS, JavaScript and React, and I'm
              constantly learning and exploring new technologies to stay ahead
              of the curve. I believe in creating user-centric interfaces that
              are not only visually appealing but also intuitive and accessible
              for everyone.
            </p>
          </div>
        </section>

        <h4 className="font-bree-serif text-[20px] mt-8 mb-5 lg:text-[50px] lg:mt-[4rem]">Skills</h4>

        <div
          className={`border-[1px] ${
            isDarkMode
              ? "border-[color:hsl(0,7%,76%)]"
              : "border-[color:hsl(0,0%,21%)]"
          } rounded-lg py-[50px] flex flex-wrap pl-[25px] gap-7 lg:gap-10 lg:px-[70px]`}
        >
          {skillsData.map((skill, index) => (    
            <div key={index} className="flex flex-col items-center w-[65px] lg:w-[76px]">
              <span className="text-[45px] lg:text-[72px]">
                {React.createElement(skill.icon)}
              </span>
              <span className="font-merriweather text-[13px] mt-2 lg:text-[18px]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
