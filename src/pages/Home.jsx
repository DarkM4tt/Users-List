import Wave from '../svgs/Wave';
import Users from "./../components/Users";
import useFetch from "./../hooks/useFetch";

const Home = () => {
  const { users, loading, error } = useFetch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-center w-[100vw] h-[100vh] mt-40">
      <Wave />
      <div className="relative bg-white flex flex-col w-[40%] h-[34rem] border-2 rounded-3xl overflow-hidden">
        <div className="bg-gray-200 py-12">
          <h1 className="text-gray-600 font-bold text-center text-2xl">
            Select an account
          </h1>
        </div>

        <div className="relative px-8 pt-1 pb-4 overflow-y-scroll">
          {users.map((data) => {
            return (
              <Users
                key={data.id}
                id={data.id}
                name={data.name}
                image={data.profilepicture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
