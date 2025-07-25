import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen w-screen">
      <p className="text-5xl">Hello!!</p>
      <Link
        to="/login"
        className="bg-blue-600 p-5 rounded-xl text-white font-bold text-2xl"
      >
        Login
      </Link>
    </div>
  );
}

export default Home;
