"use client";

import "./style.css";

import { Locales } from "@locales/next-i18next.config";
import { useLanguage } from "@stores/hooks";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [language, currentLocalizations, upgradeLanguage] = useLanguage();
  const switchLanguage = async () => {
    upgradeLanguage({
      language: language === Locales.EN ? Locales.ZH : Locales.EN,
    });
  };

  return (
    <motion.nav
      layout
      className={`navbar fixed top-0 z-50 w-screen justify-around items-start`}
    >
      {/* Home */}
      <motion.div className="flex-1 px-1 pt-1">
        <Link href={`/`} className="flex flex-col justify-center items-center font-bold">
          <Image
            src="/images/home.svg"
            alt="Home"
            quality={100}
            width={64}
            height={64}
            className="w-[36px] h-auto"
          />
          {currentLocalizations?.nav?.home}
        </Link>
      </motion.div>
      {/* Link */}
      <ul className="menu menu-horizontal text-sm p-0 m-0">
        <li>
          <Link href={`/cooking-plan`} className="flex flex-col items-center">
            <Image
              src="/images/calendar.svg"
              alt="Cooking Plan"
              quality={100}
              width={32}
              height={32}
              className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
            />
            {currentLocalizations?.nav?.cookingPlan}
          </Link>
        </li>
        <li>
          <Link href={`/status`} className="flex flex-col items-center">
            <Image
              src="/images/check_ok.svg"
              alt="Status"
              width={32}
              height={32}
              quality={100}
              className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
            />
            {currentLocalizations?.nav?.status}
          </Link>
        </li>
        <li>
          <Link href="#" onClick={switchLanguage} className="flex flex-col items-center">
            <Image
              src="/images/bee.svg"
              alt="bee"
              width={32}
              height={32}
              quality={100}
              className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
            />
            {currentLocalizations?.nav?.switchLanguage}
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
