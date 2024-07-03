import React from "react";
import { Coming } from "../../../assets/image/Modal/coming";

export default function ModalComing({ setShowModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded shadow-lg relative max-w-md w-full dark:bg-gradient-to-bl from-gray-800 via-blue-900 to-gray-800 dark:border-2 dark:border-blue-800">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl dark:text-white"
        >
          &times;
        </button>
        <div className="my-4 sm:my-8">
          <img
            src={Coming}
            alt="Modal Graphic"
            className="w-full h-[150px] sm:h-[250px] object-cover mb-4 rounded"
          />
        </div>
        <h2 className="text-3xl mb-6  text-center font-bold font-Roboto dark:text-white">
          Segera Hadir!
        </h2>
        <p className="mb-4 text-sm sm:text-base text-center font-Roboto dark:text-white">
          Tetaplah terhubung untuk pembaruan menarik dan fitur baru. Kami sedang
          bekerja keras untuk memberikan Anda pengalaman terbaik.
        </p>
      </div>
    </div>
  );
}
