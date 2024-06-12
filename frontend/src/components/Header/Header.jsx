import { useState, useEffect } from "react";
import { logoBrand } from "../../assets/image/logo/logoBrand";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../Darkmode/Darkmode";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  const handleRegisterClick = () => {
    navigate("/registrasi");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-[#F9FAFB] dark:bg-gray-800'} text-slate-900 dark:text-white xl:px-24 px-10 py-2 font-semibold text-lg`}>
      <div id="navbar-menu" className="flex justify-between lg:mx-4 items-center">
        <a href="/" className="flex font-Roboto justify-center items-center gap-1 text-xl">
          <img src={logoBrand} className="h-[60px]" alt="logobrand" />Diactivee
        </a>
        <ul className="hidden lg:flex gap-6 items-center">
          <li>
            <a href="#" className="font-Roboto font-normal hover:font-bold">Tutorial</a>
          </li>
          <li>
            <a href="#modul" className="font-Roboto font-normal hover:font-bold">Modul</a>
          </li>
          <li>
            <a href="#bootcamp" className="font-Roboto font-normal hover:font-bold">Bootcamp</a>
          </li>
          <li className="bg-[#F5F5F5] dark:bg-gray-700 hover:bg-slate-200 text-slate-700 dark:text-white rounded-md px-4 py-1 font-Roboto">
            <button onClick={handleLoginClick}>MASUK</button>
          </li>
          <li className="bg-[#22B286] hover:bg-[#10966e] text-white rounded-md px-4 py-1 font-Roboto">
            <button onClick={handleRegisterClick}>DAFTAR</button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <button 
          className="lg:hidden flex flex-col justify-evenly border border-[#20B486] w-8 h-8 rounded items-center"
          onClick={() => setIsMobileMenuOpen(previous => !previous)}
        >
          <div className="w-5/6 rounded h-[2px] bg-[#20B486]"></div>
          <div className="w-5/6 rounded h-[2px] bg-[#20B486]"></div>
          <div className="w-5/6 rounded h-[2px] bg-[#20B486]"></div>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="flex flex-col lg:hidden absolute top-[75px] left-0 bg-white dark:bg-gray-900 text-slate-900 dark:text-white min-h-screen w-full items-center text-lg font-semibold gap-4 py-6">
          <a href="#" className="font-Roboto font-normal hover:font-bold">Tutorial</a>
          <a href="#modul" className="font-Roboto font-normal hover:font-bold">Modul</a>
          <a href="#bootcamp" className="font-Roboto font-normal hover:font-bold">Bootcamp</a>
          <button className="bg-[#22B286] hover:bg-[#10966e] text-white px-4 py-2 rounded" onClick={handleRegisterClick}>DAFTAR</button>
          <button className="bg-[#F5F5F5] text-black dark:bg-gray-700 dark:text-white px-4 py-2 rounded" onClick={handleLoginClick}>MASUK</button>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
