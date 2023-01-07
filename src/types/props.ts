import { StaticImageData } from "next/image";
import { BackGroundColor } from "./state";

interface NavbarCommon {
  CompanyLogoImg: StaticImageData;
  handleNav: () => void;
}

export interface NavbarPTprops extends MobileUiProps, LaptopUiProps {
  navBg: string;
  shadow: boolean;
  handleNav: () => void;
}

export interface LaptopUiProps extends NavbarCommon {
  linkColor: BackGroundColor;
}

export interface MobileUiProps extends NavbarCommon {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}
