import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

function Card({ icon, description, button, href }) {
  return (
    <div className="py-4 lg:w-1/3 md:w-1/2">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-100 bg-[#20B486] dark:border-blue-900 dark:bg-gradient-to-bl from-gray-900 via-blue-950 to-gray-900 shadow-lg p-4 mx-2 my-4">
        <div className="text-white text-6xl mb-4">{icon}</div>
        <p className="font-Roboto text-center text-white mx-2 my-2">
          {description}
        </p>
        <Link
          to={href}
          className="bg-white px-4 py-2 font-Roboto font-bold rounded-lg shadow-lg mt-2 text-center"
        >
          {button}
        </Link>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <div className="flex-1 pt-8 px-8">
        <h1 className="font-Roboto font-semibold text-2xl lg:text-4xl mb-4 text-black dark:text-white">
          Selamat Datang di Diactivee
        </h1>
        <div className="flex flex-wrap justify-center lg:mt-10">
          <Card
            icon={<MdOutlineOndemandVideo className="text-white" />}
            description="Pelajari berbagai modul pembelajaran pemrograman yang telah kami siapkan untuk meningkatkan skill Anda."
            button="Lihat Tutorial"
            href="/dashboard/tutorial"
          />
          <Card
            icon={<FaBook className="text-white" />}
            description="Ikuti langkah-langkah praktis dari tutorial kami untuk menguasai berbagai teknologi pemrograman."
            button="Lihat Modul"
            href="/dashboard/modul"
          />
          <Card
            icon={<PiStudentBold className="text-white" />}
            description="Daftarkan diri Anda di bootcamp kami dan pelajari pemrograman secara intensif dan terstruktur."
            button="Lihat Bootcamp"
            href="/dashboard/bootcamp"
          />
        </div>
      </div>
    </div>
  );
}
