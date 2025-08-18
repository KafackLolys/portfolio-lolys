"use client";
import React, { useEffect, useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { useTranslation } from 'next-i18next';
import Langue from "./Langue";

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { t } = useTranslation();
  return (
    <header className="w-full">
      <div className={`w-full max-w-[1468px] flex justify-between items-center py-4 pl-4 pr-4 md:pl-10 md:pr-6 text-gray-200 ${isFixed ? 'fixed top-0 left-0 z-50 bg-[#00000053] backdrop-blur-lg rounded-b-xl' : ''}`}>
        <a href="#home" className="font-semibold text-xl hover:text-white transition duration-300">Tech KLC</a>
        {/* Menu desktop */}
        <nav className="hidden md:flex gap-x-6">
          <a href="#about" className="flex items-center gap-2 text-[12px] md:text-[16px] font-medium hover:text-white hover:bg-[#f8715b] transition duration-300 p-2 rounded"><BsInfoCircleFill /> {t("about")}</a>
          <a href="#projects" className="flex items-center gap-2 text-[12px] md:text-[16px] font-medium hover:text-white hover:bg-[#f8715b] transition duration-300 p-2 rounded"><FaProjectDiagram /> {t("projects")}</a>
          <a href="#contact" className="flex items-center gap-2 text-[12px] md:text-[16px] font-medium hover:text-white hover:bg-[#f8715b] transition duration-300 p-2 rounded"><BiSolidContact /> {t("contact")}</a>
          <Langue />
        </nav>
        {/* Menu mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
      </div>
      {/* Sidebar mobile avec transition */}
        <div
          className={`fixed inset-0 z-50 flex md:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          {/* Overlay noir avec transition d'opacité */}
          <div
            className={`bg-[#00000076] absolute inset-0 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMenuOpen(false)}
          />
          {/* Sidebar glissante */}
          <aside
            className={`w-4/5 max-w-xs h-full bg-[#00000053] backdrop-blur-lg text-white flex flex-col items-center justify-start pt-20 transition-transform duration-300 ease-in-out fixed right-0 top-0 z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              className="absolute top-6 right-6 p-2"
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20"><path d="M6 6l8 8M6 14L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
            <nav className="flex flex-col gap-8 text-xl mt-12">
              <a href="#about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 font-medium hover:text-[#f8715b] transition"><BsInfoCircleFill /> {t("about")}</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 font-medium hover:text-[#f8715b] transition"><FaProjectDiagram /> {t("projects")}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 font-medium hover:text-[#f8715b] transition"><BiSolidContact /> {t("contact")}</a>
              <div className="flex justify-center"><Langue /></div>
            </nav>
          </aside>
        </div>
    </header>
  );
};

export default Header;