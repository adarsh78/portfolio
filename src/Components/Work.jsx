const Work = ({ isDarkMode, workRef }) => {
  return (
    <>
      <div
      ref={workRef}
        className={`${
          isDarkMode
            ? "bg-[color:hsla(0,2%,17%,1)]"
            : ""
        } mt-[80px] pb-[100px] w-[98.9vw] -ml-[34.5px] lg:-ml-[80px]`}
      >
        <h3 className="pt-10 px-20 text-[36px] text-center font-bree-serif lg:text-[100px] lg:text-left lg:pt-20">
          My Work
        </h3>

        <div className="flex flex-col justify-center items-center gap-8 mt-8 lg:flex-row lg:flex-wrap lg:gap-10 lg:px-[118px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((project, index) => (
            <div
              key={index}
              className=" rounded-3xl px-[130px] py-[120px] bg-[color:hsla(0,0%,40%,1)] lg:px-[180px]"
            >
              {project}
            </div>
          ))}
        </div>
      </div>
      <div className={`${isDarkMode ? "" : "border-t-[1px] border-[color:hsla(0,0%,21%,1)] max-w-[275px] ml-[16px] lg:max-w-[1180px] lg:ml-[50px]"}`}></div>
    </>
  );
};

export default Work;

// absolute w-full bottom-[-60px] left-0
