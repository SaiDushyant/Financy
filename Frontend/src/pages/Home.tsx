import NavBar from "../components/NavBar";
import { SlCalender } from "react-icons/sl";

function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 dark:bg-gray-700 w-full h-[2px]"></div>
      <section className="flex justify-between px-5 md:px-32 py-5 md:py-10 dark:bg-zinc-800 bg-white">
        <p className="text-3xl font-medium dark:text-white">Hello, Sai</p>
        <div className="hidden md:flex justify-center items-center gap-5">
          <div className="flex justify-center items-center">
            <div className="box rounded-l-lg text-sm font-medium text-gray-600">
              Today
            </div>
            <div className="box border-l-0 text-sm font-medium text-gray-600">
              This week
            </div>
            <div className="box border-l-0 text-sm font-medium text-gray-600">
              This month
            </div>
            <div className="box border-l-0 rounded-r-lg text-sm font-medium text-gray-600">
              This year
            </div>
          </div>
          <div className="box flex justify-center items-center gap-2 rounded-lg">
            <SlCalender />
            <p className="text-sm font-medium text-gray-600">Select Period</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
