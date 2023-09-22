import React from "react";
import { BsPencilFill, BsFillTrash3Fill } from "react-icons/bs";
const Card = ({ index, name, success }) => {
  return (
    <div className="flex w-[400px] p-10 bg-[#1E293B] hover:bg-[#475366] rounded-lg animate-slideleft relative">
      <div className="flex w-[80%] absolute gap-6 justify-end ">
        <BsPencilFill color="white" size={20} className="edit-icon" />
        <BsFillTrash3Fill color="white" size={20} className="delete-icon" />
      </div>
      <div className="flex w-full h-44 justify-center items-center">
        <h1 className="text-2xl text-white font-bold  truncate">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
