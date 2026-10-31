"use client";
import { FormEvent } from "react";
import { IoIosMail } from "react-icons/io";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import toast from "react-hot-toast";

export function Contact() {
  const t = useScopedI18n('home')
  const currentLocale = useCurrentLocale();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      locale: currentLocale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: { message?: string; error?: string } = await res.json();

      if (result.message) {
        toast.success(result.message);
      } else {
        toast.error(result.error || "Erreur");
      }
    } catch (err) {
      toast.error("Erreur réseau");
    }
  };
  return (
    <section id="contact" className="w-full px-4 md:px-[10%] py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 w-full md:w-1/2"
        >
          <h2 className="font-semibold text-2xl md:text-5xl">{t("contact")}</h2>
          <label htmlFor="name">{t("contact_name")}</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="border-b-2 border-gray-300 p-2 rounded bg-[#f8705b13] text-base md:text-lg"
          />

          <label htmlFor="email">{t("contact_email")}</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="border-b-2 border-gray-300 p-2 rounded bg-[#f8705b13] text-base md:text-lg"
          />

          <label htmlFor="message">{t("contact_message")}</label>
          <textarea
            required
            id="message"
            name="message"
            className="border-b-2 border-gray-300 p-2 rounded bg-[#f8705b13] text-base md:text-lg"
          />

          <button
            type="submit"
            className="bg-[#f8715b] text-white flex p-2 w-44 items-center justify-center rounded mt-4 hover:bg-[#f8715b] duration-300"
          >
            {t("send")} <IoIosMail className="ml-2" />
          </button>
        </form>
        <span className="flex-1 bg-gray-800 p-4 text-white">
          <img
            src="images/contact.jpg"
            alt="Contact"
            className="w-full h-auto"
          />
          <p className="text-center text-base md:text-lg">{t("email")}</p>
        </span>
      </div>
    </section>
  );
}
