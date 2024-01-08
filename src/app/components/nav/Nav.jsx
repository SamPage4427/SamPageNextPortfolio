"use client";
import Link from "next/link";
import NavLink from "./NavLInk";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../menu-overlay/MenuOverlay";
import { navLinks } from "../../utils/constants";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed right-0 left-0 top-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between px-4 pt-4">
        <Link href={"/"} className="text-2xl md:text-4xl font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white"
            >
              <Bars4Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Nav;
