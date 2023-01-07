import { useForm } from "@src/hooks/useForm";
import React from "react";
import FormPT from "./Presenter";

function Form() {
  const { values, formErrors, handleChange, handleFocus, handleSubmit } =
    useForm();

  return (
    <FormPT
      values={values}
      formErrors={formErrors}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleSubmit={handleSubmit}
    />
  );
}

export default Form;
