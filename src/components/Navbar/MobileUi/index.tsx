import { MobileUiProps } from "@src/types/props";
import React from "react";
import MobileUiPT from "./Presenter";

function MobileUi({ CompanyLogoImg, handleNav, nav, setNav }: MobileUiProps) {
  return (
    <MobileUiPT
      CompanyLogoImg={CompanyLogoImg}
      handleNav={handleNav}
      nav={nav}
      setNav={setNav}
    />
  );
}

export default MobileUi;
