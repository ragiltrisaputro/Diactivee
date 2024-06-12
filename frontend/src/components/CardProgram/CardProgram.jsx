import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

function Card({ icon, title, description }) {
  return (
    <div className="rounded-2xl border-4 border-solid border-gray-100 dark:border-blue-900 dark:bg-gradient-to-bl from-gray-900  via-blue-950 to-gray-900 bg-[#4AC8AE] shadow-lg p-4 lg:mx-6 mx-2 mt-4">
      {icon}
      <h3 className="text-2xl text-white font-Roboto font-bold mx-2 py-2">{title}</h3>
      <p className="font-Roboto text-white mx-2 mb-2">{description}</p>
    </div>
  );
}

export default function CardProgram() {
  const [isVisible, setIsVisible] = useState(false);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById("card-program"));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls1.start({ opacity: 1, x: 0 });
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, x: -50 });
      controls2.start({ opacity: 0, y: 50 });
    }
  }, [isVisible, controls1, controls2]);

  return (
    <div id="card-program" className="pt-4 pb-10 px-8 lg:px-28 lg:pt-2 bg-white dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={controls1}
        transition={{ duration: 0.5 }}
        className="font-Roboto my-2 font-bold text-center text-[18px] text-[#20B486]"
      >
        Program Diactivee
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        transition={{ duration: 0.5 }}
        className="text-center font-Roboto font-semibold text-[20px] lg:text-[30px] mb-4 text-black dark:text-white"
      >
        Menciptakan lingkungan belajar yang nyaman dan menarik
      </motion.h1>

      <div className="lg:flex">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls1}
          transition={{ duration: 0.5 }}
        >
          <Card 
            icon={<MdOutlineOndemandVideo className="text-[45px] mx-2 mt-2 text-white" />}
            title="Tutorial"
            description="Pembelajaran melalui tutorial langkah praktis, mudah dipahami, dan memungkinkan belajar mandiri."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls2}
          transition={{ duration: 1 }}
        >
          <Card
            icon={<FaBook className="text-[45px] mx-2 mt-2 text-white" />}
            title="Modul"
            description="Pembelajaran melalui modul struktur terarah praktis, mudah dan fleksibel untuk belajar mandiri."
          />
        </motion.div>
          
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={controls1}
          transition={{ duration: 1.5 }}
        >
          <Card
            icon={<PiStudentBold className="text-[45px] mx-2 mt-2 text-white" />}
            title="Bootcamp"
            description="Pembelajaran melalui tutorial langkah praktis, mudah dipahami, dan memungkinkan belajar mandiri."
          />
        </motion.div>
      </div>
    </div>
  );
}
