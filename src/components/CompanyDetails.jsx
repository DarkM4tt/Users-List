import React from "react";

const Details = ({ pre, post }) => {
  return (
    <div className="flex gap-8 items-center">
      <p className="font-semibold text-xl text-gray-400">{pre}:</p>
      <p className="font-bold text-xl text-gray-600">{post}</p>
    </div>
  );
};

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
