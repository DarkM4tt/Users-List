import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import UserDetails from "../components/UserDetails";
import CompanyDetails from "./../components/CompanyDetails";
import Address from "../components/Address";
import Map from "../components/Map";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChatBox from '../components/ChatBox';

const Dashboard = () => {
  const {page, id} = useParams();
  const { users, loading } = useFetch();

  const displayUser = useMemo(() => {
    return users?.find((data) => {
      return +data.id === +id;
    });
  }, [id, users])

  return (
    <div className="w-[100vw] flex">
      <div className="flex-[25%] py-12 px-14">
        <Sidebar />
      </div>
      <ChatBox users={users.filter((user) => user.name !== displayUser?.name)} />
      <div className="flex-[75%] pt-16 pr-20">
        {/* Header */}
        <div className="flex justify-between w-full border-b-[1px] border-gray-400 pb-8">
          {loading ? (
            <p>Loading user...</p>
          ) : displayUser ? (
            <Header user={displayUser} users={users} />
          ) : (
            <p>No user data available</p>
          )}
        </div>

      {
        page === 'profile' ? (
          <div className="flex h-auto w-full pt-10">
          <div className="flex flex-col gap-4 items-center border-r-[1px] border-gray-400 flex-[36%]">
            {loading ? (
              <p>Loading user...</p>
            ) : displayUser ? (
              <UserDetails
                image={displayUser?.profilepicture}
                name={displayUser?.name}
                username={displayUser?.username}
                email={displayUser?.email}
                phone={displayUser?.phone}
                website={displayUser?.website}
              />
            ) : (
              <p>No user data available</p>
            )}
            <CompanyDetails
              name={displayUser?.company?.name}
              phrase={displayUser?.company?.catchPhrase}
              bs={displayUser?.company?.bs}
            />
          </div>

          <div className="flex-[64%] px-14">
            <Address data={displayUser?.address} />

            {/* Map */}
            {loading ? (
              <p>Loading map...</p>
            ) : displayUser &&
              displayUser.address &&
              displayUser.address.geo ? (
              <div className="border-[1px] -z-10 w-full h-[22rem] rounded-3xl ml-10 mt-6 overflow-hidden">
                <Map data={displayUser.address} />
              </div>
            ) : (
              <p>No location data available</p>
            )}

            {/* Points */}
            <div className="flex justify-end gap-6 mt-4 text-sm">
              <div className="flex gap-2">
                <p className="font-semibold text-gray-400">Lat:</p>
                <p className="font-bold text-gray-600">
                  {displayUser?.address?.geo?.lat}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold text-gray-400">Long:</p>
                <p className="font-bold text-gray-600">
                  {displayUser?.address?.geo?.lng}
                </p>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-8xl font-extrabold text-gray-200 mb-36 select-none">Coming Soon</p>
          </div>
        )
      }
      </div>
    </div>
  );
};

export default Dashboard;
