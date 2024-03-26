"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Wrapper from "./Wrapper";
import BurgerBtn from "../UI/BurgerBtn";

import Logo from "../../../public/assets/shared/logo.svg";
import { ROUTES } from "../../routes";

const MainNav = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const [isNavShown, setIsNavShown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    if (!isMobileMenuShown) {
      const navbarBehavior = () => {
        window.scrollY > lastScrollY
          ? setIsNavShown(false)
          : setIsNavShown(true);
        setLastScrollY(window.scrollY);
      };

      window.addEventListener("scroll", navbarBehavior);

      return () => {
        window.removeEventListener("scroll", navbarBehavior);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "visible";
        setIsMobileMenuShown(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuShown]);

  useEffect(() => {
    isMobileMenuShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isMobileMenuShown]);

  const showMobileMenuHandler = () => {
    setIsMobileMenuShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsMobileMenuShown(false);
  };

  return (
    <nav
      className={`${isNavShown ? "animate-show" : "animate-hide"} ${
        lastScrollY > 200 && "shadow-sm"
      } sectionX sticky left-0 right-0 top-0 z-20 bg-[#fefcf7] py-8 md:py-10`}
    >
      <Wrapper className="flex flex-row items-center justify-between ">
        <Link href="/" aria-label="Home Page">
          <Logo className="h-[18px] w-[163px] md:h-[26px] md:w-[236px]" />
        </Link>
        <BurgerBtn
          isShown={isMobileMenuShown}
          onClick={showMobileMenuHandler}
        />
        <div
          className={`${
            isMobileMenuShown ? "animate-showNavItems" : "animate-hideNavItems"
          } magic md:no-magic fixed bottom-0 right-0 top-[95px] w-full pt-10 md:static md:block md:h-auto md:w-auto md:p-0`}
        >
          <div className="flex flex-col items-center gap-8 md:flex-row ">
            {ROUTES.map((route) => (
              <Link
                key={route.id}
                href={route.url}
                aria-label={`${route.name} Page`}
                onClick={hideMobileMenuHandler}
                className={`${
                  pathname === route.url ? "active" : "md:text-Grey"
                } link font-fraunces text-2xl tracking-wider md:font-barlow md:text-xs md:font-bold md:uppercase`}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default MainNav;
