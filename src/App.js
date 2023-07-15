import { useState, useEffect } from "react";

const API = "https://panorbit.in/api/users.json";

const Users = ({ name, image }) => {
  return (
    <div className="flex border-b-2 items-center p-2 gap-4 cursor-pointer">
      <span className="rounded-2xl overflow-hidden">
        <img className="w-8 h-8" src={image} alt="" />
      </span>
      <p className="text-lg text-gray-700">{name}</p>
    </div>
  );
};

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API); // Replace with your API endpoint
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(users);

  return (
    <div className="flex justify-center w-[100vw] h-[100vh] mt-40">
      <div className="bg-white flex flex-col w-[40%] h-[34rem] border-2 rounded-3xl overflow-hidden">
        <div className="bg-gray-200 py-12">
          <h1 className="text-gray-600 font-bold text-center text-2xl">
            Select an account
          </h1>
        </div>

        <div className="px-8 pt-1 pb-4 overflow-y-scroll">
          {users.map((data) => {
            return (
              <Users
                key={data.id}
                name={data.name}
                image={data.profilepicture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
