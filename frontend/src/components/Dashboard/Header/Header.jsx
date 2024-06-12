import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logika logout disini
    navigate('/login');
  };

  return (
    <div className="fixed top-0 left-0 right-0 lg:left-64 z-50 flex justify-between items-center p-4 bg-white shadow-md">
      <button
        onClick={() => setSidebarOpen(true)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
      >
        <FaBars size={24} />
      </button>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="relative">
        <img 
          src="https://via.placeholder.com/40" 
          alt="User Avatar" 
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-1">
            <button 
              onClick={handleLogout} 
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
