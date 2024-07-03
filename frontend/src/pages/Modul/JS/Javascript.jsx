import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/footer/Footer";
import Loading from "../../../components/Loading/Loading";
import { MHtml } from "../../../assets/image/Modul/MHtml";
import { FaBook } from "react-icons/fa";
import ButtonModul from "../../../components/button/Modul/ButtonModul";
import Modal from "../../../components/Modal/Modal";

export default function Javascriptl() {
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
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-white dark:bg-gray-900 pt-28 pb-10 min-h-screen flex flex-col justify-center items-center">
            <img src={MHtml} alt="HTML" className="h-32 mb-8 animate-pulse" />
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              Modul HTML
            </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:mx-24">
              <ButtonModul
                title="Pengenalan Dart dan Flutter"
                icon={FaBook}
                onClick={handleButtonClick}
              />
              <ButtonModul
                title="Variabel, Tipe Data, dan Struktur Dasar Dart"
                icon={FaBook}
                onClick={handleButtonClick}
              />
              <ButtonModul
                title="Flutter Widgets dan Layout"
                icon={FaBook}
                onClick={handleButtonClick}
              />
              <ButtonModul
                title="Stateful dan Stateless Widgets"
                icon={FaBook}
                onClick={handleButtonClick}
              />
              <ButtonModul
                title="Navigasi dan Routing di Flutter"
                icon={FaBook}
                onClick={handleButtonClick}
              />
              <ButtonModul
                title="Interaksi Pengguna dan Formulir"
                icon={FaBook}
                onClick={handleButtonClick}
              />
              <ButtonModul
                title="Interaksi Pengguna dan Formulir"
                icon={FaBook}
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <Footer />
        </>
      )}
      {showModal && (
        <Modal
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
