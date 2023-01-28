import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCategoryProps } from "@src/types/props";

function ServiceCategoryPT({
  backgroundImg,
  title,
  projectUrl,
}: ServiceCategoryProps) {
  return (
    <div className="relative flex items-center justify-center h-auto shadow-xl w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="py-6 text-2xl tracking-wider text-center text-white">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="p-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCategoryPT;
