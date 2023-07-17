import React from "react";
import Details from "./Details";

const Address = ({ data }) => {
  return (
    <>
      <p className="font-semibold text-xl text-gray-400">Address:</p>
      <div className="flex flex-col gap-4 mt-6 ml-10">
        <Details pre="Street" post={data?.street} />
        <Details pre="Suite" post={data?.suite} />
        <Details pre="City" post={data?.city} />
        <Details pre="Zipcode" post={data?.zipcode} />
      </div>
    </>
  );
};

export default Address;
