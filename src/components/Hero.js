function Hero() {
  return (
    <div className="container mx-auto px-5 lg:px-32 ">
      <div className="flex flex-col dark:text-white text-gelap-secondary capitalize mt-10 mb-6">
        <div className="text-2xl font-bold">Rahul sya . </div>
        <div className="text-gelap-third text-sm font-bold mb-4">
          Front-End Web Developer
        </div>
        <div className="w-full lg:w-1/2 dark:text-terang-primary text-gelap-primary text-justify font-light text-sm ">
          i experiences with javascript framework like react js, react native,
          expres.js, and other tailwidcss, bootstrap, contentfull, firebase,
          sequelize .{" "}
        </div>
        <div className="mt-4 font-semibold ">find me on social .</div>
        <a
          className="inline"
          href="https://www.facebook.com/rahultzs/"
          rel="noreferrer"
          target="_blank"
        >
          - facebook/rahultzs
        </a>
        <a
          className="inline"
          href="https://www.github.com/rahulsya/"
          rel="noreferrer"
          target="_blank"
        >
          * github/rahulsya
        </a>
        <a href="#" rel="noreferrer">
          / rahulsyaban@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Hero;
