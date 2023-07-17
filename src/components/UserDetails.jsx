import React from "react";
import Details from "./Details";

const UserDetails = ({ image, name, username, email, phone, website }) => {
  const phoneNumber = phone.replace(/\D/g, "");
  return (
    <div className="flex flex-col gap-4 border-b-[1px] pb-6 border-gray-400">
      <img src={image} alt="" className="w-[13rem] h-[13rem] rounded-full" />
      <p className="font-bold text-xl text-gray-600">{name}</p>
      <Details pre="Username" post={username} />
      <Details pre="e-mail" post={email} />
      <Details pre="Phone" post={parseInt(phoneNumber)} />
      <Details pre="Website" post={website} />
    </div>
  );
};

export default UserDetails;
