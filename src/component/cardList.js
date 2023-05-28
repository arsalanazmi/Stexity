import React, { useRef } from "react";
import { CardData } from "../assets/data/cardData";
import Card from "./Card";
import rightArrow from "../assets/images/right_arrow.png";
import leftArrow from "../assets/images/left_arrow.png";

function CardList() {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        className="flex md:flex-wrap md:justify-center overflow-hidden scroll-container gap-8 my-14 px-8"
        ref={scrollContainerRef}
      >
        {CardData &&
          CardData?.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              text={card.text}
            />
          ))}
      </div>
      <div className="flex justify-center gap-8 md:hidden scroll-arrows transform -translate-y-1/2">
        <div className="cursor-pointer scroll-arrow" onClick={handleScrollLeft}>
          <img src={leftArrow} alt="left arrow" />
        </div>
        <div
          className="cursor-pointer scroll-arrow"
          onClick={handleScrollRight}
        >
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default CardList;
