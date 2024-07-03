import React, { useState, useEffect } from "react";
import { logoBrand } from "../../../../assets/image/logo/logoBrand";
import { FaWhatsapp } from "react-icons/fa";
import { WebDeveloper } from "../../../../assets/image/Cover/butcamp/webdeveloper";

export default function BootcampFullStack() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector("ul").offsetHeight;
    const elementPosition =
      section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="bg-[#20B486] h-40 lg:h-52 lg:mx-4 lg:rounded-lg dark:bg-gray-800">
          <div className="pt-10 lg:pt-20">
            <h2 className="font-Roboto text-white text- font-semibold text-xl text-center lg:text-3xl">
              Bootcamp Binar: Menjadi Web Developer Profesional
            </h2>
          </div>
        </div>
        <div
          id="deskripsi"
          className="bg-white border-2 dark:text-slate-200 dark:border-blue-900 dark:bg-gradient-to-bl from-gray-900 via-blue-950 to-gray-900  w-auto h-44 lg:h-48 rounded-xl shadow-xl mx-4 mt-[-50px] relative lg:mx-44"
        >
          <div className="pt-2 pl-4 flex items-center font-bold text-black dark:text-slate-200">
            <img
              src={logoBrand}
              alt="Logo Brand"
              className="h-[40px] w-auto lg:h-[80px]"
            />
            Diactivee
          </div>
          <h2 className="font-Roboto text-md text-justify mx-4 lg:mx-16 lg:text-center lg:text-xl">
            Siapkan dirimu untuk menjadi web developer profesional dalam 12
            minggu dengan Bootcamp Binar. Program intensif ini mencakup dari
            dasar hingga teknik lanjutan dalam pengembangan web modern.
          </h2>
        </div>
        <div className="bg-white mt-[-142px] dark:bg-gray-900 pb-10">
          <div className="pt-40">
            <ul
              className={`grid grid-cols-3  lg:flex md:flex md:gap-6 lg:gap-6 justify-center items-center font-Roboto font-bold text-md  lg:text-xl ${
                isScrolled
                  ? "fixed top-[70px] text-white dark:bg-gray-800 bg-[#20B486] lg:w-[80%] lg:mx-4 px-4 py-2 w-full z-10 transition-all duration-1000"
                  : ""
              }`}
            >
              <li className="text-center dark:text-white">
                <a
                  href="#kurikulum"
                  onClick={(e) => scrollToSection(e, "kurikulum")}
                >
                  Kurikulum
                </a>
              </li>
              <li className="text-center  dark:text-white">
                <a
                  href="#metodologi"
                  onClick={(e) => scrollToSection(e, "metodologi")}
                >
                  Metodologi
                </a>
              </li>
              <li className="text-center  dark:text-white ">
                <a href="#hasil" onClick={(e) => scrollToSection(e, "hasil")}>
                  Hasil Akhir
                </a>
              </li>
              <li className="text-center  dark:text-white">
                <a
                  href="#fasilitator"
                  onClick={(e) => scrollToSection(e, "fasilitator")}
                >
                  Fasilitator
                </a>
              </li>
              <li className="text-center  dark:text-white">
                <a
                  href="#sertifikasi"
                  onClick={(e) => scrollToSection(e, "sertifikasi")}
                >
                  Sertifikasi
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-6 lg:mx-20 lg:flex lg:flex-row-reverse lg:gap-8 md:flex md:flex-row-reverse md:gap-4">
            <div className="lg:w-[30%] w-80 mt-10">
              <div className="bg-gray-100 rounded-lg">
                <img
                  src={WebDeveloper}
                  alt="WebDeveloper"
                  className="h-42 w-full py-4"
                />
              </div>
              <div className="font-roboto ml-4 mt-4">
                <h2 className="text-3xl font-bold font-Roboto dark:text-white text-[#20B486]">
                  Rp2.000.000
                </h2>
                <p className="text-md text-slate-400 font-Roboto dark:text-gray-400">
                  Kouta Tersedia
                </p>
              </div>
              <div className="mx-5 lg:mx-7">
                <div className="my-4">
                  <a
                    href="https://app.sandbox.midtrans.com/payment-links/BootcampPHP-1719164240445"
                    target="_blank"
                    className="bg-[#20B486] dark:bg-gray-400 dark:hover:bg-white dark:hover:text-black mb-4 py-2 w-full text-white font-Roboto font-bold rounded-lg block text-center"
                  >
                    Ikut Program
                  </a>
                  <a
                    href="https://wa.me/6289623491166"
                    target="_blank"
                    className=" gap-4 justify-center items-center flex mb-4 py-2 w-full bg-gray-300 hover:bg-gray-400 rounded-lg dark:bg-black dark:hover:bg-slate-200 dark:hover:text-black  text-black dark:text-white  font-Roboto font-bold"
                  >
                    <FaWhatsapp className="text-lg" />
                    Hubungi Admin
                  </a>
                  <div>
                    <p className="text-gray-500 text-sm text-justify font-Roboto dark:text-slate-200">
                      Nb : Bagi Peserta Yang Sudah Melakukan Pembayaran Segera
                      Menghubungi Admin Agar Segera Mendapatkan Informasi Lebih
                      Lanjut
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mx-8 lg:w-[70%]">
              <div className="mb-8">
                <h1
                  id="kurikulum"
                  className="font-bold font-Roboto text-xl mb-2 dark:text-slate-200"
                >
                  Kurikulum
                </h1>
                <table className="table-auto w-full text-left dark:text-slate-200 font-Roboto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Minggu</th>
                      <th className="px-4 py-2">Topik</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Minggu 1-2</td>
                      <td className="border px-4 py-2">
                        Dasar-dasar Pengembangan Web - HTML & CSS, responsive
                        design.
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Minggu 3-4</td>
                      <td className="border px-4 py-2">
                        JavaScript Dasar - Manipulasi DOM, event handling.
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Minggu 5-6</td>
                      <td className="border px-4 py-2">
                        JavaScript Lanjutan - Asynchronous JavaScript, API
                        fetching.
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Minggu 7-8</td>
                      <td className="border px-4 py-2">
                        Framework dan Library - React.js, state management
                        dengan Redux.
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Minggu 9-10</td>
                      <td className="border px-4 py-2">
                        Backend Development - Node.js, Express, database.
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Minggu 11</td>
                      <td className="border px-4 py-2">
                        Fullstack Integration - Menghubungkan frontend dan
                        backend, deployment.
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Minggu 12</td>
                      <td className="border px-4 py-2">
                        Capstone Project - Pengembangan proyek akhir,
                        presentasi, feedback.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-8 dark:text-slate-200">
                <h1
                  id="metodologi"
                  className="font-bold font-Roboto text-xl mb-2 dark:text-white"
                >
                  Metodologi Pembelajaran
                </h1>
                <h2 className="font-Roboto text-justify">
                  Pembelajaran interaktif dengan kombinasi video tutorial,
                  latihan praktis, dan sesi tanya jawab langsung dengan mentor.
                  Setiap minggu, peserta akan mengerjakan proyek kecil yang akan
                  berkontribusi pada portofolio mereka. Sesi mentoring setiap
                  minggu untuk memberikan feedback dan dukungan, serta mendorong
                  peserta untuk bekerja dalam tim dan berkolaborasi dalam proyek
                  grup.
                </h2>
              </div>
              <div className="mb-8">
                <h1
                  id="hasil"
                  className="font-bold font-Roboto text-xl mb-2 dark:text-white"
                >
                  Hasil Akhir
                </h1>
                <h2 className="font-Roboto text-justify dark:text-slate-200">
                  Peserta akan memiliki portofolio proyek yang dapat ditunjukkan
                  kepada calon pemberi kerja. Peserta akan memahami dan mampu
                  menerapkan teknologi dan alat yang digunakan dalam
                  pengembangan web modern. Peserta akan siap untuk memasuki
                  dunia kerja sebagai web developer junior atau untuk
                  mengembangkan aplikasi web mereka sendiri.
                </h2>
              </div>
              <div className="mb-8">
                <h1
                  id="fasilitator"
                  className="font-bold font-Roboto text-xl mb-2 dark:text-white"
                >
                  Fasilitator dan Mentor
                </h1>
                <h2 className="font-Roboto text-justify dark:text-slate-200">
                  Tim pengajar terdiri dari profesional di industri pengembangan
                  web dengan pengalaman bertahun-tahun. Sesi khusus dengan tamu
                  dari perusahaan teknologi terkemuka untuk memberikan wawasan
                  tentang tren industri dan peluang karir. Mentoring pribadi
                  untuk membantu peserta mencapai tujuan belajar mereka dan
                  mendapatkan masukan konstruktif sepanjang program.
                </h2>
              </div>
              <div className="mb-8">
                <h1
                  id="sertifikasi"
                  className="font-bold font-Roboto text-xl mb-2 dark:text-white"
                >
                  Sertifikasi
                </h1>
                <h2 className="font-Roboto text-justify dark:text-slate-200">
                  Setelah menyelesaikan bootcamp, peserta akan menerima
                  sertifikat penyelesaian dari Binar Academy. Sertifikat ini
                  diakui oleh industri dan dapat digunakan untuk meningkatkan
                  profil profesional di platform seperti LinkedIn. Sertifikat
                  tersebut juga mencerminkan kompetensi peserta dalam
                  pengembangan web modern dan kemampuan untuk bekerja pada
                  proyek pengembangan web dari awal hingga akhir.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
