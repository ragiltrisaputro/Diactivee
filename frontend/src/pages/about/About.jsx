import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/Loading/Loading';
import Diactivee from '../../components/diactive/Diactive'; 
import CarouselTeam from '../../components/CarouselTeam/CarouselTeam';
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md"; 
import { IoMdGlobe } from "react-icons/io";
import { motion } from "framer-motion";

const fadeInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 1, delay } }
});

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerElement = document.getElementById("scroll-trigger");

      if (triggerElement) {
        const elementTop = triggerElement.offsetTop;
        const elementHeight = triggerElement.offsetHeight;
        const isInView = scrollTop + windowHeight > elementTop && scrollTop < elementTop + elementHeight;

        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Diactivee />
          <CarouselTeam />
          <div className='lg:flex overflow-x-hidden dark:bg-gray-900 dark:text-white'>
            <motion.div
              id="scroll-trigger"
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              variants={fadeInLeft()}
              className="my-10 md:ml-20 ml-8 lg:ml-20"
            >
              <h2 className='flex gap-2 font-Roboto font-normal my-1 '><MdOutlineLocationOn className='text-2xl' /> Daerah Istimewa Yogyakarta</h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              variants={fadeInLeft(0.2)}
              className="my-10 md:ml-20  ml-8 lg:ml-20"
            >
              <h2 className='flex gap-2 font-Roboto font-normal my-1 lg:py-0 py-2'><MdOutlineEmail className='text-2xl' />Diactivee@gmail.com</h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              variants={fadeInLeft(0.4)}
              className="my-10 md:ml-20  ml-8 lg:ml-20"
            >
              <h2 className='flex gap-2 font-Roboto font-normal my-1'><IoMdGlobe className='text-2xl' />www.Diactivee.com</h2>
            </motion.div>
          </div>
          <div className='bg-white dark:bg-gray-900'>
          <motion.div
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={fadeInLeft()}
            className="pl-8 pb-10 md:pl-20 lg:pl-20"
          >
            <h2 className='font-Roboto font-bold text-xl text-black dark:text-white'>POWERED BY :</h2>
            <motion.h2
              variants={fadeInLeft(0.2)}
              className='font-Roboto my-4 text-[#20B486] font-semibold'
            >
              Infinit Learning (PT.Kinema Systrans Multimedia)
            </motion.h2>
            <motion.h2
              variants={fadeInLeft(0.4)}
              className='font-Roboto text-[#20B486] font-semibold'
            >
              Studi Independen Bersertifikat Kampus Merdeka
            </motion.h2>
          </motion.div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
