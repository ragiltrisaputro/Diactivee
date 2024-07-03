import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { logoBrand } from "../../assets/image/logo/logoBrand";
import { fadeIn } from "../../variants";

function About({ title, image, description, title2, isVisible }) {
  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      variants={fadeIn("right", 0.5)}
      className="pt-20 md:ml-10 md:pt-24 xl:pt-24 pb-12"
      id="about-section"
    >
      <div className="mx-8 xl:px-10 xl:mx-8">
        <motion.h2
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeIn("right", 0.5)}
          className="text-2xl md:text-3xl font-bold font-Roboto text-black dark:text-white"
        >
          {title}
        </motion.h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <motion.div
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={fadeIn("right", 0.5)}
            className="w-full self-center px-8 lg:px-20 lg:w-1/2 flex items-center"
          >
            <motion.img
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              variants={fadeIn("right", 0.5)}
              src={image}
              alt="logo-deactivee"
              className="md:h-[120px] lg:h-[160px]"
            />
            <motion.span
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              variants={fadeIn("right", 0.5)}
              className="ml-4 text-2xl font-bold font-Roboto text-black dark:text-white"
            >
              <h1 className="text-3xl lg:text-4xl">Diactivee</h1>
            </motion.span>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={fadeIn("left", 0.5)}
            className="w-full self-end px-8 lg:w-1/2"
          >
            <div className="relative lg:m-9 lg:right-0">
              <motion.h1
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                variants={fadeIn("left", 0.5)}
                className="font-bold md:text-3xl text-2xl mb-4 font-Roboto text-white dark:text-white"
              >
                {title2}
              </motion.h1>
              <motion.h2
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                variants={fadeIn("left", 0.5)}
                className="md:text-xl font-Roboto font-normal text-justify text-black dark:text-white"
              >
                {description}
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Diactivee() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    const aboutElement = document.getElementById("about-section");

    if (aboutElement) {
      const elementTop = aboutElement.offsetTop;
      const elementHeight = aboutElement.offsetHeight;

      const isInView =
        scrollTop + windowHeight > elementTop &&
        scrollTop < elementTop + elementHeight;

      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <About
        title="About"
        image={logoBrand}
        title2="Diactive"
        description="Diactivee adalah platform revolusioner yang menawarkan pendidikan coding online untuk semua kalangan. 
                    Kami percaya bahwa setiap individu memiliki potensi untuk menjadi ahli dalam pemrograman komputer, 
                    dan Diactivee hadir untuk memastikan bahwa tidak ada batasan untuk belajar."
        isVisible={isVisible}
      />
    </div>
  );
}
