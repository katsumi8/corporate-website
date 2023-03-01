import { LaptopUiProps } from "@src/types/props";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function LaptopUiPT({
  CompanyLogoImg,
  linkColor,
  handleNav,
  companyName,
  navLinkObjects,
}: LaptopUiProps) {
  return (
    <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
      <Link href={"/"} className="flex items-center">
        <Image src={CompanyLogoImg} alt="/" width="125" height="50" />
        <div className="text-4xl text-[#003399] font-serif">{companyName}</div>
      </Link>
      <div>
        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
          {navLinkObjects.map((obj) => (
            <Link href={obj.href}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                {obj.name}
              </li>
            </Link>
          ))}
        </ul>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
}

export default LaptopUiPT;
