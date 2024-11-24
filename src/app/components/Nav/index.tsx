"use client";

import { getLocalizations } from "@locales/localization";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Nav({ lang }: { lang: string }) {
  const [visible, setVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [currentLocalizations, setCurrentLocalizations] =
    useState<Record<string, Record<string, string> | undefined>>();

  const handleScroll = useCallback(() => {
    const currentScrollPos = document.documentElement.scrollTop;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (lang)
      getLocalizations(lang).then((localizations) => {
        setCurrentLocalizations(localizations);
      });
  }, [lang]);
  return (
    <nav
      className={`fixed transition-transform duration-300 glass z-50 w-full ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="menu menu-horizontal md:menu-vertical md:gap-5 flex justify-center items-center">
        <li>
          <Link href={`/`}>
            <Image
              src="/images/home.svg"
              alt="Home"
              quality={100}
              width={24}
              height={24}
              className="w-[18px] h-[18px] md:w-[32px] md:h-[32px]"
            />
            {currentLocalizations?.nav?.home}
          </Link>
        </li>
        <li>
          <Link href={`/cooking-plan`}>
            <Image
              src="/images/calendar.svg"
              alt="Cooking Plan"
              quality={100}
              width={24}
              height={24}
              className="w-[18px] h-[18px] md:w-[32px] md:h-[32px]"
            />
            {currentLocalizations?.nav?.cookingPlan}
          </Link>
        </li>
        <li>
          <Link href={`/status`}>
            <Image
              src="/images/check_ok.svg"
              alt="Status"
              width={24}
              height={24}
              quality={100}
              className="w-[18px] h-[18px] md:w-[32px] md:h-[32px]"
            />
            {currentLocalizations?.nav?.status}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
