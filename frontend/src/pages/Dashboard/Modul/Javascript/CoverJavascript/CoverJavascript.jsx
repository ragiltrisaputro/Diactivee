import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import ButtonModul from "../../../../../components/button/Modul/ButtonModul";
import ModalComing from "../../../../../components/Modal/Coming/ModalComing";
import { LogoCss } from "../../../../../assets/image/Modul/CSS/Css";

export default function CoverJavascript() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/registrasi");
  };

  const handleButtonClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="bg-white pt-2 lg:pt-20 pb-10 flex flex-col justify-center items-center dark:bg-gray-900 h-screen">
        <img src={LogoCss} alt="HTML" className="h-36 mb-8 animate-pulse" />
        <h1 className="text-4xl font-bold mb-4 dark:text-white">
          Modul JavaScript
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:mx-24">
          <ButtonModul
            title="Pengenalan JavaScript"
            icon={FaBook}
            onClick={handleButtonClick}
          />
          <ButtonModul
            title="Variabel,Tipe Data,Operator"
            icon={FaBook}
            onClick={handleButtonClick}
          />
          <ButtonModul
            title="Kondisional dan Loop"
            icon={FaBook}
            onClick={handleButtonClick}
          />
          <ButtonModul
            title="Fungsi dan Scope"
            icon={FaBook}
            onClick={handleButtonClick}
          />
          <ButtonModul
            title="DOM Manipulation"
            icon={FaBook}
            onClick={handleButtonClick}
          />
          <ButtonModul
            title="Event Handling"
            icon={FaBook}
            onClick={handleButtonClick}
          />
          <ButtonModul
            title="AJAX dan Fetch API"
            icon={FaBook}
            onClick={handleButtonClick}
          />
        </div>
      </div>
      {showModal && (
        <ModalComing
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
