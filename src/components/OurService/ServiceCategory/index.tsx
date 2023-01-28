import React from "react";
import { ServiceCategoryProps } from "@src/types/props";
import ServiceCategoryPT from "./Presenter";

function ServiceCategory({
  backgroundImg,
  title,
  projectUrl,
}: ServiceCategoryProps) {
  return (
    <ServiceCategoryPT
      title={title}
      backgroundImg={backgroundImg}
      projectUrl={projectUrl}
    />
  );
}

export default ServiceCategory;
