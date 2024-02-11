"use client";
import Image from "next/image";
import { Button } from "../button/Button";
import { TypeAnimation } from "react-type-animation";
import { saveAs } from "file-saver";
import Link from "next/link";

const MainPage = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1UzgxFKKNDVnT4P6KjczasNsU7Yn0n955",
      "SamuelPageResume-Software.pdf"
    );
  };
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 xl:col-span-8 place-self-center text-center sm:text-left lg:justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl xl:text-8xl lg:leading-normal font-extrabold font-serif">
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
                "React Developer",
                3000,
                "Software Engineer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-br from-black via-red-600 to-red-7000"
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4 font-serif">
            Lorem ipsum dolor sit amet consectetor ...
          </p>
          <div className="mb-4 lg:flex lg:items-center">
            <Link
              href={"https://www.linkedin.com/in/samuel-page-b07722137/"}
              target="_blank"
            >
              <Button className="px-6 py-3 mt-2 mr-5 w-full sm:w-fit bg-gradient-to-br from-black via-red-600 to-red-700 text-white hover:text-slate-300 font-serif">
                Hire Me
              </Button>
            </Link>
            <Button
              className="px-1 py-1 mt-3 bg-gradient-to-tr from-black via-red-600 to-red-700 w-full sm:w-fit hover:bg-[#262626] font-serif group/link"
              onClick={saveFile}
            >
              <span className="block bg-black group-hover/link:bg-slate-700 rounded-full px-6 py-3">
                Download Resume
              </span>
            </Button>
          </div>
        </div>
        <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
          <Image
            src="/images/Sam.png"
            alt="Sam Avatar"
            priority
            style={{ width: "auto", height: "auto" }}
            width={300}
            height={300}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
