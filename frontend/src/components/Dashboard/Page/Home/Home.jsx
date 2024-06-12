import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";


function Card({ icon, description, button }) {
  return (
    <div className="py-4 lg:flex flex-1">
      <div className="flex flex-col justify-center items-center rounded-2xl border-4 border-solid border-gray-100 bg-[#20B486] shadow-lg p-4 lg:mx-6 mx-2">
        {icon}
        <p className="font-Roboto text-center text-white mx-2 my-2">{description}</p>
        <button className="bg-white px-4 py-2 font-Roboto font-bold rounded-lg shadow-lg mb-2">{button}</button>
      </div>
    </div>
  );
}

export default function Home(){
    return(
        <>
        <div className="pt-8 px-8">
            <h1 className="font-Roboto font-semibold text-[20px] lg:text-[30px] mb-4">Selamat Datang di DIactivee</h1>
      <div className="flex flex-wrap justify-center lg:mt-10 lg:mb-20">
        <Card
          icon={<MdOutlineOndemandVideo className="text-[80px] mx-2 mt-2 text-white" />}
          description="Pelajari berbagai modul pembelajaran pemrograman yang telah kami siapkan untuk meningkatkan skill Anda."
          button="Lihat Modul"
        />
        <Card
          icon={<FaBook className="text-[80px] mx-2 mt-2 text-white" />}
          description="Ikuti langkah-langkah praktis dari tutorial kami untuk menguasai berbagai teknologi pemrograman."
          button="Lihat Tutorial"
        />
        <Card
          icon={<PiStudentBold className="text-[80px] mx-2 mt-2 text-white" />}
          description="Daftarkan diri Anda di bootcamp kami dan pelajari pemrograman secara intensif dan terstruktur."
          button="Lihat Bootcamp"
        />
      </div>
    </div>
        </>
    )
}
