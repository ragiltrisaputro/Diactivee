import React, { useState } from "react";
import { Html } from "../../../assets/image/Cover/Html";
import { Css } from "../../../assets/image/Cover/Css/Css";
import { JavaScript } from "../../../assets/image/Cover/Javascript/Javascript";
import { Dart } from "../../../assets/image/Cover/dart/dart";
import { useNavigate } from "react-router-dom";

const Card = ({ title, content, imageSrc, onClick }) => {
  return (
    <div
      className="rounded-2xl border-2 dark:border-blue-900 dark:bg-gradient-to-bl from-gray-900 via-blue-950 to-gray-900 border-gray-200 bg-[#FFFBFB] shadow-md w-full md:w-[270px] mx-auto mb-6 cursor-pointer hover:shadow-lg duration-300 overflow-hidden transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 font-Roboto text-black dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 font-Roboto dark:text-gray-200">
          {content}
        </p>
      </div>
    </div>
  );
};

export default function DashboardModul() {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleProgramChange = (program) => {
    setSelectedProgram(program);
  };

  const handleHtmlClick = () => {
    navigate("/dashboard/modul/html");
  };

  const handleFlutterClick = () => {
    navigate("/dashboard/modul/dart");
  };

  const handleCssClick = () => {
    navigate("/dashboard/modul/css");
  };

  const handleNewClick = () => {
    navigate("/dashboard/modul/javascript");
  };

  const desktopCards = [
    {
      title: "HTML Dasar",
      content: "Belajar HTML dasar untuk membuat dan merancang halaman web.",
      imageSrc: Html,
      onClick: handleHtmlClick,
    },
    {
      title: "CSS Dasar",
      content: "Belajar CSS dasar untuk styling halaman web.",
      imageSrc: Css,
      onClick: handleCssClick,
    },
    {
      title: "Java Script",
      content: "Membuat website interaktif dengan JavaScript sederhana",
      imageSrc: JavaScript,
      onClick: handleNewClick,
    },
  ];

  const androidCards = [
    {
      title: "Dart & Flutter Dasar",
      content:
        "Kelas Dart dan Flutter Dasar adalah kursus untuk pemula dalam pengembangan aplikasi mobile",
      imageSrc: Dart,
      onClick: handleFlutterClick,
    },
  ];
  return (
    <div>
      <div className="pt-10 bg-white h-auto dark:bg-gray-900">
        <div className="mx-5 mb-5 lg:mb-10">
          <h2 className="text-[#22B286] dark:text-white font-Roboto font-bold text-2xl lg:text-[40px] lg:mb-2 md:mb-2">
            Kelas Modul
          </h2>
          <p className="text-[#667085] dark:text-gray-400 text-[16px] lg:text-[20px] font-Roboto mb-8">
            Pelajari berbagai modul pembelajaran pemrograman yang telah kami
            siapkan untuk meningkatkan skill Anda.
          </p>
        </div>

        <div className="mx-6 md:mx-16">
          <div className="mb-4">
            <label
              htmlFor="program-select"
              className="mr-2 font-Roboto md:text-xl text-lg text-slate-500 font-bold dark:text-white"
            >
              Pilih Program :
            </label>
            <select
              id="program-select"
              className="border border-gray-300 rounded-md p-1 md:p-2 md:text-xl font-Roboto font-bold mb-4"
              onChange={(e) => handleProgramChange(e.target.value)}
            >
              <option value="" className="font-Roboto text-sm">
                Semua Program
              </option>
              <option value="web" className="font-Roboto text-sm">
                Web Developer
              </option>
              <option value="android" className="font-Roboto text-sm">
                Mobile Developer
              </option>
            </select>
          </div>
          <div className="md:flex flex-wrap gap-4 lg:mx-28 md:mx-4">
            {(selectedProgram === "" || selectedProgram === "web") &&
              desktopCards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  content={card.content}
                  imageSrc={card.imageSrc}
                  onClick={card.onClick}
                />
              ))}
            {(selectedProgram === "" || selectedProgram === "android") &&
              androidCards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  content={card.content}
                  imageSrc={card.imageSrc}
                  onClick={card.onClick}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
