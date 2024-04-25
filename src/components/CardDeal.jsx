import React from "react";
import { card } from "../assets";

function CardDeal() {
  return (
    <div className="flex sm:px-16 px-8 items-center flex-wrap md:flex-nowrap pb-[80px]">
      <div className="flex flex-col items-center justify-center md:block mb-[50px]">
        <h1 className="text-white sm:text-[50px] text-[30px] mt-[20px] text-center md:text-left font-semibold">
          Find a better card deal
        </h1>
        <h1 className="text-white sm:text-[50px] text-[30px] text-center md:text-left font-semibold">
          in few easy steps.
        </h1>
        <p className="text-dimWhite my-[20px] max-w-[65%] text-center md:text-left">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className='bg-blue-gradient text-primary py-[20px] px-[36px] mt-[17px] rounded-lg'>Get Started</button>
      </div>
      <div className="">
        <img src={card} alt="bill" className="md:max-w-3/6" />
      </div>
    </div>
  );
}

export default CardDeal;
