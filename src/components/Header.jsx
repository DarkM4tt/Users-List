import React from "react";

const Header = ({ name, image }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-500">Profile</h1>
      <div className="flex gap-4 items-center cursor-pointer">
        <img className="w-8 h-8 rounded-3xl" alt="" src={image} />
        <h1 className="text-gray-500 font-semibold text-lg">{name}</h1>
      </div>
    </>
  );
};

export default Header;
