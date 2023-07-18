import React, { useMemo } from "react";
import Chat from "../svgs/Chat";
import Arrow from "../svgs/Arrow";
export default function ChatBox({ users }) {
  const [open, setOpen] = React.useState(false);

  const userList = useMemo(() => {
    return users.map((data) => {
      data.online = Math.random() < 0.5;
      return data;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, open]);

  return (
    <div
      className={`w-80 fixed ${
        open ? "bottom-0" : "-bottom-96"
      } right-20 rounded-t-xl overflow-hidden transition-all z-20`}
    >
      <div
        className="w-full h-14 bg-blue-500 px-5 flex justify-center items-center cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <Chat className="mr-3" />
        <p className="text-white text-2xl">Chats</p>
        <Arrow
          className={`ml-auto transition-all ${open ? "rotate-180" : ""}`}
        />
      </div>
      <div className="h-96 bg-white overflow-auto">
        <div className="w-full px-4 py-4">
          {userList.map((data) => (
            <div className="w-full pb-4 flex items-center" key={data.id}>
              <img
                className="w-8 h-8 mr-4 rounded-full"
                src={data.profilepicture}
                alt=""
              />
              <p>{data.name}</p>
              <span
                className={`w-2 h-2 ml-auto rounded-full ${
                  data.online ? "bg-green-500" : "bg-neutral-400"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
