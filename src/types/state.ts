type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;
export type BackGroundColor = Color | "transparent" | "initial" | "inherit";

export type InputValues = {
  name: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
  isSubmitted: boolean;
};

export type Validations = {
  name?: string;
  phoneNumber?: string;
  email?: string;
  subject?: string;
  message?: string;
};