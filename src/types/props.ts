import { StaticImageData } from "next/image";
import { BackGroundColor, InputValues, Validations } from "./state";

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

export type FormPTprops = {
  values: InputValues;
  formErrors: Validations;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFocus: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};
