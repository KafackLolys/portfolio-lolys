import { getScopedI18n } from "@/locales/serveur";

const Footer = async () => {
  const t = await getScopedI18n("home");
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-gray-900 py-6">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#home"
              className="hover:underline hover:text-[#f8715b] transition duration-300 text-[#D8DBE3]"
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline hover:text-[#f8715b] transition duration-300 text-[#D8DBE3]"
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline hover:text-[#f8715b] transition duration-300 text-[#D8DBE3]"
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline hover:text-[#f8715b] transition duration-300 text-[#D8DBE3]"
            >
              {t("contact")}
            </a>
          </li>
        </ul>
      </nav>
      <p className="mt-4 text-[#D8DBE3]">{t("all_rights_reserved")}</p>
    </footer>
  );
};

export default Footer;
