import React from "react";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center bg-gray-900 py-6">
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline hover:text-[#f8715b] transition duration- text-[#D8DBE3]">Accueil</a></li>
                    <li><a href="#projects" className="hover:underline hover:text-[#f8715b] transition duration-300 text-[#D8DBE3]">Projets</a></li>
                    <li><a href="#about" className="hover:underline hover:text-[#f8715b] transition duration-300 text-[#D8DBE3]">À propos</a></li>
                    <li><a href="#contact" className="hover:underline hover:text-[#f8715b] transition duration-300 text-[#D8DBE3]">Contact</a></li>
                </ul>
            </nav>
            <p className="mt-4 text-[#D8DBE3]">© 2025 Tech KLC. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;