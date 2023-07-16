import React from "react";

const Details = ({ pre, post }) => {
  return (
    <div className="flex gap-5 items-center">
      <p className="font-semibold text-xl text-gray-400">{pre}:</p>
      <p className="font-bold text-xl text-gray-600">{post}</p>
    </div>
  );
};

const UserDetails = ({ image, name, username, email, phone, website }) => {
  return (
    <div className="flex flex-col gap-4 border-b-[1px] pb-6 border-gray-400">
      <img src={image} alt="" className="w-[13rem] h-[13rem] rounded-full" />
      <p className="font-bold text-xl text-gray-600">{name}</p>
      <Details pre="Username" post={username} />
      <Details pre="e-mail" post={email} />
      <Details pre="Phone" post={phone} />
      <Details pre="Website" post={website} />
    </div>
  );
};

export default UserDetails;
