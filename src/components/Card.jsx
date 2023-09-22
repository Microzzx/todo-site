import React from "react";
import { useState } from "react";
import { BsPencilFill, BsFillTrash3Fill, BsXLg } from "react-icons/bs";

const Card = ({ id, title, success, handleDelete, handleEdit }) => {
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
    <div className="flex w-[400px] p-10 bg-[#1E293B] hover:bg-[#475366] rounded-lg animate-slideleft relative">
      {!editMode ? (
        <>
          <div className="flex w-[80%] absolute gap-6 justify-end ">
            <BsPencilFill
              color="white"
              size={20}
              className="edit-icon"
              onClick={() => setEditMode(true)}
            />
            <BsFillTrash3Fill
              color="white"
              size={20}
              className="delete-icon"
              onClick={() => handleDelete(id)}
            />
          </div>
          <div className="flex w-full h-44 justify-center items-center">
            <h1 className="text-2xl text-white font-bold  truncate">{title}</h1>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-[80%] absolute  justify-end ">
            <BsXLg
              color="white"
              size={25}
              className="delete-icon"
              onClick={() => setEditMode(false)}
            />
          </div>
          <div className="flex w-full h-44 justify-center items-center">
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
