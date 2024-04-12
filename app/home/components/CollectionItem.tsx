import { motion } from "framer-motion";

type Props = {
  img: string;
  name: string;
  desc: string;
  index: number;
};

const animationVariants = {
  initial: { opacity: 0, x: 50, y: 150 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const CoollectionItem: React.FC<Props> = ({ img, name, desc, index }) => {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex flex-col items-center gap-6 md:max-w-[620px] md:flex-row md:justify-between lg:max-w-full lg:flex-col lg:gap-18"
    >
      <img src={img} alt="coffe bag" className="w-[200px] md:w-[255px]" />
      <div className="flex flex-col gap-6 text-center md:text-left lg:text-center">
        <h3 className="text-2xl text-DarkGreyBlue">{name}</h3>
        <p className="max-w-70 text-lm text-DarkGreyBlue lg:max-w-[255px] lg:text-base">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default CoollectionItem;
