"use client";
import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "../tab/TabButton";
import { tabData } from "../../utils/constants";

function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.jpg"}
          alt="about image"
          width={500}
          height={500}
          className="rounded-3xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a software engineer with a passion for creating interactive and
            responsive web applications. I have experience working in React,
            HTML, JavaScript, CSS, TailwindCSS, NextJS, Apollo GraphQL, MongoDB,
            and Git. I learn new technologies quickly and am always on the hunt
            for more knowledge to expand my skill set.
          </p>
          <div className="flex flex-col sm:flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
