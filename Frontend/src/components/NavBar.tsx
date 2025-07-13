import { useTranslation } from "react-i18next";
import Logo from "../assets/icons/Logo";
import { IoCloseOutline } from "react-icons/io5";
import { MdSunny, MdOutlineSettings } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../context/ThemeContext"; // adjust path as needed
import { Link, NavLink } from "react-router-dom";
import { Sai } from "../assets/images"; // adjust path as needed
import LanguageSwitcher from "./LanguageSwitcher";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { t } = useTranslation("components/navbar");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleDarkMode = () => setDarkMode((prev) => !prev); // 🔥 Global toggle

  return (
    <div className="flex items-center justify-between px-5 sm:px-32 py-4 dark:bg-zinc-800">
      {/* Logo */}
      <div className="text-[#101828] dark:text-white">
        <Logo />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-7 font-medium text-lg">
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-800`
          }
        >
          {t("overview")}
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-800`
          }
        >
          {t("transactions")}
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-800`
          }
        >
          {t("analytics")}
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-800`
          }
        >
          {t("accounts")}
        </NavLink>
      </nav>

      {/* Right-side Icons */}
      <div className="flex items-center space-x-6">
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-white"
        >
          {darkMode ? <MdSunny size={30} /> : <BsMoonStarsFill size={25} />}
        </button>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={Sai} alt="user photo" />
          </button>

          {isDropDownOpen && (
            <div className="z-50 absolute right-0 mt-2 bg-white border-[1px] border-gray-200 dark:border-gray-800 divide-y divide-gray-300 rounded-lg shadow-2xl w-44 dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Sai Dushyant</div>
                <div className="font-medium truncate">
                  saidushyant04@gmail.com
                </div>
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-200">
                <Link
                  to="/settings"
                  className="px-4 py-3 flex gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <MdOutlineSettings />
                  {t("settings")}
                </Link>
                <LanguageSwitcher />
              </div>

              <div className="py-3 px-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-4 px-4 py-2 text-sm font-bold text-white rounded-lg bg-red-500 hover:bg-red-700 dark:hover:bg-red-600"
                >
                  Sign out <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoCloseOutline size={40} />
            ) : (
              <RxHamburgerMenu
                size={25}
                className="text-gray-600 dark:text-white"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 left-0 bg-white dark:bg-zinc-800 w-screen h-screen transition-all duration-300 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between px-5 sm:px-32 py-4">
          <div className="text-[#101828] dark:text-white">
            <Logo />
          </div>
          <button onClick={toggleMenu}>
            <IoCloseOutline
              size={32}
              className="text-gray-600 dark:text-white"
            />
          </button>
        </div>
        <div className="bg-gray-100 dark:bg-zinc-700 w-full h-[2px]"></div>
        <nav className="flex flex-col px-8 py-10 space-y-7 text-4xl font-medium">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
              } hover:text-blue-800`
            }
          >
            {t("overview")}
          </NavLink>

          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
              } hover:text-blue-800`
            }
          >
            {t("transactions")}
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
              } hover:text-blue-800`
            }
          >
            {t("analytics")}
          </NavLink>

          <NavLink
            to="/account"
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
              } hover:text-blue-800`
            }
          >
            {t("accounts")}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
