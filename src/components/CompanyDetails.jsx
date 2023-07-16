import React from "react";
import Details from "./Details";

const CompanyDetails = ({ name, phrase, bs }) => {
  return (
    <>
      <p className="font-semibold text-xl text-gray-400">Company</p>
      <Details pre="Name" post={name} />
      <Details pre="catchphrase" post={phrase} />
      <Details pre="bs" post={bs} />
    </>
  );
};

export default CompanyDetails;
