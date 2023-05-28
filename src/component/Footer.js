import React from "react";
import rightArrow from "../assets/images/arrow_right.png";

function Footer() {
  return (
    <div className="flex flex-row flex-wrap md:justify-between justify-center md:px-14 py-5 text-center sm:text-left items-center gap-4 bg-customBlue ">
      
      <div>
        <p className="font-satoshi not-italic font-bold text-xl leading-8 capitalize text-[#FFFFFF] sm:w-[425px] h-[60px]">
          Select professional IT services for your IOS app development
          initiative
        </p>
      </div>

      <div
        className="flex flex-row justify-center items-center w-[203px] h-[48px] mt-8 sm:mt-0 bg-[#00ED64] rounded-[100px]"
        style={{ boxShadow: "0px 1px 2px rgba(27, 31, 35, 0.05)" }}
      >
        <div>
          <p className="text-customBlue font-satoshi not-italic font-bold text-base">
            Request Services
          </p>
        </div>
        <div className="py-1 pl-2">
          <img src={rightArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
