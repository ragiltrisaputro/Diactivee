import React from 'react';
import { ModalImg } from '../../assets/image/Modal/Modal'; 

export default function Modal({ handleLogin, handleRegister, setShowModal }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-6">
            <div className="bg-white dark:bg-gradient-to-bl from-gray-800 via-blue-900 to-gray-800 dark:border-2 dark:border-blue-800 p-6 sm:p-8 rounded shadow-lg relative max-w-md w-full">
                <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 dark:text-white text-gray-700 hover:text-gray-900 text-2xl"
                >
                    &times;
                </button>
                <div className='my-4 sm:my-8'>
                    <img src={ModalImg} alt="Modal Graphic" className="w-full h-[150px] sm:h-[250px] object-cover mb-4 rounded" />
                </div>
                <h2 className="text-lg sm:text-xl mb-2 sm:mb-4 text-center font-bold font-Roboto text-black dark:text-white">Selamat Datang di Diactivee</h2>
                <p className="mb-4 text-sm sm:text-base text-center font-Roboto text-black dark:text-gray-200">Bergabung sekarang untuk pengembangan potensi dan keterampilan masa kini.</p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 lg:items-center lg:justify-center">
                    <button
                        onClick={handleLogin}
                        className="bg-blue-500 dark:hover:bg-gray-200 dark:bg-white dark:text-black dark:border-2 dark:border-gray-800 text-white px-4 py-2 lg:px-12 rounded hover:bg-blue-700"
                    >
                        Login
                    </button>
                    <button
                        onClick={handleRegister}
                        className="bg-green-500 dark:bg-gray-900 dark:border-2 dark:border-gray-200 dark:hover:bg-gray-700 text-white px-4 py-2 lg:px-10 rounded hover:bg-green-700"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
