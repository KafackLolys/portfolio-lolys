"use client";

import React from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Langue: React.FC = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleLangChange = (lang: string) => {
    changeLocale(lang as "fr" | "en");
  };

  return (
    <Select value={locale} onValueChange={handleLangChange}>
      <SelectTrigger className="w-[140px] w-full rounded-md bg-[#f8715b] text-white border-0 h-10 hover:bg-[#f79383] transition focus:ring-0 focus:ring-offset-0 px-3 py-2 text-[12px] md:text-[16px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-[140px]">
        <SelectItem
          value="fr"
          className="flex items-center justify-between gap-2 w-full h-10"
        >
          <span>Français</span>
          <img
            src="images/fr.png"
            alt="Français"
            className="h-5 w-auto ml-auto"
          />
        </SelectItem>
        <SelectItem
          value="en"
          className="flex items-center justify-between gap-2 w-full h-10"
        >
          <span>English</span>
          <img src="images/en.png" alt="English" className="h-5 w-auto" />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Langue;
