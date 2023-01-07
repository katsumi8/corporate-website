import { MobileUiProps } from "@src/types/props";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


function MobileUiPT({
  CompanyLogoImg,
  handleNav,
  nav,
  setNav,
}: MobileUiProps) {
  return (
    <div
      className={
        nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          nav
            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex items-center justify-between w-full">
            <Link href={"/"}>
              <Image src={CompanyLogoImg} alt="/" width="87" height="35" />
            </Link>
            <div
              onClick={handleNav}
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4">
              Let's build something legendary together
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <ul className="uppercase">
            <Link href="/">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Contact
              </li>
            </Link>
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let's connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <FaLinkedinIn />
              </div>
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <FaGithub />
              </div>
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <AiOutlineMail />
              </div>
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileUiPT;
