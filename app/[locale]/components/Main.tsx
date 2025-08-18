import React from "react";
// Icons
import { FaGithub, FaLinkedin, FaFacebookSquare, FaHtml5, FaCss3Alt, FaReact, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { getI18n } from "@/locales/serveur";

const Main = async () => {
    const t = await getI18n();
    return (
        <main className="w-full max-w-[1468px] flex flex-col text-gray-200 text-lg">
            {/* Home */}
            <section id="home" className="w-full flex flex-col md:flex-row justify-between items-center pt-10 px-5 md:px-[10%]">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="font-semibold text-3xl md:text-6xl">{t("hello")}</h1>
                    <h1 className="text-xl md:text-4xl mt-10 md:mt-28">{t("name")} KAFACK Lolys</h1>
                    <h2 className="font-semibold text-2xl md:text-5xl mt-5">{t("title")}</h2>
                    <ul className="flex md:flex-wrap  items-center gap-x-2 md:gap-x-6 mt-6">
                        <li><a href="" className="flex items-center gap-2 text-[#D8DBE3] hover:text-white hover:bg-[#f8715b] duration-300 p-2 rounded"><FaGithub /> GitHub</a></li>
                        <li><a href="" className="flex items-center gap-2 text-[#D8DBE3] hover:text-white hover:bg-[#f8715b] duration-300 p-2 rounded"><FaLinkedin /> LinkedIn</a></li>
                        <li><a href="" className="flex items-center gap-2 text-[#D8DBE3] hover:text-white hover:bg-[#f8715b] duration-300 p-2 rounded"><FaFacebookSquare /> Facebook</a></li>
                    </ul>
                </div>
                <img src="images/user.png" alt="KAFACK Lolys" className="w-full md:flex-1 md:max-w-[600px] h-auto" />
            </section>
            {/* About */}
            <section id="about" className="w-full px-4 md:px-[10%] pt-20 md:pt-44">
                <h2 className="font-semibold text-2xl md:text-5xl">À propos de moi</h2>
                <p className="mt-6 md:mt-10 text-base md:text-xl text-[#D8DBE3]">Passionné par le développement web, j'ai acquis des compétences solides en tant que développeur full stack. J'aime créer des applications web interactives et dynamiques qui améliorent l'expérience utilisateur.</p>
                <h3 className="font-semibold text-lg md:text-3xl mt-5">Compétences</h3>
                <ul className="list-disc pl-5 mt-3 text-base md:text-xl">
                    <li className="flex items-center text-[#D8DBE3]"><FaHtml5 className="mr-1" />HTML, <FaCss3Alt className="ml-2 mr-1" />CSS, <IoLogoJavascript className="ml-2 mr-1" />JavaScript</li>
                    <li className="flex items-center text-[#D8DBE3]"><FaReact className="mr-1" />React JS, <img src="images/nextjs-icon.webp" alt="Next JS" className="ml-2 w-5 mr-1" /> Next JS</li>
                    <li className="flex items-center text-[#D8DBE3]"><SiPhp className="mr-1" />PHP, <FaLaravel className="ml-2 mr-1" />Laravel</li>
                    <li className="flex items-center text-[#D8DBE3]"><TbBrandMysql className="mr-1" />MySQL, <img src="images/access.png" alt="MS Access" className="ml-2 w-5 mr-1" /> MS Access</li>
                    <li className="flex items-center text-[#D8DBE3]"><FaGithub className="mr-1" />GitHub</li>
                </ul>
            </section>
            {/* Projects */}
            <section id="projects" className="w-full px-4 md:px-[10%] pt-10 md:pt-20">
                <h2 className="font-semibold text-2xl md:text-5xl">Projets</h2>
                <p className="mt-6 md:mt-10 text-base md:text-xl text-[#D8DBE3]">Voici quelques-uns de mes projets :</p>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mt-6 md:mt-10">
                    <article className="bg-[#f8705b44] p-4 md:p-5 rounded-lg">
                        <h3 className="text-lg md:text-2xl font-semibold">Gestionnaire de Tâches</h3>
                        <p className="text-base md:text-lg">Application web pour gérer vos tâches quotidiennes, avec une interface utilisateur intuitive.</p>
                        <p className="mt-2 text-base md:text-lg"><strong className="font-semibold">Technologies utilisées :</strong> React, Node.js, MongoDB</p>
                        <a href="" target="_blank" className="bg-[#f8715b] text-white flex items-center p-2 w-44 justify-center rounded mt-4 hover:bg-[#f8715b] duration-300">Voir le projet
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 md:ml-3">
                                <path d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z" fill="#ffffff" />
                            </svg>
                        </a>
                    </article>

                    <article className="bg-[#f8705b44] p-5 rounded-lg">
                        <h3 className="text-lg md:text-2xl font-semibold">Portfolio Personnel</h3>
                        <p className="text-base md:text-lg">Mon propre portfolio où je présente mes projets et compétences.</p>
                        <p className="mt-2 text-base md:text-lg"><strong className="font-semibold">Technologies utilisées :</strong> HTML, CSS, JavaScript</p>
                        <a href="" target="_blank" className="bg-[#f8715b] text-white flex items-center p-2 w-44 justify-center rounded mt-4 hover:bg-[#f8715b] duration-300">Voir le projet
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 md:ml-3">
                                <path d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z" fill="#ffffff" />
                            </svg>
                        </a>
                    </article>

                    <article className="bg-[#f8705b44] p-5 rounded-lg">
                        <h3 className="text-lg md:text-2xl font-semibold">Blog de Développement</h3>
                        <p className="text-base md:text-lg">Un blog où je partage des tutoriels et articles sur le développement web.</p>
                        <p className="mt-2 text-base md:text-lg"><strong className="font-semibold">Technologies utilisées :</strong> Django, PostgreSQL</p>
                        <a href="" target="_blank" className="bg-[#f8715b] text-white flex items-center p-2 w-44 justify-center rounded mt-4 hover:bg-[#f8715b] duration-300">Voir le projet
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 md:ml-3">
                                <path d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z" fill="#ffffff" />
                            </svg>
                        </a>
                    </article>
                </div>
            </section>
            {/* Contact */}
            <section id="contact" className="w-full px-4 md:px-[10%] py-10 md:py-20">
                <div className="flex flex-col md:flex-row gap-6 mt-10">
                    <form className="flex flex-col gap-y-4 w-full md:w-1/2">
                        <h2 className="font-semibold text-2xl md:text-5xl">Contact</h2>
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" className="border-b-2 border-gray-300 p-2 rounded bg-[#f8705b13] text-base md:text-lg" />

                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" className="border-b-2 border-gray-300 p-2 rounded bg-[#f8705b13] text-base md:text-lg" />

                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" className="border-b-2 border-gray-300 p-2 rounded bg-[#f8705b13] text-base md:text-lg" />

                        <button type="submit" className="bg-[#f8715b] text-white flex p-2 w-44 items-center justify-center rounded mt-4 hover:bg-[#f8715b] duration-300">Envoyer <IoIosMail className="ml-2" /></button>
                    </form>
                    <span className="flex-1 bg-gray-800 p-4 text-white">
                        <img src="images/contact.jpg" alt="Contact" className="w-full h-auto" />
                        <p className="text-center text-base md:text-lg">Email : lolyskafack@yahoo.com</p>
                    </span>
                </div>
            </section>
        </main>
    );
};

export default Main;