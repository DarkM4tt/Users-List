import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Modal = ({ open, onClose, name, email, image, users }) => {
  if (!open) return null;

  const restUsers = users.filter((data) => {
    return data.name !== name;
  });

  return ReactDOM.createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 right-0 bottom-0 z-50"
      />
      <div className="flex flex-col items-center absolute z-50 right-10 top-28 w-[20rem] h-[26rem] rounded-3xl border-2 bg-white shadow-2xl overflow-x-hidden overflow-y-scroll px-10">
        <img src={image} alt="" className="mt-9 w-24 h-24 rounded-full" />
        <p className="mt-4 text-xl text-gray-700">{name}</p>
        <p className="text-lg text-gray-400">{email}</p>
        {restUsers.map((data) => {
          return (
            <Link
              to={`/profile/${data.id}`}
              className="mt-4 w-full pt-4 justify-center border-t-[1px] flex gap-5 items-center"
              key={data.id}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={data.profilepicture}
                alt=""
              />
              <p className="">{data.name}</p>
            </Link>
          );
        })}
        <Link to={"/"}>
          <button className="font-bold text-white bg-red-400 rounded-3xl px-4 py-2 my-6">
            Sign out
          </button>
        </Link>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
