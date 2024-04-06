"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "../../routes";

import Wrapper from "./Wrapper";

import Logo from "../../../public/assets/shared/logo.svg";
import FacebookIco from "../../../public/assets/shared/icon-facebook.svg";
import TwitterIco from "../../../public/assets/shared/icon-twitter.svg";
import InstagramIco from "../../../public/assets/shared/icon-instagram.svg";

const classes = "transition-color duration-300";
const SOCIALS: {
  id: string;
  name: string;
  url: string;
  element: JSX.Element;
}[] = [
  {
    id: "s1",
    name: "Facebook",
    url: "#",
    element: <FacebookIco className={classes} />,
  },
  {
    id: "s2",
    name: "Twitter",
    url: "#",
    element: <TwitterIco className={classes} />,
  },
  {
    id: "s3",
    name: "Instagram",
    url: "#",
    element: <InstagramIco className={classes} />,
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="sectionX sectionY pb-18">
      <Wrapper className="section-inner-x gradient flex flex-col items-center justify-center gap-12 py-13 md:gap-8 lg:relative lg:flex-row lg:justify-start lg:gap-25 lg:py-11">
        <Link href="/" aria-label="Home Page" className="text-white">
          <Logo className="h-6 w-[217px] md:h-[26px] md:w-[236px]" />
        </Link>
        <div className="flex flex-col items-center gap-6 md:mb-8 md:flex-row lg:mb-0 ">
          {ROUTES.map((route) => (
            <Link
              key={route.id}
              href={route.url}
              className={`${
                pathname === route.url ? "active text-white" : "text-Grey"
              } link relative  max-w-max text-xs  font-bold uppercase tracking-wide`}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className="right-21 flex items-center gap-6 lg:absolute">
          {SOCIALS.map((social) => (
            <a
              key={social.id}
              href={social.url}
              aria-label={social.name}
              className="text-LightCream transition hover:-translate-y-1 hover:text-PaleOrange"
            >
              {social.element}
            </a>
          ))}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
