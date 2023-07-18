import React from "react";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const { id } = useParams();

  return (
    <div className="bg-blue-500 px-10 flex flex-col gap-6 items-center justify-center w-full h-[50rem] rounded-3xl">
      <Link
        className="border-gray-300 border-b-[1px] w-full pb-4"
        to={`/profile/${id}`}
      >
        <h1 className="text-white font-bold text-xl">Profile</h1>
      </Link>
      <Link
        className="border-gray-300 border-b-[1px] w-full pb-4"
        to={`/posts/${id}`}
      >
        <h1 className="text-gray-300 font-bold text-xl">Posts</h1>
      </Link>
      <Link
        className="border-gray-300 border-b-[1px] w-full pb-4"
        to={`/gallery/${id}`}
      >
        <h1 className="text-gray-300 font-bold text-xl">Gallery</h1>
      </Link>
      <Link
        className="border-gray-300 border-b-[1px] w-full pb-4"
        to={`/todo/${id}`}
      >
        <h1 className="text-gray-300 font-bold text-xl">Todo</h1>
      </Link>
    </div>
  );
};

export default Sidebar;
