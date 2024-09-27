import React from "react";

const Carousel = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="carousel">
        <img
          src="https://via.placeholder.com/1200x300"
          alt="Carousel 1"
          className="w-full"
        />
        <img
          src="https://via.placeholder.com/1200x300"
          alt="Carousel 2"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Carousel;
