import React from "react";

function Card({ imageUrl, title, text }) {
  return (
    <div
      className="flex flex-col w-[358.16px] h-[298px] shrink-0 gap-6 p-7"
      style={{
        background:
          "linear-gradient(147.75deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.025) 100%)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
      }}
    >
      <div
        className="w-[78px] h-[78px] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          backdropFilter: "blur(10px)",

          borderRadius: "100px",
        }}
      >
        <div
          className="w-[48px] h-[48px] flex justify-center items-center"
          style={{
            background:
              "linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
            backdropFilter: "blur(10px)",

            borderRadius: "100px",
          }}
        >
          <img src={imageUrl} alt="icon" />
        </div>
      </div>
      <div>
        <h3 className="font-satoshi font-bold text-lg text-[#FFFF] leading-6">
          {title}
        </h3>
      </div>
      <div>
        <p className="font-satoshi text-base leading-6 text-[#F7F8F8] font-normal opacity-50">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card;
