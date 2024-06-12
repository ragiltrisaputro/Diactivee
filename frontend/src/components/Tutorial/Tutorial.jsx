import React, { useState, useRef } from "react";
import { Boostrap } from "../../assets/image/Cover/Tutorial/Boostrap";
import { BoostrapVideo } from "../../assets/Video/BootsrapVideo";
import { Flutter } from "../../assets/image/Cover/Tutorial/flutter";
import { FlutterVideo } from "../../assets/Video/Flutervideo";
import { NavbarCover } from "../../assets/image/Cover/Tutorial/navbar";
import { FooterCover } from "../../assets/image/Cover/Tutorial/footer";


function Card({ image, title, description, link, onClick }) {
  return (
    <div
      className="max-w-xs sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 cursor-pointer"
      onClick={onClick}
    >
      <img className="rounded-t-lg h-42 w-full object-cover" src={image} alt={title} />
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Tutorial() {
  const [searchTerm, setSearchTerm] = useState("");
  const [playingIndex, setPlayingIndex] = useState(-1);
  const [category, setCategory] = useState("all");
  const [cards] = useState([
    {
      image: Boostrap,
      link: "#",
      title: "Membuat Landing Page Menggunakan Bootstrap",
      description:
        "Langkah-langkah lengkap untuk membuat landing page yang menarik menggunakan Bootstrap",
      videoUrl: BoostrapVideo,
      category: "web",
    },
    {
      image: NavbarCover,
      link: "#",
      title: "Membuat Navbar Dengan Html dan CSS",
      description:
        "Langkah-langkah lengkap untuk membuat landing page yang menarik menggunakan Flutter 1",
      videoUrl: FlutterVideo,
      category: "web",
    },
    {
      image: Flutter,
      link: "#",
      title: "Membuat Aplikasi Simpel Dengan Flutter 1",
      description:
        "Langkah-langkah lengkap untuk membuat landing page yang menarik menggunakan Flutter 1",
      videoUrl: FlutterVideo,
      category: "android",
    },
    {
      image: FooterCover,
      link: "#",
      title: "Membuat Footer Dengan Html Dan CSS",
      description:
        "Langkah-langkah lengkap untuk membuat landing page yang menarik menggunakan Flutter 1",
      videoUrl: FlutterVideo,
      category: "web",
    },
  ]);

  const contentRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPlayingIndex(-1);
  };

  const handleCardClick = (index) => {
    setPlayingIndex(index);
    setTimeout(() => {
      const filterButton = document.getElementById("web-filter-button");
      if (filterButton) {
        filterButton.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setPlayingIndex(-1);
  };

  const filteredCards = cards.filter((card) => {
    return (
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "all" || card.category === category)
    );
  });

  return (
    <div>
      <div ref={contentRef} className="mx-5 mt-5 mb-5 lg:mb-10">
        <h2 className="text-[#22B286] font-Roboto font-bold text-2xl lg:text-[40px] lg:mb-2 md:mb-2">Kelas Tutorial</h2>
        <p className="text-[#667085] text-[16px] lg:text-[20px] font-Roboto mb-8">Ikuti langkah-langkah praktis dari tutorial kami untuk menguasai berbagai teknologi pemrograman.</p>
      </div>
      <div className="lg:mx-28 mx-4">
      <div className="mb-6">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch mx-2">
          <input
            type="search"
            className="relative m-0 block flex-auto rounded border border-solid border-black bg-transparent bg-clip-padding px-3 py-2 text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,20)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={searchTerm}
            onChange={handleSearch}
          />
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-2 text-center text-base font-normal text-black dark:text-neutral-200"
            id="basic-addon2"
          >
          </span>
        </div>
        <div className="flex flex-wrap justify-center space-x-2">
          <button
            id="web-filter-button"
            className={`py-2 px-2 rounded text-sm ${category === "all" ? "bg-[#20B486] text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleCategoryClick("all")}
          >
            All
          </button>
          <button
            className={`py-1 px-3 rounded text-sm ${category === "web" ? "bg-[#20B486] text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleCategoryClick("web")}
          >
            Web Developer
          </button>
          <button
            className={`py-1 px-3 rounded text-sm ${category === "android" ? "bg-[#20B486] text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleCategoryClick("android")}
          >
            Android Developer
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        <div className="lg:col-span-3 md:col-span-2 mb-4">
          {playingIndex !== -1 && (
            <>
              <video key={playingIndex} className="rounded-lg w-full" controls autoPlay>
                <source src={filteredCards[playingIndex].videoUrl} type="video/mp4" />
              </video>
              <div className="mt-4 p-4 bg-white shadow-xl dark:bg-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {filteredCards[playingIndex].title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {filteredCards[playingIndex].description}
                </p>
              </div>
            </>
          )}
        </div>
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            link={card.link}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
    </div>

  );
}