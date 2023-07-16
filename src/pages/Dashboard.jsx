import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import UserDetails from "../components/UserDetails";
import CompanyDetails from "./../components/CompanyDetails";

const Dashboard = () => {
  const params = useParams();
  const [displayUser, setDisplayUser] = useState("");
  const { users } = useFetch();

  useEffect(() => {
    const resUser = users.find((data) => {
      return +data.id === +params.id;
    });
    setDisplayUser(resUser);
  }, [params, users]);

  console.log(displayUser);

  return (
    <div className="w-[100vw] flex">
      <div className="flex-[25%] py-12 px-14">
        <div className="bg-blue-500 px-10 flex flex-col gap-6 items-center justify-center w-full h-[50rem] rounded-3xl">
          <div className="border-gray-300 border-b-[1px] w-full pb-2">
            <h1 className="text-white font-bold text-xl">Profile</h1>
          </div>
          <div className="border-gray-300 border-b-[1px] w-full pb-2">
            <h1 className="text-white text-xl">Posts</h1>
          </div>
          <div className="border-gray-300 border-b-[1px] w-full pb-2">
            <h1 className="text-white text-xl">Gallery</h1>
          </div>
          <div className="w-full pb-2">
            <h1 className="text-white text-xl">Todo</h1>
          </div>
        </div>
      </div>

      <div className="flex-[75%] pt-16 pr-20">
        {/* Header */}
        <div className="flex justify-between w-full border-b-[1px] border-gray-400 pb-8">
          <h1 className="text-2xl font-bold text-gray-500">Profile</h1>
          <div className="flex gap-4 items-center">
            <img
              className="w-8 h-8 rounded-3xl"
              alt=""
              src={displayUser?.profilepicture}
            />
            <h1 className="text-gray-500 font-semibold text-lg">
              {displayUser?.name}
            </h1>
          </div>
        </div>

        <div className="flex h-auto w-full pt-10">
          <div className="flex flex-col gap-4 items-center border-r-[1px] border-gray-400 flex-[36%]">
            <UserDetails
              image={displayUser?.profilepicture}
              name={displayUser?.name}
              username={displayUser?.username}
              email={displayUser?.email}
              phone={displayUser?.phone}
              website={displayUser?.website}
            />
            <CompanyDetails
              name={displayUser?.company?.name}
              phrase={displayUser?.company?.catchPhrase}
              bs={displayUser?.company?.bs}
            />
          </div>
          <div className="flex-[64%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;