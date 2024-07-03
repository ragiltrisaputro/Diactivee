import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const content = {
  judul: "Daftar dan Tabel dalam HTML",
  pengantar: {
    title: ["Daftar Tidak Berurutan", "Daftar Berurutan"],
    points: [
      "Daftar Tidak Berurutan",
      "Menggunakan tag <ul> untuk mendefinisikan daftar tidak berurutan (bulleted list).",
      "Item Daftar",
      "Menggunakan tag <li> untuk mendefinisikan item dalam daftar.",
      "Daftar Berurutan",
      "Menggunakan tag <ol> untuk mendefinisikan daftar berurutan (numbered list).",
      "Item Daftar",
      "Menggunakan tag <li> untuk mendefinisikan item dalam daftar.",
    ],
  },
  sejarah: {
    title: "Tabel",
    points: [
      "Tabel",
      "Menggunakan tag <table> untuk mendefinisikan tabel.",
      "Baris Tabel",
      "Menggunakan tag <tr> untuk mendefinisikan baris dalam tabel.",
      "Sel Tabel",
      "Menggunakan tag <td> untuk mendefinisikan sel dalam tabel.",
      "Sel Header",
      "Menggunakan tag <th> untuk mendefinisikan sel header dalam tabel.",
      "Atribut",
      "border untuk menambahkan border pada tabel.",
    ],
  },
  peran: {
    title: "Format Teks",
    points: [
      "Bold",
      "Tag <strong> atau <b> untuk teks tebal.",
      "Italic",
      "Tag <em> atau <i> untuk teks miring.",
      "Underline",
      "Tag <u> untuk menggarisbawahi teks.",
      "Small",
      "Tag <small> untuk menampilkan teks lebih kecil.",
      "Highlight",
      "Tag <mark> untuk menyoroti teks.",
    ],
  },
  entity: {
    title: "Entity HTML",
    points: [
      "Entity HTML digunakan untuk menampilkan karakter khusus yang mungkin memiliki makna khusus dalam HTML. Contohnya adalah :",
      "&nbsp; untuk spasi non-breaking.",
      "&lt; untuk simbol kurang dari (<).",
      "&gt; untuk simbol lebih dari (>).",
    ],
  },
  rangkuman:
    "HTML adalah bahasa markah standar untuk membuat halaman web. Diciptakan pada awal tahun 1990-an oleh Tim Berners-Lee, HTML telah berkembang menjadi fondasi dari World Wide Web. HTML digunakan untuk menentukan struktur, menambahkan konten, dan membuat tautan dalam sebuah halaman web. Tag dan atribut HTML memberikan kerangka dasar untuk mengorganisir dan menyajikan konten.",
};
export default function Html3() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };
  const initialHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabel HTML</title>
</head>
<body>
    <h2>Tabel</h2>
    <table border="1">
        <tr>
            <th>Nama</th>
            <th>Umur</th>
        </tr>
        <tr>
            <td>Alice</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
        </tr>
    </table>
</body>
</html>
    `;

  const [htmlCode, setHtmlCode] = useState(initialHtml);

  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="w-full lg:w-[70%] mx-auto pt-8 bg-white dark:bg-gray-900 lg:rounded-lg shadow-xl lg:p-8 mt-2 pb-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center font-roboto dark:text-white">
            {content.judul}
          </h2>
          <div className="p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.pengantar.title[0]}
            </p>
            <ul className="px-4 text-justify list-disc font-Roboto text-base md:text-lg text-gray-700 dark:text-slate-200">
              <li className="mb-2 font-bold">{content.pengantar.points[0]}</li>
              <li className="mb-2 list-none">{content.pengantar.points[1]}</li>
              <li className="mb-2 font-bold">{content.pengantar.points[2]}</li>
              <li className="mb-2 list-none">{content.pengantar.points[3]}</li>
            </ul>
          </div>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.pengantar.title[1]}
            </p>
            <ul className="px-4 text-justify list-disc font-Roboto text-base md:text-lg text-gray-700 dark:text-slate-200">
              <li className="mb-2 font-bold">{content.pengantar.points[4]}</li>
              <li className="mb-2 list-none">{content.pengantar.points[5]}</li>
              <li className="mb-2 font-bold">{content.pengantar.points[6]}</li>
              <li className="mb-2 list-none">{content.pengantar.points[7]}</li>
            </ul>
            <div className="bg-gray-100 rounded-md my-4 overflow-x-auto w-full mx-auto dark:bg-gray-400">
              <pre className="px-4 whitespace-pre-wrap break-words">
                <code className="language-html">
                  {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar HTML</title>
</head>
<body>

    <h2>Daftar Tidak Berurutan</h2>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h2>Daftar Berurutan</h2>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
</body>
</html>

`}
                </code>
              </pre>
            </div>
          </div>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.sejarah.title}
            </p>
            <ul className="px-4 text-justify list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 dark:text-slate-200">
              <li className="mb-2 font-bold">{content.sejarah.points[0]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[1]}</li>
              <li className="mb-2 font-bold">{content.sejarah.points[2]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[3]}</li>
              <li className="mb-2 font-bold">{content.sejarah.points[4]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[5]}</li>
              <li className="mb-2 font-bold">{content.sejarah.points[6]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[7]}</li>
              <li className="mb-2 font-bold">{content.sejarah.points[8]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[9]}</li>
            </ul>
            <div className="bg-gray-100 rounded-md my-4 overflow-x-auto w-full mx-auto dark:bg-gray-400">
              <pre className="px-4 whitespace-pre-wrap break-words">
                <code className="language-html">{initialHtml}</code>
              </pre>
            </div>
            <div className="my-4 font-Roboto font-bold text-xl dark:text-white">
              <h2>Implementasi Code :</h2>
            </div>
            <div className="mb-4">
              <textarea
                className="w-full h-64 p-2 border border-gray-300 rounded-md mx-auto dark:bg-gray-400"
                value={htmlCode}
                onChange={handleHtmlChange}
              />
            </div>
            <div className="my-4 font-Roboto font-bold text-xl dark:text-white">
              <h2>Hasil :</h2>
            </div>
            <div className="mb-4 p-2">
              <iframe
                srcDoc={htmlCode}
                title="Output"
                sandbox="allow-scripts"
                frameBorder="0"
                className="w-full h-64 border border-gray-300 rounded-md mx-auto dark:bg-gray-300"
              />
            </div>
          </div>
          <div className="my-4">
            <button
              onClick={() => handleClick("/dashboard/modul/html/4")}
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
