import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Header = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(""); // State untuk menyimpan URL gambar profil
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Mengambil URL gambar profil dari response data
        const { profile_image } = response.data;
        setProfileImage(profile_image); // Menyimpan URL gambar profil ke state
      } catch (error) {
        console.error("Error fetching profile:", error.message);
        // Tambahkan logika untuk menangani kesalahan fetch
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successful!");
    setDropdownOpen(false);
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Redirect setelah 2 detik
  };

  return (
    <div className="fixed top-0 left-0 right-0 lg:left-64 z-50 flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md ">
      <button
        onClick={() => setSidebarOpen(true)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
      >
        <FaBars size={24} />
      </button>
      <h1 className="text-2xl font-bold text-black dark:text-white">
        Dashboard
      </h1>
      <div className="relative ml-auto">
        <img
          src={profileImage || "https://via.placeholder.com/40"}
          alt="User Avatar"
          className="w-10 h-10 rounded-full cursor-pointer dropdown-toggle border-2 border-black dark:border-white"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-1 dropdown-menu">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
