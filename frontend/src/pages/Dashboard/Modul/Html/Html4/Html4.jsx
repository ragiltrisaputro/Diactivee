import React, { useState } from "react";

const content = {
        judul: "Gambar, Tautan, dan Multimedia dalam HTML",
        pengantar: {
            title: [
                "Gambar",
                "Daftar Berurutan"
            ],
            points: [
                "Gambar",
                "Menggunakan tag <img> untuk menyisipkan gambar.",
                "Atribut src",
                "Menentukan URL sumber gambar.",
                "Atribut alt",
                "Menentukan teks alternatif jika gambar tidak bisa ditampilkan.",
                "Atribut width dan height",
                "Menentukan ukuran gambar."
            ]
        },
        sejarah: {
            title: "Tautan",
            points: [
                "Tautan",
                "Menggunakan tag <a> untuk membuat tautan.",
                "Atribut href",
                "Menentukan URL tujuan tautan.",
                "Atribut target",
                "Menentukan tempat terbukanya tautan (_blank, _self, dll.).",
            ]
        },
        peran: {
            title: "Multimedia",
            points: [
            "Audio",
            "Menggunakan tag <audio> untuk menyisipkan audio.",
            "Atribut Controls",
            "Menambahkan kontrol pemutar audio.",
            "Video",
            "Menggunakan tag <video> untuk menyisipkan video.",
            "Atribut controls, width, height.",

            ]
        }
    };
export default function Html4() {
    const initialHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gambar HTML</title>
</head>
<body>
    <h2>Gambar</h2>
    <img src="https://example.com/image.jpg" alt="Contoh Gambar" width="300" height="200">
</body>
</html>

    `;

    const [htmlCode, setHtmlCode] = useState(initialHtml);

    const handleHtmlChange = (event) => {
        setHtmlCode(event.target.value);
    };
 return (
        <>
            <div className="w-full lg:w-[70%] mx-auto bg-white rounded-lg shadow-xl lg:p-8 mt-2 mb-10 pb-5 overflow-hidden">
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
                        <li className='mb-2 font-bold'>{content.pengantar.points[6]}</li>
                        <li className='mb-2 list-none'>{content.pengantar.points[7]}</li>
                    </ul>
                    <div className="bg-gray-100 rounded-md my-4 overflow-x-auto w-full mx-auto">
                        <pre className="px-4 whitespace-pre-wrap break-words">
                            <code className="language-html">
                            {initialHtml}
                            </code>
                        </pre>
                    </div>
                    <div className='my-4 font-Roboto font-bold text-xl'>
                        <h2>Implementasi Code :</h2>
                    </div>
                    <div className="mb-4">
                    <textarea
                        className="w-full h-64 p-2 border border-gray-300 rounded-md mx-auto"
                        value={htmlCode}
                        onChange={handleHtmlChange}
                        />
                    </div>
                    <div className='my-4 font-Roboto font-bold text-xl'>
                        <h2>Hasil :</h2>
                    </div>
                    <div className="mb-4 p-2">
                    <iframe
                        srcDoc={htmlCode}
                        title="Output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        className="w-full h-64 border border-gray-300 rounded-md mx-auto"
                    />
                    </div>
                </div>
                <div className="mb-4 p-2">
                    <p className="text-lg md:text-xl font-bold font-Roboto mb-4">{content.sejarah.title}</p>
                    <ul className="px-4 text-justify list-disc font-Roboto text-base md:text-lg text-gray-700">
                        <li className='mb-2 font-bold'>{content.sejarah.points[0]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[1]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[2]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[3]}</li>
                        <li className='mb-2 font-bold'>{content.sejarah.points[4]}</li>
                        <li className='mb-2 list-none'>{content.sejarah.points[5]}</li>
                    </ul>
                    <div className="bg-gray-100 rounded-md my-4 overflow-x-auto w-full mx-auto">
                        <pre className="px-4 whitespace-pre-wrap break-words">
                            <code className="language-html">
{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tautan HTML</title>
</head>
<body>
    <h2>Tautan</h2>
    <a href="https://example.com" target="_blank">Kunjungi Example.com</a>
</body>
</html>

`}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="mb-4 p-2">
                    <p className="text-lg md:text-xl font-bold font-Roboto mb-4">{content.peran.title}</p>
                    <ul className="px-4 text-justify list-disc font-Roboto text-base md:text-lg text-gray-700">
                        <li className='mb-2 font-bold'>{content.peran.points[0]}</li>
                        <li className='mb-2 list-none'>{content.peran.points[1]}</li>
                        <li className='mb-2 font-bold'>{content.peran.points[2]}</li>
                        <li className='mb-2 list-none'>{content.peran.points[3]}</li>
                        <li className='mb-2 font-bold'>{content.peran.points[4]}</li>
                        <li className='mb-2 list-none'>{content.peran.points[5]}</li>
                        <li className='mb-2 font-bold'>{content.peran.points[6]}</li>
                    </ul>
                    <div className="bg-gray-100 rounded-md my-4 overflow-x-auto w-full mx-auto">
                        <pre className="px-4 whitespace-pre-wrap break-words">
                            <code className="language-html">
{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multimedia HTML</title>
</head>
<body>
    <h2>Audio</h2>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Browser Anda tidak mendukung elemen audio.
    </audio>

    <h2>Video</h2>
    <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
        Browser Anda tidak mendukung elemen video.
    </video>
</body>
</html>


`}
                            </code>
                        </pre>
                    </div>
                </div>


                <div>
                    <button className='px-4 py-2 bg-green-800 rounded-lg text-white font-Roboto font-bold'>Selanjutnya</button>
                </div>
            </div>
        </>
    );
}