"use client";
import Image from "next/image";
import { Button } from "../button/Button";
import { TypeAnimation } from "react-type-animation";

const MainPage = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left lg:justify-self-start">
          <h1 className="text-white text-4xl lg:text-8xl lg:leading-normal font-bold mb-4">
            <span>
              Hello, I'm
              <br />
            </span>
            <TypeAnimation
              sequence={[
                "Sam Page",
                3000,
                "Web Developer",
                3000,
                "Front-End Developer",
                3000,
                "React Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-br from-amber-700 via-orange-600 to-red-700"
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4">
            Lorem ipsum dolor sit amet consectetor ...
          </p>
          <div className="mb-4 lg:flex lg:items-center">
            <Button className="px-6 py-3 mr-5 w-full sm:w-fit bg-gradient-to-br from-red-700 via-orange-500 to-amber-500 text-white hover:text-slate-300">
              Hire Me
            </Button>
            <Button className="px-1 py-1 mt-3 bg-gradient-to-tr from-red-700 via-orange-500 to-amber-500 w-full sm:w-fit hover:bg-[#262626]">
              <span className="block bg-[#121212] hover:bg-slate-700 rounded-full px-6 py-3">
                Download Resume
              </span>
            </Button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"> */}
          <Image
            src="/images/sam.jpg"
            alt="Sam Avatar"
            priority
            style={{ width: "auto", height: "auto" }}
            width={300}
            height={300}
            // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            className="rounded-3xl"
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
