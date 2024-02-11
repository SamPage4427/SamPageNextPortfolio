import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full flex justify-center">
      <div className="container p-6 sm:p-12 flex justify-between w-full items-center">
        <Image
          src="/images/SamPageLogo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <p className="text-slate-600 text-center">
          All rights reserved. &copy;Sam Page 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
