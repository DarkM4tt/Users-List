import React from "react";
import { Link } from "react-router-dom";

const Users = ({ id, name, image }) => {
  return (
    <Link to={`/profile/${id}`}>
      <div className="flex border-b-2 items-center p-2 gap-4 cursor-pointer">
        <span className="rounded-2xl overflow-hidden">
          <img className="w-8 h-8" src={image} alt="" />
        </span>
        <p className="text-lg text-gray-700">{name}</p>
      </div>
    </Link>
  );
};

export default Users;
