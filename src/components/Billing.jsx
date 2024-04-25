import React from "react";
import { bill } from "../assets";
import { apple } from "../assets";
import { google } from "../assets";

function Billing() {
  return (
    <div id="product" className="flex sm:px-16 px-8 items-center flex-wrap-reverse md:flex-nowrap pb-[80px]">
      <div className="relative">
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      <img src={bill} alt="bill" className="max-w-3/6" />
      </div>
      <div className="flex flex-col items-center justify-center md:block">
        <h1 className="text-white sm:text-[50px] text-[30px] text-center md:text-left font-semibold">Easily control your</h1>
        <h1 className="text-white sm:text-[50px] text-[30px] text-center md:text-left font-semibold">billing & invoicing</h1>
        <p className="text-dimWhite my-[20px] max-w-[65%] text-center md:text-left">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-[50px]">
          <img src={apple} alt="" className="cursor-pointer" />
          <img src={google} alt="" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Billing;
