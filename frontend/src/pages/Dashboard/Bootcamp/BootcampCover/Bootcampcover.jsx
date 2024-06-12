import React from "react";
import { Link } from "react-router-dom"; 
import { Php } from "../../../../assets/image/Cover/butcamp/php";
import { WebDeveloper } from "../../../../assets/image/Cover/butcamp/webdeveloper";

function WebinarCard({ title, date, time, image, link }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg md:max-w-2xl">
      <img className="w-full h-44 object-cover object-center" src={image} alt={title} /> 
      <div className="p-6 font-Roboto">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">Tanggal : {date}</p>
        <p className="text-gray-700 text-base mb-4">Waktu : {time}</p>
        <Link to={link} className="bg-[#22B286] hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg">
          Register
        </Link>
      </div>
    </div>
  );
}

export default function CoverBootcamp() {
  return (
    <div className="bg-white mb-6 pb-12">
      <div className="mx-5 mt-5 mb-5 lg:mb-10">
        <h2 className="text-[#22B286] font-Roboto font-bold text-2xl lg:text-[40px] lg:mb-2 md:mb-2">Kelas Bootcamp</h2>
        <p className="text-[#667085] text-[16px] lg:text-[20px] font-Roboto mb-8">Daftarkan diri Anda di bootcamp kami dan pelajari pemrograman secara intensif dan terstruktur.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WebinarCard
          title="Menyelami Dunia PHP"
          date="17, Juni 2024"
          time="11:00 AM - 12:00 PM"
          image={Php}
          link="/dashboard/bootcamp/php"
        />
        <WebinarCard
          title="Web Developer Profesional"
          date="5 Mei - 8 Oktober 2024"
          time="2:00 PM - 4:00 PM"
          image={WebDeveloper}
          link="/bootcamp-web-developer" 
        />
      </div>
    </div>
  );
}

