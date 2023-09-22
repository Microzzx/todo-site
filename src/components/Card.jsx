import React from "react";
import { useState } from "react";
import { BsFillTrash3Fill, BsXLg } from "react-icons/bs";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";

const Card = ({
  id,
  title,
  success,
  handleDelete,
  handleEdit,
  handleCheck,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [cardtitle, setCardTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardtitle.trim()) {
      handleEdit(id, cardtitle.trim());
      setEditMode(false);
    }
  };

  return (
    <div
      className={`flex flex-col w-[400px] p-10 max-[827px]:w-[240px] ${
        success
          ? "bg-[#64ff83a1] hover:bg-[#87c294]"
          : "bg-[#1E293B] hover:bg-[#475366]"
      } rounded-lg animate-slideleft relative`}
    >
      {success ? (
        <>
          <div className="flex w-full gap-6 justify-end max-[827px]:justify-center">
            <BsFillTrash3Fill
              color="white"
              size={22}
              className="delete-icon"
              onClick={() => handleDelete(id)}
            />
          </div>
          <div className="flex h-40 justify-center items-center">
            <h1 className="text-2xl text-white font-bold line-through truncate">
              {title}
            </h1>
          </div>
        </>
      ) : !editMode ? (
        <>
          <div className="flex w-full gap-6 justify-end max-[827px]:justify-center">
            <FaCheck
              color="white"
              size={24}
              className="check-icon"
              onClick={() => handleCheck(id)}
            />
            <BiSolidEdit
              color="white"
              size={24}
              className="edit-icon"
              onClick={() => setEditMode(true)}
            />
            <BsFillTrash3Fill
              color="white"
              size={22}
              className="delete-icon"
              onClick={() => handleDelete(id)}
            />
          </div>
          <div className="flex h-40 justify-center items-center">
            <h1 className="text-2xl text-white font-bold  truncate">{title}</h1>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full gap-6 justify-end max-[827px]:justify-center">
            <FaXmark
              color="white"
              size={24}
              className="delete-icon"
              onClick={() => setEditMode(false)}
            />
          </div>
          <div className="flex h-40 justify-center items-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                defaultValue={title}
                placeholder="Write Something"
                className="text-2xl text-white font-bold text-center bg-transparent"
                onChange={(e) => {
                  setCardTitle(e.target.value);
                }}
                autoFocus
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
