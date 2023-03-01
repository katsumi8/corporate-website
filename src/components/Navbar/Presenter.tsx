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
  companyName,
  navLinkObjects,
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
        companyName={companyName}
        navLinkObjects={navLinkObjects}
      />
      <MobileUi
        CompanyLogoImg={CompanyLogoImg}
        handleNav={handleNav}
        nav={nav}
        setNav={setNav}
        companyName={companyName}
        navLinkObjects={navLinkObjects}
      />
    </div>
  );
}

export default NavbarPT;
