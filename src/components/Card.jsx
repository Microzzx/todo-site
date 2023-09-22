import React from "react";

const Card = ({ index, name, success }) => {
  return (
    <div className="flex w-[500px] p-4 bg-white rounded-lg animate-slideleft">
      <div className="h-56">
        <h1>
          {index}. {name}
        </h1>
      </div>
    </div>
  );
};

export default Card;
