import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { LoginImg } from "../../assets/image/Login/LoginImg";
import { logoBrand } from "../../assets/image/logo/logoBrand";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Login/LoginModal";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setModalMessage("Login berhasil!");
        setShowSuccessModal(true);
        localStorage.setItem("token", result.token);
      } else {
        if (response.status === 401) {
          setModalMessage("Email atau Kata Sandi Anda Salah");
        } else {
          setModalMessage(result.message || "Masuk gagal!");
        }
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setModalMessage("Terjadi kesalahan. Silakan coba lagi.");
      setShowErrorModal(true);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/dashboard");
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pt-20 lg:pt-16 bg-[#F5F5F5] dark:bg-gray-900 min-h-screen md:h-screen">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="hidden sm:block ml-28 md:ml-40">
                <img
                  src={LoginImg}
                  className="lg:h-[567px] md:h-[450px] lg:my-10"
                  alt="login-img"
                />
              </div>
              <div className="w-full self-end px-4 lg:w-1/2 my-10">
                <div className="relative mt-2 lg:ml-44">
                  <div className="rounded-lg bg-white dark:bg-gradient-to-bl from-gray-800 via-blue-900 to-gray-800 dark:border-2 dark:border-blue-800 shadow-md p-4 ">
                    <div className="ml-4 mt-8">
                      <h2 className="font-Roboto font-bold text-2xl lg:text-4xl md:text-4xl text-black dark:text-white">
                        Selamat Datang di
                      </h2>
                      <h3 className="font-Roboto flex items-center font-bold text-2xl lg:text-3xl text-black dark:text-white">
                        <img
                          src={logoBrand}
                          alt="logo-brand"
                          className="h-14 md:h-20 lg:h-24"
                        />
                        Diactivee
                      </h3>
                    </div>

                    {/* Form Login */}
                    <div className="mx-4 my-4">
                      <div className="relative my-8">
                        <input
                          type="email"
                          placeholder="Email"
                          className="bg-[#ECECEC] dark:bg-white dark:text-gray-200 text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14 pr-2 w-full rounded shadow-md"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <MdEmail className="text-xl text-black " />
                        </div>
                      </div>

                      <div className="relative my-8">
                        <input
                          type="password"
                          placeholder="Kata Sandi"
                          className="bg-[#ECECEC] dark:bg-white dark:text-gray-200 text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14 pr-2 w-full rounded shadow-md"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <RiLockPasswordFill className="text-xl" />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          className="mr-2 lg:mx-8 md:mx-6 my-4"
                        />
                        <label
                          htmlFor="rememberMe"
                          className="text-gray-600 font-Roboto dark:text-gray-200"
                        >
                          Ingatkan Saya
                        </label>
                        <a
                          href="#"
                          className="text-[#20B486] ml-8 lg:ml-40 md:ml-[340px] font-Roboto hover:text-gray-400 dark:text-gray-200 dark:hover:text-white"
                        >
                          Lupa Katasandi?
                        </a>
                      </div>

                      <div className="my-4 ">
                        <button
                          className="flex-shrink-0 bg-[#20B486] dark:bg-white dark:hover:bg-gray-200 dark:text-black bg-opacity-85 hover:bg-[#20B486] text-white font-semibold font-Roboto py-2 w-full md:w-full rounded shadow-md"
                          onClick={handleLoginClick}
                        >
                          Masuk
                        </button>
                      </div>
                      <div className="flex justify-center items-center gap-4 mt-8">
                        <h2 className="font-Roboto text-black dark:text-white">
                          Apakah Kamu Belum Mempunyai Akun ?
                        </h2>
                        <a
                          href="./registrasi"
                          className="font-Roboto text-[#20B486] hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-200"
                        >
                          Daftar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      <Modal
        show={showSuccessModal}
        onClose={closeSuccessModal}
        title="Masuk Berhasil"
        type="success"
      >
        <p className="text-lg text-gray-800 dark:text-white">{modalMessage}</p>
      </Modal>

      {/* Error Modal */}
      <Modal
        show={showErrorModal}
        onClose={closeErrorModal}
        title="Masuk Gagal"
        type="error"
      >
        <p className="text-lg text-gray-800 dark:text-white">{modalMessage}</p>
      </Modal>
    </>
  );
}
