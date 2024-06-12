import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import { Php } from "../../assets/image/Cover/butcamp/php";
import { WebDeveloper } from "../../assets/image/Cover/butcamp/webdeveloper";

function WebinarCard({ title, date, time, image, link }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gradient-to-bl from-gray-900 via-blue-950 to-gray-900  rounded-xl overflow-hidden shadow-lg dark:border-2 dark:border-blue-800">
      <img className="w-full h-44 object-cover object-center" src={image} alt={title} /> 
      <div className="p-6 font-Roboto">
        <h2 className="font-bold text-xl mb-2 text-black dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-200 text-base ">Tanggal : {date}</p>
        <p className="text-gray-700 dark:text-gray-200 text-base mb-4">Waktu : {time}</p>
        <Link to={link} className="bg-[#22B286] dark:bg-gray-200 dark:text-black dark:hover:bg-white hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg">
          Register
        </Link>
      </div>
    </div>
  );
}

export default function CardBootcamp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePhp, setIsVisiblePhp] = useState(false);
  const [isVisibleWebDev, setIsVisibleWebDev] = useState(false);
  const triggerRefPhp = useRef(null);
  const triggerRefWebDev = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observerPhp = new IntersectionObserver(
      ([entry]) => {
        setIsVisiblePhp(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observerPhp.observe(triggerRefPhp.current);

    const observerWebDev = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleWebDev(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observerWebDev.observe(triggerRefWebDev.current);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(triggerRef.current);

    return () => {
      observerPhp.disconnect();
      observerWebDev.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <div id="bootcamp" className="bg-[#F0FAF7] dark:bg-gray-800 pt-4 pb-20 overflow-hidden">
      <motion.div 
        id="scroll-trigger"
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -100 },
          show: { opacity: 1, x: 0, transition: { duration: 1 } }
        }}
        ref={triggerRef}
        className="mx-4 pt-10 lg:ml-28"
      >
        <h3 className="text-[#1A906B] text-[16px] font-semibold font-Roboto lg:mb-4 md:mb-4">Explore Programs</h3>
      </motion.div>
      <motion.div 
        id="scroll-trigger"
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -100 },
          show: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }
        }}
        ref={triggerRef}
        className="mx-4 lg:ml-28"
      >
        <h2 className="text-[#101828] dark:text-white font-Roboto font-bold text-2xl lg:text-[40px] lg:mb-2 md:mb-2">Kelas Bootcamp</h2>
      </motion.div>
      <motion.div 
        id="scroll-trigger"
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -100 },
          show: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }
        }}
        ref={triggerRef}
        className="mx-4  lg:ml-28"
      >
        <p className="text-[#667085] dark:text-gray-200 text-[16px] lg:text-[20px] font-Roboto mb-8">Mari bergabung dengan kelas terkenal kami, pengetahuan yang diberikan pasti akan berguna untuk Anda.</p>
      </motion.div>
      
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:gap-10 mx-4 lg:mx-80">
        <motion.div
          initial="hidden"
          animate={isVisiblePhp ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
          }}
          ref={triggerRefPhp}
        >
          <WebinarCard
            title="Menyelami Dunia PHP"
            date="17, Juni 2024"
            time="11:00 AM - 12:00 PM"
            image={Php}
            link="/bootcamp-php"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisibleWebDev ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
          }}
          ref={triggerRefWebDev}
        >
          <WebinarCard
            title="Web Developer Profesional"
            date="5 Mei - 8 Oktober 2024"
            time="2:00 PM - 4:00 PM"
            image={WebDeveloper}
            link="/bootcamp-web-developer"
          />
        </motion.div>
      </div>
    </div>
  );
}


