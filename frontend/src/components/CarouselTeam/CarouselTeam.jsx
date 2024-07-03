import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ragil } from "../../assets/image/team/Ragil";
import { Hendra } from "../../assets/image/team/hendra";
import { Decka } from "../../assets/image/team/decka";
import { Rosalinda } from "../../assets/image/team/Rosalinda";
import { Dhimas } from "../../assets/image/team/dhimas";
import { motion } from "framer-motion";

const AnimatedTitle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(true);
    };

    handleLoad();

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <motion.h2
      id="title-trigger"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 1.2 }}
      transition={{ duration: 0.5 }}
      className="font-Roboto font-bold text-2xl lg:text-3xl md:ml-20 lg:ml-18 ml-8 pt-8 text-black dark:text-white"
    >
      Our Team Members
    </motion.h2>
  );
};

function Card({ image, nama, job, univ }) {
  return (
    <div className="max-w-xs sm:max-w-sm rounded-lg mt-8">
      <div className="flex justify-center items-center rounded-t-xl">
        <img src={image} alt="team" className="h-44 w-44 rounded-full" />
      </div>
      <div className="p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-Roboto">
          {nama}
        </h5>
        <h3 className="mb-3 font-semibold font-Roboto text-gray-700 dark:text-gray-400">
          {job}
        </h3>
        <h3 className="mb-3 font-normal font-Roboto text-gray-700 dark:text-gray-400">
          {univ}
        </h3>
      </div>
    </div>
  );
}

function AnimatedCard({ image, nama, job, univ }) {
  return (
    <motion.div
      className="max-w-xs sm:max-w-sm rounded-lg mt-8"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center rounded-t-xl">
        <img src={image} alt="team" className="h-44 w-44 rounded-full" />
      </div>
      <div className="p-5 text-center">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-Roboto">
            {nama}
          </h5>
        </a>
        <h3 className="mb-3 font-semibold font-Roboto text-gray-700 dark:text-gray-400">
          {job}
        </h3>
        <h3 className="mb-3 font-normal font-Roboto text-gray-700 dark:text-gray-400">
          {univ}
        </h3>
      </div>
    </motion.div>
  );
}

function Carousel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerElement = document.getElementById("carousel-trigger");

      if (triggerElement) {
        const elementTop = triggerElement.offsetTop;
        const elementHeight = triggerElement.offsetHeight;
        const isInView =
          scrollTop + windowHeight > elementTop &&
          scrollTop < elementTop + elementHeight;

        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider
      {...settings}
      className={isVisible ? "carousel visible" : "carousel"}
      style={{ overflow: "hidden" }}
    >
      <AnimatedCard
        image={Dhimas}
        nama="Dhimas Adinata"
        job="Husler"
        univ="Universitas Ahmad Dahlan"
      />
      <AnimatedCard
        image={Ragil}
        nama="Ragil Tri Saputro"
        job="Hacker"
        univ="Universitas Alma Ata"
      />
      <AnimatedCard
        image={Decka}
        nama="Decka Apriyanti"
        job="Hacker"
        univ="Universitas Wanita Internasional"
      />
      <AnimatedCard
        image={Hendra}
        nama="M. Hendra Setiawan"
        job="Hipster"
        univ="Universitas IIB Darmajaya"
      />
      <AnimatedCard
        image={Rosalinda}
        nama="Rosalinda Gadiseli S"
        job="Hipster"
        univ="Universitas Methodist Indonesia"
      />
    </Slider>
  );
}

// Komponen panah navigasi untuk slider
const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow next" onClick={onClick}></div>;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow prev" onClick={onClick}></div>;
};

export default function CarouselTeam() {
  return (
    <div className="bg-[#F0FAF7] dark:bg-gray-800">
      <AnimatedTitle />
      <div className="container mx-auto flex justify-center items-center h-full pb-10">
        <div className="max-w-screen-lg md:w-[50%] w-[80%] lg:w-screen flex justify-center">
          <div className="lg:w-[30%] w-full" id="carousel-trigger">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
