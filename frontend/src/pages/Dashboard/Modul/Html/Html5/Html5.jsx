import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalSuccses from "../../../../../components/Modal/Sucsess/ModalSucsess";

const content = {
  judul: "Formulir dan Input Pengguna dalam HTML",
  pengantar: {
    title: ["Formulir"],
    points: [
      "Formulir",
      "Menggunakan tag <form> untuk membuat formulir.",
      "Atribut action",
      "URL tujuan data formulir.",
      "Atribut method",
      "Metode pengiriman data (GET atau POST).",
    ],
  },
  sejarah: {
    title: "Elemen Input",
    points: [
      "Input Teks",
      "Menggunakan tag <input> dengan atribut type=text.",
      "Input Email",
      "Menggunakan tag <input> dengan atribut type=email.",
      "Input Password",
      "Menggunakan tag <input> dengan atribut type=password.",
      "Textarea",
      "Menggunakan tag <textarea> untuk input teks panjang.",
      "Button",
      "Menggunakan tag <button> untuk tombol.",
      "Dropdown",
      "Menggunakan tag <select> dan <option> untuk dropdown list.",
      "Atribut Input 'type' 'name' ",
    ],
  },
};

export default function Html5() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
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

  const handleNextClick = () => {
    setShowModal(true);
  };

  const handleModul = () => {
    navigate("/dashboard/modul");
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
              <li className="mb-2 font-bold">{content.pengantar.points[4]}</li>
              <li className="mb-2 list-none">{content.pengantar.points[5]}</li>
            </ul>
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
              <li className="mb-2 font-bold">{content.sejarah.points[10]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[11]}</li>
              <li className="mb-2 font-bold">{content.sejarah.points[12]}</li>
            </ul>
          </div>
          <div>
            <button
              onClick={handleNextClick}
              className="ml-4 py-2 px-2 bg-green-800 rounded-lg text-white font-Roboto font-bold hover:bg-green-700 dark:bg-slate-400 dark:text-black dark:hover:bg-slate-200"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalSuccses handleModul={handleModul} setShowModal={setShowModal} />
      )}
    </>
  );
}
