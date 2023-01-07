import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function GoToTopPT() {
  return (
    <div className="flex justify-center py-12">
      <Link href={"/"}>
        <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
          <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
        </div>
      </Link>
    </div>
  );
}

export default GoToTopPT;
