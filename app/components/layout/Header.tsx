"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "./Wrapper";

type Props = {
  children?: React.ReactNode;
  title: string;
  desc: string;
  font: "big" | "small";
  bgClass: string;
};

const Header: React.FC<Props> = ({ title, desc, children, font, bgClass }) => {
  let { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [100, 300, 600], [1, 0.5, 0]);

  const scale1 = useTransform(scrollY, [0, 200, 400], [1, 1.15, 1.25]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="sectionX headerY"
      style={{ scale: scale1, opacity: opacity }}
    >
      <Wrapper
        className={`${bgClass} section-inner-x flex min-h-[400px] flex-col items-center justify-center rounded-[10px] bg-cover bg-center bg-no-repeat py-25 md:items-start lg:min-h-[450px] lg:py-20`}
      >
        <h1
          className={`${
            font === "big"
              ? "text-4xl md:text-5xl lg:text-7xl"
              : "text-xxl md:text-[32px]"
          } mb-6 max-w-[350px] text-center text-LightCream md:max-w-lg md:text-left lg:mb-8`}
        >
          {title}
        </h1>
        <p className="max-w-70 text-center text-lm font-normal text-LightCream md:max-w-[445px] md:text-left lg:text-base ">
          {desc}
        </p>
        {children}
      </Wrapper>
    </motion.header>
  );
};

export default Header;
