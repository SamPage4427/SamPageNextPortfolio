"use client";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

function ContactSection() {
  const [emailSent, setEmailSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const dataFormatJSON = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataFormatJSON,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (resData.status === 200) {
      console.log("Message sent.");
      setEmailSent(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 md:gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-700 via-orange-600 to-amber-500 rounded-full h-80 w-80 z-0 blur-lg absolute top-12 lg:top-48 lg:-left-6 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
        <p className="text-white mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          I will try my best to reply to any questions and inquiries.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/SamPage4427"} target="_blank">
            <GitHub className="w-10 h-10" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/samuel-page-b07722137/"}
            target="_blank"
          >
            <LinkedIn className="w-10 h-10" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-1.5 font-medium"
            >
              Email:
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john@smith.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-1.5 font-medium"
            >
              Subject:
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Type here"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-1.5 font-medium"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave message here..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-red-700 via-orange-500 to-amber-500 hover:text-slate-300 border border-red-500 hover:border-white rounded-lg p-2.5 font-medium text-lg"
          >
            Send Message
          </button>
          {emailSent && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
