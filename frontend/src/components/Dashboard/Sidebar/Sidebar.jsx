import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaChartLine,
  FaTimes,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";
import { logoBrand } from "../../../assets/image/logo/logoBrand";
import ThemeToggle from "../../Darkmode/Darkmode";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const handleItemClick = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`fixed shadow-2xl top-16 left-0 lg:top-0 z-50 bg-[#20B486] dark:bg-gray-800 text-white w-64 h-full space-y-4 py-7 px-4 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out lg:translate-x-0`}
      >
        <div className="absolute top-4 right-4 lg:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div>
          <a
            href="/dashboard"
            className="flex items-center font-Roboto text-3xl font-bold text-black dark:text-white"
          >
            <img src={logoBrand} className="h-[80px]" alt="logobrand" />
            Diactivee
          </a>
        </div>
        <nav className="font-bold font-Roboto">
          <Link
            to="/dashboard"
            className={`mb-4 py-2 px-4 rounded transition duration-200 flex items-center text-lg ${
              location.pathname === "/dashboard"
                ? "bg-white text-black"
                : "text-white"
            }`}
            onClick={handleItemClick}
          >
            <FaHome className="mr-4" />
            Home
          </Link>
          <Link
            to="/dashboard/profil"
            className={`mb-4 py-2 px-4 rounded transition duration-200 flex items-center text-lg ${
              location.pathname === "/dashboard/profil"
                ? "bg-white text-black"
                : "text-white"
            }`}
            onClick={handleItemClick}
          >
            <FaUser className="mr-4" />
            Profil
          </Link>
          <Link
            to="/dashboard/modul"
            className={`mb-4 py-2 px-4 rounded transition duration-200 flex items-center text-lg ${
              location.pathname === "/dashboard/modul" ||
              location.pathname.startsWith("/dashboard/modul/html") ||
              location.pathname.startsWith("/dashboard/modul/css") ||
              location.pathname.startsWith("/dashboard/modul/javascript") ||
              location.pathname.startsWith("/dashboard/modul/dart")
                ? "bg-white text-black"
                : "text-white"
            }`}
            onClick={handleItemClick}
          >
            <FaBook className="mr-4" />
            Modul
          </Link>
          <Link
            to="/dashboard/tutorial"
            className={`mb-4 py-2 px-4 rounded transition duration-200 flex items-center text-lg ${
              location.pathname === "/dashboard/tutorial"
                ? "bg-white text-black"
                : "text-white"
            }`}
            onClick={handleItemClick}
          >
            <FaChartLine className="mr-4" />
            Tutorial
          </Link>
          <Link
            to="/dashboard/bootcamp"
            className={`mb-4 py-2 px-4 rounded transition duration-200 flex items-center text-lg ${
              location.pathname === "/dashboard/bootcamp" ||
              location.pathname === "/dashboard/bootcamp/php" ||
              location.pathname === "/dashboard/bootcamp/webdeveloper"
                ? "bg-white text-black"
                : "text-white"
            }`}
            onClick={handleItemClick}
          >
            <FaGraduationCap className="mr-4" />
            Bootcamp
          </Link>
        </nav>
        <ul>
          <li className="mt-64">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
