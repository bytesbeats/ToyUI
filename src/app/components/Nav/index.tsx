"use client";

import "./style.css";

import { Locales } from "@locales/next-i18next.config";
import { useLanguage } from "@stores/hooks";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { debounce } from "remeda";
import { Subject } from "rxjs";

const Nav = () => {
  // current state
  const bodyRef = useRef<HTMLElement | null>(null);
  const destroy$ = useRef(new Subject<void>());
  const [showMenu, setShowMenu] = useState(false);
  const { scrollY } = useScroll({
    container: bodyRef,
  });

  // store state
  const [language, currentLocalizations, upgradeLanguage] = useLanguage();

  // handle

  /**
   * @name switchLanguage
   * @description Switch Global language
   */
  const switchLanguage = async () => {
    upgradeLanguage({
      language: language === Locales.EN ? Locales.ZH : Locales.EN,
    });
  };

  /**
   * @name handleScrollDebounce
   * @description Debounce the scroll event to prevent unnecessary re-renders
   */
  const handleScrollDebounce = debounce(
    (y: number) => {
      if (y >= 75) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    },
    {
      waitMs: 30,
    }
  ).call;

  useEffect(() => {
    bodyRef.current = document.body;

    if (bodyRef.current) {
      return () => {
        destroy$.current.next();
        destroy$.current.complete();
        bodyRef.current = null;
      };
    }
  }, [bodyRef]);

  useMotionValueEvent(scrollY, "change", handleScrollDebounce);

  return (
    <motion.nav
      layout
      className="navbar fixed z-50 w-screen justify-around items-start transition-all duration-300 ease-in-out md:mx-auto md:justify-center"
      style={{
        transform: showMenu ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      {/* Home */}
      <motion.div className="flex-1">
        <Link
          href={`/`}
          className="flex flex-col justify-center items-center font-bold -translate-y-1  -translate-x-1"
        >
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
