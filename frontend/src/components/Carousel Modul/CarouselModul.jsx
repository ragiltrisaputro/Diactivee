import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Html } from "../../assets/image/Cover/Html";
import { Css } from "../../assets/image/Cover/Css/Css";
import { JavaScript } from "../../assets/image/Cover/Javascript/Javascript";

function Card({ image, title, description, link, jenis }) {
  return (
    <div className="max-w-xs sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gradient-to-bl from-gray-900 via-blue-950 to-gray-900 dark:border-2 dark:border-blue-800 mt-8">
      <a>
        <img className="rounded-t-lg h-40 w-full" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href={link}>
          <h3 className="text-sm font-normal font-Roboto my-2 text-[#22B286]">
            {jenis}
          </h3>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#22B286] hover:bg-[#10966e] rounded-lg focus:ring-4 focus:outline-none"
        >
          Mulai
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="slick-slider" {...settings}>
      <Card
        image={Html}
        title="HTML Dasar"
        description="Dasar struktur website menggunakan elemen HTML."
        link="/modul-html"
        jenis="Web Developer"
      />
      <Card
        image={Css}
        title="CSS Dasar"
        description="Teknik mempercantik tampilan website dengan CSS."
        link="/modul-css"
        jenis="Web Developer"
      />
      <Card
        image={JavaScript}
        title="JavaScript Dasar"
        description="Membuat website interaktif dengan JavaScript sederhana."
        jenis="Web Developer"
      />
    </Slider>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className + " absolute right-0 top-1/2 transform -translate-y-1/2"
      }
      style={{ ...style, cursor: "pointer", zIndex: 10 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-green-800 dark:text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 010-2h10.586L9.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className + " absolute left-0 top-1/2 transform -translate-y-1/2"
      }
      style={{ ...style, cursor: "pointer", zIndex: 10 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-green-800 dark:text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L6.414 10H17a1 1 0 110 2H6.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default function CarouselModul() {
  return (
    <div id="modul" className="bg-white dark:bg-gray-900">
      <div className="lg:ml-28  pt-10 mx-10 ">
        <h1 className="text-xl lg:text-[36px] font-bold mb-2 text-[#101828] dark:text-white">
          Modul Terpopuler Kami
        </h1>
        <p className="text-[#667085] font-Roboto">
          Ikuti modul terkenal kami, pengetahuan yang diberikan pasti akan
          berguna untuk Anda.
        </p>
      </div>
      <div className="container mx-auto flex justify-center items-center h-full pb-10">
        <div className="max-w-screen-lg md:w-full w-[80%] lg:w-screen">
          <Carousel />
          <div className="my-6 ml-4">
            <a
              href="/all-modul"
              className="font-Roboto text-[#22B286] hover:text-gray-400"
            >
              Lihat Semua
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
