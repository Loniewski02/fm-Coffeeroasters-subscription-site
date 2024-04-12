"use client";
import { once } from "events";
import { motion } from "framer-motion";

type Props = {
  country: string;
  data: string[];
  children: React.ReactNode;
  index: number;
};

const listVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2 },
  }),
};

const divVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: index * 0.1 },
  }),
};

const ContactInfoItem: React.FC<Props> = ({
  country,
  data,
  children,
  index,
}) => {
  return (
    <motion.div
      variants={divVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
      className="flex w-full min-w-max max-w-[285px] flex-col items-center gap-6 text-DarkGreyBlue md:items-start "
    >
      {children}
      <h3 className="mt-6 text-center text-xxl md:text-left lg:text-[32px]">
        {country}
      </h3>
      <ul className="text-center text-lm md:text-left lg:text-base">
        {data.map((item, i) => (
          <motion.li
            variants={listVariants}
            initial="initial"
            whileInView="animate"
            custom={i}
            viewport={{ once: true }}
            key={item}
            className="text-lm"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ContactInfoItem;
