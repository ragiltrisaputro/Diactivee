import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer"; 
import CardProgram from "../../components/CardProgram/CardProgram";
import { ImgLandingPage } from "../../assets/image/logo/LandingPage/ImgLandingPage";
import { WebDev } from "../../assets/image/logo/LandingPage/WebDev";
import { Lingkaran } from "../../assets/image/logo/LandingPage/Lingkaran";
import CarouselModul from "../../components/Carousel Modul/CarouselModul";
import CardBootcamp from "../../components/CardBootcamp/CardBootcamp";
import Loading from "../../components/Loading/Loading"; 

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <Header />
        <div class="pt-28 md:pt-36 flex justify-center items-center bg-white dark:bg-gray-900 h-screen">
            <div class="container mx-auto">
              <div class="flex flex-wrap">
                <div class="w-full self-center px-4 lg:w-1/2 relative">
                  <h1 className="font-semibold text-primary lg:text-[40px] md:text-[40px] lg:px-20 font-Roboto text-[22px] dark:text-white">Belajar Diactivee <span className="text-[#20B486]">Aja</span> <span class="block text-dark lg:my-2 lg:text-4xl"> <span className="text-[#20B486]">Upgrade skill kamu </span>di sini</span>Bersama <span className="text-[#20B486]">Komunitas yang</span> seru</h1>
                  <h1 className="font-Roboto text-[#646464] dark:text-gray-400 text-justify text-sm lg:text-lg lg:ml-20 lg:my-6 ">Tingkatkan Kemampuan Pemrograman Anda di Diactivee. Belajar dengan pendekatan 
                      modern dan materi inovatif untuk mengasah keterampilan Anda.</h1>
                  <div className="absolute top-0 ml-[-10px] md:ml-[-40px]">
                    <img src={Lingkaran} alt="variasi" className="h-44 lg:h-full md:h-72" />
                  </div>
                  <div className="lg:py-2 md:py-8 lg:px-16 py-4 ml-[-15px] lg:ml-2">
                    <button class="bg-[#22B286] opacity-90 hover:bg-[#10966e] text-white font-Roboto font-normal py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 rounded-lg border-4 border-[#209872] mx-4">
                    <a href="/login">Mulai Sekarang</a> 
                    </button>
                    <button class="bg-[#EAFFF9] opacity-80 hover:bg-[#EAFFF9] text-[#6DDAB8] font-Roboto font-normal py-1 px-2 rounded-lg border-4 border-[#EAFFF9]  hover:text-[#209872]">
                      <a href="https://wa.me/6289623491166" target="_blank">Tanyakan</a>
                    </button>
                  </div>
                  <div className="flex md:py-2 px-2 gap-4 lg:px-20 lg:my-4 font-Roboto font-bold">
                    <a href="#" className="flex gap-2 text-sm lg:text-xl text-[#FFBD12]"><img src={WebDev} className="h-6 lg:h-8" alt="" />Web Developer</a>
                    <a href="#" className="flex gap-2 text-sm lg:text-xl text-[#FFBD12]"><img src={WebDev} className="h-6 lg:h-8" alt="" />Mobile Developer</a>
                  </div>
                </div>
                <div class="w-full self-end px-8 lg:w-1/2">
                  <div class="relative mt-8 ml-[-35px] lg:ml-[10px] lg:mt-[-25px]">
                    <img src={ImgLandingPage} alt="pemrograman" />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <CardProgram />
        <CardBootcamp />
        <CarouselModul />
        <Footer />
        </>
      )}
    </>
  );
}
