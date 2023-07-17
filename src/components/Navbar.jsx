import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-500 px-10 flex flex-col gap-6 items-center justify-center w-full h-[50rem] rounded-3xl">
      <div className="border-gray-300 border-b-[1px] w-full pb-4">
        <h1 className="text-white font-bold text-xl">Profile</h1>
      </div>
      <div className="border-gray-300 border-b-[1px] w-full pb-4">
        <h1 className="text-gray-300 text-xl">Posts</h1>
      </div>
      <div className="border-gray-300 border-b-[1px] w-full pb-4">
        <h1 className="text-gray-300 text-xl">Gallery</h1>
      </div>
      <div className="w-full pb-2">
        <h1 className="text-gray-300 text-xl">Todo</h1>
      </div>
    </div>
  );
};

export default Navbar;
