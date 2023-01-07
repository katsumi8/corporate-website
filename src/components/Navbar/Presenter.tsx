import React from "react";
import { NavbarPTprops } from "@src/types/props";
import LaptopUi from "./LaptopUi";
import MobileUi from "./MobileUi";

function NavbarPT({
  CompanyLogoImg,
  navBg,
  shadow,
  linkColor,
  handleNav,
  nav,
  setNav,
}: NavbarPTprops) {
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <LaptopUi
        CompanyLogoImg={CompanyLogoImg}
        handleNav={handleNav}
        linkColor={linkColor}
      />
      <MobileUi
        CompanyLogoImg={CompanyLogoImg}
        handleNav={handleNav}
        nav={nav}
        setNav={setNav}
      />
    </div>
  );
}

export default NavbarPT;
