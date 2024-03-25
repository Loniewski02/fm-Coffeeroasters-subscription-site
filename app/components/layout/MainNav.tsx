"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Wrapper from "./Wrapper";
import Logo from "../../../public/assets/shared/logo.svg";

import { ROUTES } from "../../routes";

const MainNav = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const pathname = usePathname();

  const showMobileMenuHandler = () => {
    setIsMobileMenuShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsMobileMenuShown(false);
  };

  const barClasses =
    "block w-full h-[3px] bg-DarkGreyBlue rounded-sm absolute left-0";

  return (
    <nav className="sectionX sticky left-0 right-0 top-0 z-20 bg-LightCream py-8 md:py-10">
      <Wrapper className="flex flex-row items-center justify-between ">
        <Link href="/" aria-label="Home Page">
          <Logo className="h-[18px] w-[163px] md:h-[26px] md:w-[236px]" />
        </Link>
        <button
          aria-label="menu button "
          onClick={showMobileMenuHandler}
          className="h-[22px] w-6 p-1 md:hidden"
        >
          <span className="relative block h-full">
            <span className={`${barClasses} top-0`} />
            <span
              className={`${barClasses} top-1/2 -translate-y-1/2 transform`}
            />
            <span className={`${barClasses} bottom-0`} />
          </span>
        </button>
        <div
          className={`${
            isMobileMenuShown ? "block" : "hidden"
          } fixed left-0 top-[86px] h-full w-full bg-gradient-to-b from-LightCream from-40% to-transparent p-10 md:static md:block md:h-auto md:w-auto md:bg-transparent md:p-0`}
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
