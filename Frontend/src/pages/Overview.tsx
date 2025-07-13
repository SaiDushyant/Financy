import NavBar from "../components/NavBar";
import { FaAngleDown, FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Overview() {
  const { t } = useTranslation("Pages/Overview");

  const options = [t("today"), t("week"), t("month"), t("year")];
  const [selected, setSelected] = useState("Today");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    setIsOpen(false);
  };
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 dark:bg-gray-700 w-full h-[2px]"></div>
      <section className="flex justify-between px-5 md:px-32 py-5 md:py-10 dark:bg-zinc-800 bg-white">
        <p className="text-4xl font-medium dark:text-white">
          {t("hello", { name: "Sai" })}
        </p>
        <div className="hidden md:flex justify-center items-center gap-5">
          <div className="flex justify-center items-center">
            <div className="box rounded-l-lg text-sm font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
              {t("today")}
            </div>
            <div className="box border-l-0 text-sm font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
              {t("week")}
            </div>
            <div className="box border-l-0 text-sm font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
              {t("month")}
            </div>
            <div className="box border-l-0 rounded-r-lg text-sm font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
              {t("year")}
            </div>
          </div>
        </div>
        <div className="relative md:hidden inline-block text-left ">
          <button
            onClick={() => setIsOpen((prev: any) => !prev)}
            className="w-35 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700"
            type="button"
          >
            <span className="truncate">{selected}</span>
            <FaAngleDown className="ml-2" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 z-10 w-44 bg-white rounded-lg shadow-sm dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {options.map((option) => (
                  <li key={option}>
                    <label className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="timeRange"
                        value={option}
                        checked={selected === option}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section className=" dark:bg-zinc-800 bg-white py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 px-5 md:px-32 gap-2 md:gap-10">
          <div className="box shadow dark:shadow-gray-500 rounded-xl dark:border-gray-600 col-span-2 md:col-span-1 flex flex-col gap-2 px-5 md:px-7 py-5">
            <p className="md:text-md font-medium text-gray-600 dark:text-gray-300">
              {t("balance")}
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-5xl font-medium text-blue-600 dark:text-blue-500">
                $9999
              </p>
              <div className="flex items-end">
                <div className="box border-gray-300 px-3 py-1 rounded-lg flex justify-between items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <FaArrowUp size={12} color={"green"} />
                  12%
                </div>
              </div>
            </div>
          </div>
          <div className="box shadow dark:shadow-gray-500 rounded-xl dark:border-gray-600 flex flex-col gap-1 md:gap-2 px-3 md:px-7 py-2 md:py-5">
            <p className="text-sm md:text-md font-medium text-gray-600 dark:text-gray-300">
              {t("income")}
            </p>
            <div className="flex flex-row justify-between gap-[10px]">
              <p className="text-3xl md:text-5xl font-medium dark:text-gray-100">
                $9999
              </p>
              <div className="flex items-end">
                <div className="box border-gray-300 px-1 md:px-3 py-1 rounded-lg flex justify-between items-center gap-1 text-[10px] md:text-sm font-medium text-gray-600 dark:text-gray-300">
                  <FaArrowUp size={12} color={"green"} />
                  12%
                </div>
              </div>
            </div>
          </div>
          <div className="box shadow dark:shadow-gray-500 rounded-xl dark:border-gray-600 flex flex-col gap-1 md:gap-2 px-3 md:px-7 py-2 md:py-5">
            <p className="text-sm md:text-md font-medium text-gray-600 dark:text-gray-300">
              {t("expense")}
            </p>
            <div className="flex flex-row justify-between gap-[10px]">
              <p className="text-3xl md:text-5xl font-medium dark:text-gray-100">
                $9999
              </p>
              <div className="flex items-end">
                <div className="box border-gray-300 px-1 md:px-3 py-1 rounded-lg flex justify-between items-center gap-1 text-[10px] md:text-sm font-medium text-gray-600 dark:text-gray-300">
                  <FaArrowDown size={12} color={"red"} />
                  12%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
