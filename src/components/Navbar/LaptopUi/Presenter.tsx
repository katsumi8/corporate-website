import { LaptopUiProps } from "@src/types/props";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function LaptopUiPT({ CompanyLogoImg, linkColor, handleNav }: LaptopUiProps) {
  return (
    <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
      <Link href={"/"}>
        <Image src={CompanyLogoImg} alt="/" width="125" height="50" />
      </Link>

      <div>
        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/#about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/#skills">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/#projects">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
}

export default LaptopUiPT;
