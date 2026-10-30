import React from "react";
// Icons
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaCloudSun,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNestjs, SiPhp, SiPostgresql } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { getI18n } from "@/locales/serveur";
import { Contact } from "./contact";
import { DiPhotoshop } from "react-icons/di";
import Link from "next/link";
const Main = async () => {
  const t = await getI18n();

  return (
    <main className="w-full max-w-[1468px] flex flex-col text-gray-200 text-lg">
      {/* Home */}
      <section
        id="home"
        className="w-full flex flex-col md:flex-row justify-between items-center pt-10 container-padding"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-semibold text-3xl md:text-6xl">{t("hello")}</h1>
          <h1 className="text-xl md:text-4xl mt-10 md:mt-28">
            {t("name")} Lolys KAFACK
          </h1>
          <h2 className="font-semibold text-2xl md:text-5xl mt-5">
            {t("title")}
          </h2>
          <ul className="flex md:flex-wrap  items-center gap-x-2 md:gap-x-6 mt-6">
            <li>
              <a
                href="https://github.com/KafackLolys"
                className="flex items-center gap-2 text-[#D8DBE3] hover:text-white hover:bg-[#f8715b] duration-300 p-2 rounded"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lolys-chavet-kafack-0640752aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B3xpUw9zcRIOSCS5hrkMT7Q%3D%3D"
                className="flex items-center gap-2 text-[#D8DBE3] hover:text-white hover:bg-[#f8715b] duration-300 p-2 rounded"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61584820032966"
                className="flex items-center gap-2 text-[#D8DBE3] hover:text-white hover:bg-[#f8715b] duration-300 p-2 rounded"
              >
                <FaFacebookSquare /> Facebook
              </a>
            </li>
          </ul>
        </div>
        <img
          src="images/user-1.png"
          alt="KAFACK Lolys"
          className="w-full md:flex-1 md:max-w-[500px] h-auto lg:max-w-[40%]"
        />
      </section>
      {/* About */}
      <section id="about" className="w-full container-padding pt-20 md:pt-44">
        <h2 className="font-semibold text-2xl md:text-5xl">{t("about_me")}</h2>
        <p className="mt-6 md:mt-10 text-base md:text-xl text-[#D8DBE3]">
          {t("about_description")}
        </p>
        <h3 className="font-semibold text-lg md:text-3xl mt-5">
          {t("skills")}
        </h3>
        <ul className="list-disc pl-5 mt-3 text-base md:text-xl">
          <li className="flex items-center text-[#D8DBE3]">
            <FaHtml5 className="mr-1" />
            HTML, <FaCss3Alt className="ml-2 mr-1" />
            CSS
          </li>
          <li className="flex items-center text-[#D8DBE3]">
            <IoLogoJavascript className="mr-1" />
            JavaScript, <SiPhp className="mr-1 ml-2" />
            PHP
          </li>
          <li className="flex items-center text-[#D8DBE3]">
            <FaReact className="mr-1" />
            React JS,{" "}
            <img
              src="images/nextjs-icon.webp"
              alt="Next JS"
              className="ml-2 w-5 mr-1"
            />{" "}
            Next JS
          </li>
          <li className="flex items-center text-[#D8DBE3]">
            <FaLaravel />
            Laravel , <SiNestjs className="ml-2 mr-1" />
            Nest js, <FaCloudSun className="ml-2 mr-1" /> API REST
          </li>
          <li className="flex items-center text-[#D8DBE3]">
            <TbBrandMysql className="mr-1" />
            MySQL,{" "}
            <img
              src="images/access.png"
              alt="MS Access"
              className="ml-2 w-5 mr-1"
            />{" "}
            MS Access, <SiPostgresql className="ml-2 w-5 mr-1" /> PostgreSQL
          </li>
          <li className="flex items-center text-[#D8DBE3]">
            <FaGitAlt className="mr-1 w-5" /> Git,{" "}
            <FaGithub className="mr-1 ml-2" />
            GitHub
          </li>
          <li className="flex items-center text-[#D8DBE3]">
            <DiPhotoshop className="mr-1 w-5" /> Photoshop
          </li>
        </ul>
      </section>
      {/* Projects */}
      <section
        id="projects"
        className="w-full container-padding pt-10 md:pt-20"
      >
        <h2 className="font-semibold text-2xl md:text-5xl">{t("projects")}</h2>
        <p className="mt-6 md:mt-10 text-base md:text-xl text-[#D8DBE3]">
          {t("projects_description")}
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mt-6 md:mt-10">
          <article className="bg-[#f8705b44] p-4 md:p-5 rounded-lg">
            <h3 className="text-lg md:text-2xl font-semibold">
              {t("task_manager.title")}
            </h3>
            <p className="text-base md:text-lg">
              {t("task_manager.description")}
            </p>
            <p className="mt-2 text-base md:text-lg">
              <strong className="font-semibold">
                {t("technologies_used")}
              </strong>{" "}
              {t("task_manager.techs")}
            </p>
            <a
              href=""
              target="_blank"
              className="bg-[#f8715b] text-white flex items-center p-2 w-44 justify-center rounded mt-4 hover:bg-[#f8715b] duration-300"
            >
              {t("view_project")}
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 md:ml-3"
              >
                <path
                  d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </article>

          <article className="bg-[#f8705b44] p-5 rounded-lg">
            <h3 className="text-lg md:text-2xl font-semibold">
              {t("portfolio.title")}
            </h3>
            <p className="text-base md:text-lg">{t("portfolio.description")}</p>
            <p className="mt-2 text-base md:text-lg">
              <strong className="font-semibold">
                {t("technologies_used")}
              </strong>{" "}
              {t("portfolio.techs")}
            </p>
            <Link
              href="https://portfolio-lolys-5o7kubh4i-lolys1.vercel.app"
              className="bg-[#f8715b] text-white flex items-center p-2 w-44 justify-center rounded mt-4 hover:bg-[#f8715b] duration-300"
            >
              {t("view_project")}
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 md:ml-3"
              >
                <path
                  d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z"
                  fill="#ffffff"
                />
              </svg>
            </Link>
          </article>

          <article className="bg-[#f8705b44] p-5 rounded-lg">
            <h3 className="text-lg md:text-2xl font-semibold">
              {t("blog.title")}
            </h3>
            <p className="text-base md:text-lg">{t("blog.description")}</p>
            <p className="mt-2 text-base md:text-lg">
              <strong className="font-semibold">
                {t("technologies_used")}
              </strong>{" "}
              {t("blog.techs")}
            </p>
            <a
              href="/weather-report"
              target="_blank"
              className="bg-[#f8715b] text-white flex items-center p-2 w-44 justify-center rounded mt-4 hover:bg-[#f8715b] duration-300"
            >
              {t("view_project")}
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 md:ml-3"
              >
                <path
                  d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </article>
        </div>
      </section>
      {/* Contact */}
      <Contact />
    </main>
  );
};

export default Main;
