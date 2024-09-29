import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const Contact = ({ isDarkMode }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          {/* <div className={`${isDarkMode ? "" : "border-t-[1px] border-[color:hsla(0,0%,21%,1)]"}`}></div> */}
          <h3 className="font-bree-serif text-[32px] pt-8 w-[140px] lg:text-[100px] lg:leading-[135px]">
            Let's Connect!
          </h3>
          <img
            src={
              isDarkMode
                ? "./arrow_1_dark_mode.png"
                : "./arrow_1_light_mode.png"
            }
            alt={isDarkMode ? "arrow_1_dark_mode" : "arrow_1_light_mode"}
            className="relative left-[150px] bottom-[47px] lg:hidden"
          />

          <img
            src={
              isDarkMode
                ? "./arrow_2_dark_mode.png"
                : "./arrow_2_light_mode.png"
            }
            alt={isDarkMode ? "arrow_2_dark_mode" : "arrow_2_light_mode"}
            className="relative left-[450px] bottom-[100px] hidden lg:block w-[500px]"
          />
        </div>

        <div className="flex flex-col items-end font-merriweather lg:mb-20">
          <form>
            <div className="flex flex-row-reverse">
              <input
                type="text"
                id="name"
                required
                className={`bg-transparent border-b-[1px] ${
                  isDarkMode
                    ? "border-[color:hsla(0,7%,76%,1)]"
                    : "border-[color:hsla(0,0%,21%,1)]"
                } w-[250px] mr-4 mb-2`}
              />
              <label
                htmlFor="name"
                className="uppercase text-[12px] relative left-[37px]"
              >
                Name
              </label>
            </div>

            <div className="flex flex-row-reverse">
              <input
                type="text"
                id="email"
                required
                className={`bg-transparent border-b-[1px] ${
                  isDarkMode
                    ? "border-[color:hsla(0,7%,76%,1)]"
                    : "border-[color:hsla(0,0%,21%,1)]"
                } w-[250px] mr-4 mb-2`}
              />
              <label
                htmlFor="email"
                className="uppercase text-[12px] relative left-10"
              >
                Email
              </label>
            </div>

            <div className="flex flex-row-reverse">
              <textarea
                id="message"
                cols="30"
                rows="3"
                required
                className={`bg-transparent border-b-[1px] ${
                  isDarkMode
                    ? "border-[color:hsla(0,7%,76%,1)]"
                    : "border-[color:hsla(0,0%,21%,1)]"
                } w-[250px] mr-4 ml-10`}
              />
              <label
                htmlFor="message"
                className="uppercase text-[12px] relative left-[98px]"
              >
                Message
              </label>
            </div>
          </form>

          <button
            type="submit"
            className={`uppercase cursor-pointer mt-4 mr-4 border-b-[3px] ${
              isDarkMode
                ? "border-[color:hsla(0,7%,76%,1)]"
                : "border-[color:hsla(0,0%,21%,1)]"
            } text-[14px]`}
          >
            Send Message
          </button>
        </div>
      </div>

      <div
        className={`pt-[90px] border-b-[1px] pb-7 lg:pt-0 lg:pb-0 ${
          isDarkMode
            ? "border-[color:hsla(0,7%,76%,1)] text-[color:hsla(48,71%,49%,1)]"
            : "border-[color:hsla(0,0%,21%,1)] text-[color:hsla(0,0%,21%,1)]"
        }`}
      >
        <div className="flex justify-end gap-4 lg:hidden text-[21px] cursor-pointer">
          <FaGithub />
          <FaLinkedin />
          <FaXTwitter />
        </div>
      </div>

      <div className="flex justify-between items-center text-[11px] pt-5 pb-10 lg:text-[12px]">
        <span>
          <p>&copy;Adarsh Gupta 2024</p>
        </span>

        <span className="flex items-center gap-2 ml-[37px]">
          <p>Designed with &#x2665; by Deepali</p>
          <IoArrowUpCircleOutline className="text-[22px] cursor-pointer lg:hidden" />
        </span>

        <div className="flex gap-8 lg:items-center">
          <span
            className={`hidden lg:flex text-[20px] cursor-pointer gap-4 ${
              isDarkMode
                ? "border-[color:hsla(0,7%,76%,1)] text-[color:hsla(48,71%,49%,1)]"
                : "border-[color:hsla(0,0%,21%,1)] text-[color:hsla(0,0%,21%,1)]"
            }`}
          >
            <FaGithub />
            <FaLinkedin />
            <FaXTwitter />
          </span>
          <IoArrowUpCircleOutline className="text-[30px] cursor-pointer hidden lg:block" />
        </div>
      </div>
    </>
  );
};

export default Contact;
