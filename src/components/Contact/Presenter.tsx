import Link from "next/link";
import React from "react";
import Form from "./Form";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import GoToTop from "./GoToTop";

function ContactPT() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        {/* <div className="grid gap-8 lg:grid-cols-5"> */}
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <Form />
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
    // </div>
  );
}

export default ContactPT;
