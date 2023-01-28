import React from "react";
import ServiceCategory from "./ServiceCategory";
import GastronomyImg from "../../../public/assets/gastronomy.jpg";
import TaskAutomationImg from "../../../public/assets/taskAutomation.jpg";

function OurServicePT() {
  return (
    <div id="services" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Our Services
        </p>
        <h2 className="py-4">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ServiceCategory
            title="For customers seeking Task Automation"
            backgroundImg={TaskAutomationImg}
            projectUrl="/task-automation"
          />
          <ServiceCategory
            title="For Cafe and Restaurant Owners / Managers."
            backgroundImg={GastronomyImg}
            projectUrl="/gastronomy-applications"
          />
        </div>
      </div>
    </div>
  );
}

export default OurServicePT;
