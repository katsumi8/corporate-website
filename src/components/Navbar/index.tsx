import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BackGroundColor } from "@src/types/state";
import NavbarPT from "./Presenter";
import CompanyLogoImg from "../../../public/assets/companyLogo.png";

function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<BackGroundColor>("#ecf0f3");
  const [linkColor, setLinkColor] = useState<BackGroundColor>("#1f2937");
  const router = useRouter();
  const companyName = "Dejiya";
  const navLinkObjects: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Our services", href: "/#services" },
    { name: "Contact us", href: "/#contact" },
  ];

  useEffect(() => {
    if (
      router.asPath === "/page1" ||
      router.asPath === "/page2" ||
      router.asPath === "/page3" ||
      router.asPath === "/page4"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <NavbarPT
      navBg={navBg}
      shadow={shadow}
      linkColor={linkColor}
      handleNav={handleNav}
      nav={nav}
      setNav={setNav}
      CompanyLogoImg={CompanyLogoImg}
      companyName={companyName}
      navLinkObjects={navLinkObjects}
    />
  );
}

export default Navbar;
