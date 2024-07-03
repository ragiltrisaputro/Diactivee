import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { ImgRegistrasi } from "../../assets/image/Registrasi/Registrasi";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import Modal from "../../../src/components/Modal/Register/RegisterModal";

export default function Registrasi() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk menampilkan/menyembunyikan sandi
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk menampilkan/menyembunyikan sandi pada input konfirmasi password

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegistrasiClick = async () => {
    if (
      !name ||
      !username ||
      !email ||
      !no_telp ||
      !password ||
      !confirmPassword
    ) {
      setModalContent("Semua kolom harus diisi!");
      setShowModal(true);
      return;
    }

    if (password !== confirmPassword) {
      setModalContent("Passwords tidak cocok!");
      setShowModal(true);
      return;
    }

    const userData = {
      name,
      username,
      email,
      password,
      no_telp,
      profile_image: "",
      role: "user",
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        setModalContent("Registrasi berhasil!");
        setShowModal(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setModalContent(result.message || "Registrasi gagal!");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setModalContent("Terjadi kesalahan. Silakan coba lagi.");
      setShowModal(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                  src={ImgRegistrasi}
                  className="lg:h-[567px] md:h-[450px] lg:my-10"
                  alt="login-img"
                />
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-2 lg:ml-44">
                  <div className="rounded-lg bg-white dark:border-2 dark:border-blue-800 dark:bg-gradient-to-bl from-gray-800 via-blue-900 to-gray-800 shadow-md p-4">
                    <div className="ml-4 mt-2 ">
                      <h2 className="font-Roboto font-bold text-2xl md:text-4xl text-black dark:text-white">
                        Daftar
                      </h2>
                    </div>

                    {/* Nama */}
                    <div className="relative mx-4 my-8">
                      <input
                        type="text"
                        placeholder="Nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[#ECECEC]  dark:bg-white dark:text-black text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14  w-full rounded shadow-md"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoPersonSharp className="text-xl" />
                      </div>
                    </div>

                    {/* Username */}
                    <div className="relative mx-4">
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-[#ECECEC]  dark:bg-white dark:text-black  text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14 pr-2 w-full rounded shadow-md"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MdEmail className="text-xl" />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative mx-4 my-8">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#ECECEC]  dark:bg-white dark:text-black  text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14 pr-2 w-full rounded shadow-md"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MdEmail className="text-xl" />
                      </div>
                    </div>

                    {/* Whatsapp */}
                    <div className="relative mx-4">
                      <input
                        type="text"
                        placeholder="Whatsapp"
                        value={no_telp}
                        onChange={(e) => setNoTelp(e.target.value)}
                        className="bg-[#ECECEC] dark:bg-white dark:text-black  text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14 pr-2 w-full rounded shadow-md"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaPhoneAlt className="text-xl" />
                      </div>
                    </div>
                    <div className="relative mx-4 my-8">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#ECECEC]  dark:bg-white dark:text-black  text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14 pr-2 w-full rounded shadow-md"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <RiLockPasswordFill className="text-xl" />
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {showPassword ? (
                          <RiEyeOffFill
                            className="text-xl cursor-pointer"
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <RiEyeFill
                            className="text-xl cursor-pointer"
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </div>
                    </div>
                    <div className="relative mx-4 my-8">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Ulangi Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-[#ECECEC]  dark:bg-white dark:text-black  text-[#2F2F2F] font-semibold font-Roboto py-2 pl-14 pr-2 w-full rounded shadow-md"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <RiLockPasswordFill className="text-xl" />
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {showConfirmPassword ? (
                          <RiEyeOffFill
                            className="text-xl cursor-pointer"
                            onClick={toggleConfirmPasswordVisibility}
                          />
                        ) : (
                          <RiEyeFill
                            className="text-xl cursor-pointer"
                            onClick={toggleConfirmPasswordVisibility}
                          />
                        )}
                      </div>
                    </div>
                    <div className="pb-2 mx-4">
                      <button
                        className="flex-shrink-0 dark:bg-white dark:hover:bg-gray-200 dark:text-black bg-[#20B486] bg-opacity-85 hover:bg-[#20B486] text-white font-semibold font-Roboto py-2 w-full md:w-full rounded shadow-md"
                        onClick={handleRegistrasiClick}
                      >
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Notifikasi"
      >
        <p className="text-lg text-gray-800 dark:text-white">{modalContent}</p>
      </Modal>
    </>
  );
}
