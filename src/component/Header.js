import React from "react";

function Header() {
  return (
    <div className="pt-8 lg:w-[807px] mx-auto px-2 lg:px-1">
        <h1
          className="font-satoshi text-4xl sm:text-5xl not-italic font-bold leading-17 text-center pb-6 "
          style={{
            background: "linear-gradient(180deg, #FFFFFF 50%, #001E2B 109.19%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          IOS App Development Services we offer
        </h1>
        <p className="font-satoshi text-center not-italic font-normal text-base text-[#F7F8F8] opacity-50">
          Transform your ideas into reality with our cutting-edge web and mobile
          solutions. Partner with us and experience seamless digital
          transformation like never before.
        </p>
    </div>
  );
}

export default Header;
