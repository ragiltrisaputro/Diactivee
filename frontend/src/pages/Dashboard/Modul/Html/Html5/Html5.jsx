import React, { useState } from "react";

const content = {
        judul: "Formulir dan Input Pengguna dalam HTML",
        pengantar: {
            title: [
                "Formulir",
            ],
            points: [
                "Formulir",
                "Menggunakan tag <form> untuk membuat formulir.",
                "Atribut action",
                "URL tujuan data formulir.",
                "Atribut method",
                "Metode pengiriman data (GET atau POST)."
            ]
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
                "Atribut Input 'type' 'name' "
            ]
        },
    };
export default function Html5() {
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
            <div className="w-full lg:w-[70%] mx-auto bg-white rounded-lg shadow-xl lg:p-8 pt-8 mb-10 pb-5 overflow-hidden">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center font-roboto">{content.judul}</h2>
                <div className="p-2">
                    <p className="text-lg md:text-xl font-bold font-Roboto mb-4">{content.pengantar.title[0]}</p>
                    <ul className="px-4 text-justify list-disc font-Roboto text-base md:text-lg text-gray-700">
                        <li className='mb-2 font-bold'>{content.pengantar.points[0]}</li>
                        <li className='mb-2 list-none'>{content.pengantar.points[1]}</li>
                        <li className='mb-2 font-bold'>{content.pengantar.points[2]}</li>
                        <li className='mb-2 list-none'>{content.pengantar.points[3]}</li>
                        <li className='mb-2 font-bold'>{content.pengantar.points[4]}</li>
                        <li className='mb-2 list-none'>{content.pengantar.points[5]}</li>
                    </ul>
                </div>
                <div className="mb-4 p-2">
                    <p className="text-lg md:text-xl font-bold font-Roboto mb-4">{content.sejarah.title}</p>
                    <ul className="px-4 text-justify list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700">
                        <li className='mb-2 font-bold'>{content.sejarah.points[0]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[1]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[2]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[3]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[4]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[5]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[6]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[7]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[8]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[9]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[10]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[11]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[12]}</li>
                    </ul>
                </div>
                <div>
                    <button className='px-4 py-2 bg-green-800 rounded-lg text-white font-Roboto font-bold'>Selanjutnya</button>
                </div>
            </div>
        </>
    );
}