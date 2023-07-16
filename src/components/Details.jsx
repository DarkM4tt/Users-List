const Details = ({ pre, post }) => {
  return (
    <div className="flex gap-5 items-center">
      <p className="font-semibold text-xl text-gray-400">{pre}</p>
      <span className="text-gray-400 font-bold text-xl">:</span>
      <p className="font-bold text-xl text-gray-600">{post}</p>
    </div>
  );
};

export default Details;
