'use client';

import React, { useEffect, useState } from 'react';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

const Langue: React.FC = () => {
    const changeLocale = useChangeLocale();
    const locale = useCurrentLocale();
    const [isOpen, setIsOpen] = useState(false);

    const handleLangChange = (lang: string) => {
        changeLocale(lang as "fr" | "en");
        setIsOpen(false);
    };
    const [libelleLocale, setLibelleLocale] = useState<string>('');
    useEffect(() => {
        if (locale == "fr") {
            setLibelleLocale("Français");
        } else if (locale == "en") {
            setLibelleLocale("English");
        }
    }, [locale]);
    return (
        <div className="relative inline-block text-left group">
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="flex w-full rounded-md bg-[#f8715b] text-white border-0 h-10 px-1"
            >
                <div className='flex items-center text-[12px] md:text-[16px] justify-between hover:bg-[#f79383] px-2 transition cursor-pointer w-32 my-1'>
                    <span className='pr-1'>{libelleLocale}</span>
                    <img src={`images/${locale}.png`} alt={locale} className="h-5 w-6 mr-1" />
                </div>
            </button>

            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute right-0 z-10 w-36 rounded-md shadow-lg"
                >
                    <div className="bg-gray-800 mt-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button onClick={() => handleLangChange('fr')} className="w-full px-2 text-[12px] md:text-[16px] flex items-center justify-between py-2 text-gray-200 hover:bg-[#000000]">
                            <span className='pr-1'>Français</span>
                            <img src="images/fr.png" alt="Français" className="h-5 px-3" />
                        </button>
                        <button onClick={() => handleLangChange('en')} className="w-full px-2 text-[12px] md:text-[16px] flex items-center justify-between py-2 text-gray-200 hover:bg-[#000000]">
                            <span className='pr-1'>English</span>
                            <img src="images/en.png" alt="English" className="h-5 px-3" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Langue;