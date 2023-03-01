import React from "react";

function MainPT() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center flex-col">
        <div className="py-6">
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            Let's work less and enjoy life.
          </p>
          <h1 className="p-4 text-gray-700">
            We{" "}
            <span className="text-[#003399] uppercase">
              automate routine tasks{" "}
            </span>
            for business persons and bring{" "}
            <span className="text-[#003399] uppercase">
              applications to Cafe / Restaurant.
            </span>
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            For busy business person, We provide task automation based on your
            current business situation and customize just for you. Also as for
            Cafe and Restaurants, We provide web applications for making your
            customer service more efficient and also back office work easier and
            efficient.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPT;
