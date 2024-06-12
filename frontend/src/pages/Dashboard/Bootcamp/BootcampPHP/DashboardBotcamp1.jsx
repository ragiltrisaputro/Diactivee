import React, { useState, useEffect } from 'react';
import { logoBrand } from '../../../../assets/image/logo/logoBrand';
import { IoShareSocial } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Php } from '../../../../assets/image/Cover/butcamp/php';

export default function DashboardPhp() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate('/dashboard/bootcamp/php/checkout'); // Mengarahkan ke halaman checkout
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('ul').offsetHeight;
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="bg-[#20B486] h-40 lg:h-52 lg:mx-4 lg:rounded-lg">
        <div className="pt-10 lg:pt-20">
          <h2 className="font-Roboto text-white text- font-semibold text-xl text-center lg:text-3xl">
            Menyelami Dunia PHP Kursus Online Interaktif
          </h2>
        </div>
      </div>
      <div id="deskripsi" className="bg-white w-auto h-44 lg:h-48 rounded-xl shadow-xl mx-4 mt-[-50px] relative lg:mx-44">
        <div className="pt-2 pl-4">
          <img src={logoBrand} alt="Logo Brand" className="h-[40px] w-auto lg:h-[80px]" />
        </div>
        <h2 className="font-Roboto text-md text-justify mx-4 lg:mx-16 lg:text-center lg:text-xl">
          Siapkan dirimu untuk menjelajahi PHP secara interaktif, dari dasar-dasar hingga konsep-konsep tingkat lanjut, sambil mengeksplorasi proyek-proyek praktis dan tantangan kreatif!
        </h2>
      </div>
      <div className="bg-white mt-[-142px]">
        <div className="pt-40">
          <ul className={`grid grid-cols-3 lg:flex md:flex md:gap-6 lg:gap-6 justify-center items-center font-Roboto font-bold text-md  lg:text-xl ${isScrolled ? 'fixed top-[70px] text-white bg-[#20B486] lg:w-[80%] lg:mx-4 px-4 py-2 w-full z-10 transition-all duration-1000' : ''}`}>
            <li className="text-center">
              <a href="#kurikulum" onClick={(e) => scrollToSection(e, 'kurikulum')}>Kurikulum</a>
            </li>
            <li className="text-center">
              <a href="#metodologi" onClick={(e) => scrollToSection(e, 'metodologi')}>Metodologi</a>
            </li>
            <li className="text-center">
              <a href="#hasil" onClick={(e) => scrollToSection(e, 'hasil')}>Hasil Akhir</a>
            </li>
            <li className="text-center">
              <a href="#fasilitator" onClick={(e) => scrollToSection(e, 'fasilitator')}>Fasilitator</a>
            </li>
            <li className="text-center">
              <a href="#sertifikasi" onClick={(e) => scrollToSection(e, 'sertifikasi')}>Sertifikasi</a>
            </li>
          </ul>
        </div>
        <div className="mx-4 lg:mx-20 lg:flex lg:flex-row-reverse lg:gap-8 md:flex md:flex-row-reverse md:gap-4">
          <div className="lg:w-[30%] w-80 mt-10">
            <div className="bg-gray-100 rounded-lg">
              <img src={Php} alt="Bootcamp PHP" className="h-42 w-full py-4" />
            </div>
            <div className="font-roboto ml-4 mt-4">
              <h2 className="text-3xl font-bold text-[#4AC8AE]">Rp300.000</h2>
              <p className="text-md text-slate-400">Kouta Tersedia</p>
            </div>
            <div className="mx-5 lg:mx-7">
              <div className="my-4">
                <button
                  onClick={handleButtonClick}
                  className="bg-[#4AC8AE] mb-4 py-2 w-full text-white font-Roboto font-bold rounded-lg hover:bg-"
                >
                  Ikut Program
                </button>
                <button className=" gap-4 items-center flex py-2 px-28 text-[#4AC8AE] font-Roboto font-bold hover:underline">
                  <IoShareSocial className="text-lg" />Bagikan
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 mx-8 lg:w-[70%]">
            <div className='mb-8'>
              <h1 id="kurikulum" className="font-bold font-Roboto text-xl mb-2">Kurikulum</h1>
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Minggu</th>
                    <th className="px-4 py-2">Topik</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Minggu 1-2</td>
                    <td className="border px-4 py-2">Pengantar PHP dan dasar-dasar sintaks.</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Minggu 3-4</td>
                    <td className="border px-4 py-2">Struktur kontrol dan manipulasi string.</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Minggu 5-6</td>
                    <td className="border px-4 py-2">Fungsi dan array di PHP.</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Minggu 7-8</td>
                    <td className="border px-4 py-2">Pemrograman berorientasi objek (OOP) di PHP.</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Minggu 9-10</td>
                    <td className="border px-4 py-2">Integrasi dengan database MySQL.</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Minggu 11</td>
                    <td className="border px-4 py-2">Pengembangan aplikasi web dengan PHP dan framework Laravel.</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Minggu 12</td>
                    <td className="border px-4 py-2">Proyek akhir dan presentasi.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mb-8'>
              <h1 id="metodologi" className="font-bold font-Roboto text-xl mb-2">Metodologi Pembelajaran</h1>
              <h2 className="font-Roboto text-justify">
                Metodologi kami menggabungkan pembelajaran melalui video, latihan praktis, dan sesi tanya jawab langsung dengan mentor. Setiap minggu, peserta akan mengerjakan proyek kecil yang akan berkontribusi pada portofolio mereka. Kami juga menyediakan sesi mentoring mingguan untuk memberikan feedback dan dukungan kepada peserta.
              </h2>
            </div>
            <div className='mb-8'>
              <h1 id="hasil" className="font-bold font-Roboto text-xl mb-2">Hasil Akhir</h1>
              <h2 className="font-Roboto text-justify">
                Setelah menyelesaikan bootcamp, peserta akan memiliki portofolio proyek yang dapat ditunjukkan kepada calon pemberi kerja. Peserta akan memahami dan mampu menerapkan teknologi dan alat yang digunakan dalam pengembangan web dengan PHP. Mereka akan siap untuk memasuki dunia kerja sebagai developer PHP junior atau untuk mengembangkan aplikasi web mereka sendiri.
              </h2>
            </div>
            <div className='mb-8'>
              <h1 id="fasilitator" className="font-bold font-Roboto text-xl mb-2">Fasilitator dan Mentor</h1>
              <h2 className="font-Roboto text-justify">
                Tim pengajar terdiri dari profesional di industri pengembangan web dengan pengalaman bertahun-tahun. Kami juga menyelenggarakan sesi khusus dengan tamu dari perusahaan teknologi terkemuka untuk memberikan wawasan tentang tren industri dan peluang karir. Peserta akan mendapatkan mentoring pribadi untuk membantu mereka mencapai tujuan belajar dan mendapatkan masukan konstruktif sepanjang program.
              </h2>
            </div>
            <div className='mb-8'>
              <h1 id="sertifikasi" className="font-bold font-Roboto text-xl mb-2">Sertifikasi</h1>
              <h2 className="font-Roboto text-justify">
                Setelah menyelesaikan bootcamp, peserta akan menerima sertifikat penyelesaian dari Diactivee. Sertifikat ini diakui oleh industri dan dapat digunakan untuk meningkatkan profil profesional di platform seperti LinkedIn. Sertifikat tersebut juga mencerminkan kompetensi peserta dalam pengembangan web modern dan kemampuan untuk bekerja pada proyek pengembangan web dari awal hingga akhir.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
