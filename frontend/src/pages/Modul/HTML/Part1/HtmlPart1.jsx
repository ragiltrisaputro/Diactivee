import React, { useState, useEffect } from 'react';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/footer/Footer';
import Loading from '../../../../components/Loading/Loading';
import { Part1 } from '../../../../assets/image/Modul/HTML/Part1/Part1';

export default function HtmlPart1() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-200 min-h-screen flex flex-col items-center justify-center">
                        <div className="max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg p-8 mt-28 mb-10">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center font-roboto">Sejarah dan Peran HTML dalam Pengembangan Web</h2>
                            <div className="mb-8">
                                <p className="text-lg md:text-xl font-bold font-Roboto mb-4">Pengantar</p>
                                <p className="text-base indent-4 md:text-lg text-gray-700 font-Roboto leading-relaxed md:leading-loose text-justify hover:text-green-600 transition-colors duration-300">HTML (HyperText Markup Language) adalah bahasa markah standar yang digunakan untuk membuat dan merancang halaman web. Sejak diciptakan pada awal tahun 1990-an oleh Tim Berners-Lee, HTML telah menjadi fondasi dari World Wide Web.</p>
                            </div>
                            <div className="mb-8">
                                <p className="text-lg md:text-xl font-bold font-Roboto mb-4">Sejarah Singkat HTML</p>
                                <ul className="list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 hover:text-green-600 transition-colors duration-300">
                                    <li>Awal Mula : HTML pertama kali dikembangkan di CERN (Organisasi Eropa untuk Penelitian Nuklir) oleh Tim Berners-Lee pada tahun 1990.</li>
                                    <li>HTML 2.0 : Standar pertama HTML yang dirilis pada tahun 1995 oleh Internet Engineering Task Force (IETF).</li>
                                    <li>Evolusi : HTML terus berkembang dengan penambahan fitur-fitur baru dan revisi standar. HTML4, dirilis pada tahun 1997, membawa sejumlah peningkatan signifikan, sementara HTML5, yang pertama kali diperkenalkan pada tahun 2008, memperkenalkan sejumlah fitur modern dan mendefinisikan kembali struktur dasar web.</li>
                                </ul>
                            </div>
                            <div className="mb-8">
                                <p className="text-lg md:text-xl font-bold font-Roboto mb-4">Peran HTML dalam Pembuatan Halaman Web</p>
                                <ul className="list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 hover:text-green-600 transition-colors duration-300">
                                    <li>Struktur : HTML menentukan struktur dasar sebuah halaman web, seperti judul, paragraf, dan daftar.</li>
                                    <li>Konten : HTML digunakan untuk menambahkan teks, gambar, audio, video, dan elemen-elemen lainnya ke halaman web.</li>
                                    <li>Hyperlink : HTML memungkinkan pembuatan tautan (link) yang menghubungkan halaman web satu dengan yang lainnya, serta dengan sumber daya eksternal seperti gambar atau dokumen lainnya.</li>
                                </ul>
                            </div>
                            <div className="mb-8">
                                <p className="text-lg md:text-xl font-bold font-Roboto mb-4">Tag dan Atribut Dasar HTML</p>
                                <ul className="list-disc pl-6 font-Roboto text-base md:text-lg text-gray-700 hover:text-green-600 transition-colors duration-300">
                                    <li>&lt;html&gt; : Menandai awal dan akhir dokumen HTML.</li>
                                    <li>&lt;head&gt; : Berisi informasi meta tentang dokumen, seperti judul halaman dan penghubung ke file CSS.</li>
                                    <li>&lt;body&gt; : Menandai awal dan akhir konten yang akan ditampilkan pada halaman web.</li>
                                    <li>Atribut id dan class : Digunakan untuk memberikan identifikasi atau kelas kepada elemen HTML untuk styling dan manipulasi JavaScript.</li>
                                </ul>
                                <div className="bg-gray-100 rounded-md my-4 overflow-x-auto w-80  md:w-full">
                                    <pre className="p-4">
                                        <code className="language-html">
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
                            <h2 className="text-xl md:text-2xl lg:text-6xl font-bold mb-4 text-center font-roboto">Rangkuman</h2>
                            <p className="text-base md:text-lg text-gray-700 font-Roboto leading-relaxed md:leading-loose text-justify indent-4 hover:text-green-600 transition-colors duration-300">HTML adalah bahasa markah standar untuk membuat halaman web. Diciptakan pada awal tahun 1990-an oleh Tim Berners-Lee, HTML telah berkembang menjadi fondasi dari World Wide Web. HTML digunakan untuk menentukan struktur, menambahkan konten, dan membuat tautan dalam sebuah halaman web. Tag dan atribut HTML memberikan kerangka dasar untuk mengorganisir dan menyajikan konten.</p>
                        </div>
                    </div>
                    <Footer/>
                </>
            )}
        </>
    );
}
