import React from "react";

const Card = ({ title, image }) => {
  return (
    <div className="bg-white p-4 shadow-md hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <h2 className="font-bold mt-2">{title}</h2>
      <button className="bg-yellow-400 w-full mt-4 py-2">Add to Cart</button>
    </div>
  );
};

export default Card;
