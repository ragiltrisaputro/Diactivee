import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const content = {
  judul: "Sejarah dan Peran HTML dalam Pengembangan Web",
  pengantar: {
    title: "Pengantar",
    text: "HTML (HyperText Markup Language) adalah bahasa markah standar yang digunakan untuk membuat dan merancang halaman web. Sejak diciptakan pada awal tahun 1990-an oleh Tim Berners-Lee, HTML telah menjadi fondasi dari World Wide Web.",
  },
  sejarah: {
    title: "Sejarah Singkat HTML",
    points: [
      "Awal Mula : HTML pertama kali dikembangkan di CERN (Organisasi Eropa untuk Penelitian Nuklir) oleh Tim Berners-Lee pada tahun 1990.",
      "HTML 2.0 : Standar pertama HTML yang dirilis pada tahun 1995 oleh Internet Engineering Task Force (IETF).",
      "Evolusi : HTML terus berkembang dengan penambahan fitur-fitur baru dan revisi standar. HTML4, dirilis pada tahun 1997, membawa sejumlah peningkatan signifikan, sementara HTML5, yang pertama kali diperkenalkan pada tahun 2008, memperkenalkan sejumlah fitur modern dan mendefinisikan kembali struktur dasar web.",
    ],
  },
  peran: {
    title: "Peran HTML dalam Pembuatan Halaman Web",
    points: [
      "Struktur : HTML menentukan struktur dasar sebuah halaman web, seperti judul, paragraf, dan daftar.",
      "Konten : HTML digunakan untuk menambahkan teks, gambar, audio, video, dan elemen-elemen lainnya ke halaman web.",
      "Hyperlink : HTML memungkinkan pembuatan tautan (link) yang menghubungkan halaman web satu dengan yang lainnya, serta dengan sumber daya eksternal seperti gambar atau dokumen lainnya.",
    ],
  },
  tagAtribut: {
    title: "Tag dan Atribut Dasar HTML",
    points: [
      "<html> : Menandai awal dan akhir dokumen HTML.",
      "<head> : Berisi informasi meta tentang dokumen, seperti judul halaman dan penghubung ke file CSS.",
      "<body> : Menandai awal dan akhir konten yang akan ditampilkan pada halaman web.",
      "Atribut id dan class : Digunakan untuk memberikan identifikasi atau kelas kepada elemen HTML untuk styling dan manipulasi JavaScript.",
    ],
  },
  rangkuman:
    "HTML adalah bahasa markah standar untuk membuat halaman web. Diciptakan pada awal tahun 1990-an oleh Tim Berners-Lee, HTML telah berkembang menjadi fondasi dari World Wide Web. HTML digunakan untuk menentukan struktur, menambahkan konten, dan membuat tautan dalam sebuah halaman web. Tag dan atribut HTML memberikan kerangka dasar untuk mengorganisir dan menyajikan konten.",
};

export default function DashboardHtml() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="w-full lg:w-[70%] mx-auto pt-8 bg-white dark:bg-gray-900 lg:rounded-lg shadow-xl lg:p-8 mt-2 pb-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center font-roboto dark:text-white">
            {content.judul}
          </h2>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.pengantar.title}
            </p>
            <p className="px-4 text-base indent-4 md:text-lg text-gray-700 font-Roboto leading-relaxed md:leading-loose text-justify dark:text-gray-400">
              {content.pengantar.text}
            </p>
          </div>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.sejarah.title}
            </p>
            <ul className="px-4 text-justify list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 dark:text-gray-400">
              <li className="mb-2">{content.sejarah.points[0]}</li>
              <li className="mb-2">{content.sejarah.points[1]}</li>
              <li className="mb-2">{content.sejarah.points[2]}</li>
            </ul>
          </div>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white ">
              {content.peran.title}
            </p>
            <ul className="list-disc text-justify pl-6 font-Roboto text-base md:text-lg text-gray-700 dark:text-gray-400">
              <li className="mb-2">{content.peran.points[0]}</li>
              <li className="mb-2">{content.peran.points[1]}</li>
              <li className="mb-2">{content.peran.points[2]}</li>
            </ul>
          </div>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              Tag dan Atribut Dasar HTML
            </p>
            <ul className="px-4 text-justify list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 dark:text-gray-400">
              <li>&lt;html&gt; : Menandai awal dan akhir dokumen HTML.</li>
              <li>
                &lt;head&gt; : Berisi informasi meta tentang dokumen, seperti
                judul halaman dan penghubung ke file CSS.
              </li>
              <li>
                &lt;body&gt; : Menandai awal dan akhir konten yang akan
                ditampilkan pada halaman web.
              </li>
              <li>
                Atribut id dan class : Digunakan untuk memberikan identifikasi
                atau kelas kepada elemen HTML untuk styling dan manipulasi
                JavaScript.
              </li>
            </ul>
            <div className="bg-gray-100 rounded-md my-4 overflow-x-auto w-80 mx-auto md:w-full dark:bg-gray-400">
              <pre className="p-4">
                <code className="language-html dark:text-black">
                  {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Judul -->
    <title>Document</title>
    <!-- Sisipkan file CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Isi Konten -->
    <h1>Hello Word</h1>
</body>
</html>`}
                </code>
              </pre>
            </div>
          </div>
          <div className="p-2 px-4">
            <h2 className="text-xl md:text-2xl lg:text-6xl font-bold mb-4 font-roboto dark:text-white">
              Rangkuman
            </h2>
            <p className="text-base md:text-lg text-gray-700 font-Roboto leading-relaxed md:leading-loose text-justify indent-4 dark:text-gray-400">
              {content.rangkuman}
            </p>
          </div>
          <div className="my-4">
            <button
              onClick={() => handleClick("/dashboard/modul/html/2")}
              className="ml-4 py-2 px-2 bg-green-800 rounded-lg text-white font-Roboto font-bold hover:bg-green-700 dark:bg-slate-400 dark:text-black dark:hover:bg-slate-200"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
