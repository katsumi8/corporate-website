import { LaptopUiProps } from "@src/types/props";
import React from "react";
import LaptopUiPT from "./Presenter";

function LaptopUi({ CompanyLogoImg, linkColor, handleNav }: LaptopUiProps) {
  return (
    <LaptopUiPT
      CompanyLogoImg={CompanyLogoImg}
      linkColor={linkColor}
      handleNav={handleNav}
    />
  );
}

export default LaptopUi;
