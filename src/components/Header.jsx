import React, { useState } from "react";
import Modal from "./Modal";
import { useParams } from 'react-router-dom';

const Header = ({ user, users }) => {
  const {page} = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { name, profilepicture, email } = user;

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-500 capitalize">{page}</h1>
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex gap-4 items-center cursor-pointer"
      >
        <img className="w-8 h-8 rounded-3xl" alt="" src={profilepicture} />
        <h1 className="text-gray-500 font-semibold text-lg">{name}</h1>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        name={name}
        email={email}
        image={profilepicture}
        users={users}
      />
    </>
  );
};

export default Header;
