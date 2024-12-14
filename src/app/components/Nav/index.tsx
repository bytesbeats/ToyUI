"use client";

import "./style.css";

import { Locales } from "@locales/next-i18next.config";
import { useLanguage } from "@stores/hooks";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { fromEvent, map, Subject, tap, throttleTime } from "rxjs";

const Nav = () => {
  const darkRef = useRef<HTMLInputElement>(null);
  // current state
  const [dark, setDark] = useState<boolean>(false);
  const bodyRef = useRef<HTMLElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const { scrollY } = useScroll({
    container: bodyRef,
    layoutEffect: false,
  });
  // store state
  const [language, currentLocalizations, upgradeLanguage] = useLanguage();

  //  subject
  const posY$ = useMemo(() => new Subject<number>(), []);
  const observableLanguageChange$ = useMemo(() => new Subject<Locales>(), []);

  useLayoutEffect(() => {
    if (document && document?.body && darkRef.current) {
      bodyRef.current = document.body;
      // theme event
      const observableThemeChange$ = fromEvent(darkRef.current, "change").subscribe(
        (event) => {
          const isChecked = (event.target as HTMLInputElement).checked;
          setDark(isChecked);
        }
      );

      // scroll event
      posY$
        .pipe(
          throttleTime(300),
          map((y) => y >= 120),
          tap((show) => setShowMenu(show))
        )
        .subscribe();

      return () => {
        console.log("unsubscribe"); // why unsubscribe run many times?
        bodyRef.current = null;
        posY$.complete();
        observableThemeChange$.unsubscribe();
      };
    }
  }, [bodyRef, posY$]);

  useEffect(() => {
    observableLanguageChange$
      .pipe(
        map((lang) => (lang === Locales.EN ? Locales.ZH : Locales.EN)),
        tap((lang) => upgradeLanguage({ language: lang }))
      )
      .subscribe();

    return () => {
      observableLanguageChange$.unsubscribe();
    };
  }, [observableLanguageChange$, upgradeLanguage]);

  useMotionValueEvent(scrollY, "change", (wheelY) => {
    posY$.next(wheelY);
  });

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
          <div className="flex flex-col items-center">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="night"
                defaultChecked={dark}
                ref={darkRef}
              />
              <Image
                src="/images/light-on.svg"
                alt="bee"
                width={32}
                height={32}
                quality={100}
                className="w-[16px] h-[16px] md:w-[32px] md:h-[32px] swap-off fill-current"
              />
              <Image
                src="/images/light-off.svg"
                alt="bee"
                width={32}
                height={32}
                quality={100}
                className="w-[16px] h-[16px] md:w-[32px] md:h-[32px] swap-on fill-current"
              />
            </label>
            {dark ? currentLocalizations?.nav?.dark : currentLocalizations?.nav?.light}
          </div>
        </li>
        <li>
          <div
            onClick={() => observableLanguageChange$.next(language)}
            className="swap swap-rotate flex flex-col items-center"
          >
            <Image
              src="/images/bee.svg"
              alt="bee"
              width={32}
              height={32}
              quality={100}
              className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
            />
            {currentLocalizations?.nav?.locale}
          </div>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
