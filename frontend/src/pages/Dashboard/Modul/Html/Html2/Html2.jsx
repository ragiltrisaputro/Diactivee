import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const content = {
  judul: "Teks dan Paragraf dalam HTML",
  pengantar: {
    title: "Tag Heading dan Paragraf",
    points: [
      "Heading",
      "HTML menyediakan enam level heading dari <h1> sampai <h6>, dengan <h1> menjadi yang terbesar dan <h6> yang terkecil. Heading digunakan untuk memberi struktur dan hierarki pada konten.",
      "Paragraf",
      "Tag <p> digunakan untuk mendefinisikan paragraf.",
    ],
  },
  sejarah: {
    title: "Line Break dan Horizontal Rule",
    points: [
      "Line Break",
      "Tag <br> digunakan untuk menyisipkan baris baru dalam teks.",
      "Horizontal Rule",
      "Tag <hr> digunakan untuk menyisipkan garis horizontal.",
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

export default function Html2() {
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
    <title>HTML Dasar</title>
</head>
<body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>Ini adalah sebuah paragraf. <strong>Teks tebal</strong> dan <em>teks miring</em>.</p>
    <p>Baris baru dengan <br> tag break.</p>
    <hr>
    <p>Ini adalah <mark>teks yang diberi highlight</mark> dan <u>teks yang digarisbawahi</u>.</p>
</body>
</html>`;

  const [htmlCode, setHtmlCode] = useState(initialHtml);

  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800">
        <div className="w-full lg:w-[70%] mx-auto pt-8 bg-white dark:bg-gray-900 lg:rounded-lg shadow-xl lg:p-8 mt-2 pb-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center font-roboto dark:text-white">
            {content.judul}
          </h2>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.pengantar.title}
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
              {content.sejarah.title}
            </p>
            <ul className="px-4 text-justify list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 dark:text-slate-200">
              <li className="mb-2 font-bold">{content.sejarah.points[0]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[1]}</li>
              <li className="mb-2 font-bold">{content.sejarah.points[2]}</li>
              <li className="mb-2 list-none">{content.sejarah.points[3]}</li>
            </ul>
          </div>
          <div className="mb-4 p-2">
            <p className="text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.peran.title}
            </p>
            <ul className="px-4 list-disc text-justify pl-6 font-Roboto text-base md:text-lg text-gray-700 dark:text-slate-200">
              <li className="mb-2 font-bold">{content.peran.points[0]}</li>
              <li className="mb-2 list-none">{content.peran.points[1]}</li>
              <li className="mb-2 font-bold">{content.peran.points[2]}</li>
              <li className="mb-2 list-none">{content.peran.points[3]}</li>
              <li className="mb-2 font-bold">{content.peran.points[4]}</li>
              <li className="mb-2 list-none">{content.peran.points[5]}</li>
              <li className="mb-2 font-bold">{content.peran.points[6]}</li>
              <li className="mb-2 list-none">{content.peran.points[7]}</li>
              <li className="mb-2 font-bold">{content.peran.points[8]}</li>
              <li className="mb-2 list-none">{content.peran.points[9]}</li>
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
                className="w-full h-64 border border-gray-300 rounded-md mx-auto bg-gray-300 dark:text-black"
              />
            </div>
          </div>
          <div className="mb-4 p-2">
            <p className="px-2 text-lg md:text-xl font-bold font-Roboto mb-4 dark:text-white">
              {content.entity.title}
            </p>
            <p className="px-4 text-justify text-md font-Roboto indent-4 mb-2 dark:text-slate-200">
              {content.entity.points[0]}
            </p>
            <ul className="px-4 ml-4 list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 dark:text-slate-200">
              <li className="mb-2">{content.entity.points[1]}</li>
              <li className="mb-2">{content.entity.points[2]}</li>
              <li className="mb-2">{content.entity.points[3]}</li>
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
    <title>Entity HTML</title>
</head>
<body>
    <p>Contoh entity HTML: &amp;, &lt;, &gt;, dan &nbsp; untuk spasi non-breaking.</p>
</body>
</html>
`}
                </code>
              </pre>
            </div>
          </div>
          <div className="my-4">
            <button
              onClick={() => handleClick("/dashboard/modul/html/3")}
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
