import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonModul = ({ title, link, icon: Icon, onClick }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        navigate(link);
    };

    return (
        <button
            onClick={handleClick}
            className="bg-[#20B486] dark:bg-gradient-to-bl from-gray-800 via-blue-900 to-gray-800 dark:border-2 dark:border-blue-800 hover:bg-[#20B486] hover:opacity-90 text-white font-bold py-3 px-6 my-2 rounded-full flex items-center justify-center w-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
        >
            <Icon className="text-2xl mr-4" />
            <h2 className="text-xl font-semibold">{title}</h2>
        </button>
    );
};

export default ButtonModul;


