import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ show, onClose, title, children }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return createPortal(
    isVisible && (
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        ></div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 sm:mx-auto transform transition-transform duration-300 ease-out scale-100">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 dark:text-white dark:hover:text-gray-400"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="mt-4">{children}</div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#20B486] bg-opacity-85 hover:bg-[#20B486] dark:bg-slate-400 dark:hover:bg-slate-50 dark:text-black text-white px-6 py-3 rounded-lg shadow-md  transition-colors duration-200"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
