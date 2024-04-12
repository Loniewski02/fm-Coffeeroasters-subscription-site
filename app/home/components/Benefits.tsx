import { motion } from "framer-motion";
import Wrapper from "../../components/layout/Wrapper";
import Benefit from "./Benefit";

import CoffeBean from "../../../public/assets/home/general/icon-coffee-bean.svg";
import Gift from "../../../public/assets/home/general/icon-gift.svg";
import Truck from "../../../public/assets/home/general/icon-truck.svg";

const BENEFITS = [
  {
    id: "b1",
    title: "Best quality",
    text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    ico: <CoffeBean className="h-14 md:w-14" />,
  },
  {
    id: "b2",
    title: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    ico: <Gift className="h-14 md:w-14" />,
  },
  {
    id: "b3",
    title: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    ico: <Truck className="h-[39] md:w-14" />,
  },
];

const Benefits = () => {
  return (
    <section className="sectionX sectionY">
      <Wrapper className="section-inner-x relative  flex flex-col items-center pt-16 text-center md:pt-14 lg:pt-25 ">
        <div className="gradient absolute left-0 top-0 z-0 h-[902px] w-full rounded-[10px] md:h-[523px]" />
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mb-6 text-center text-xxl text-LightCream md:text-[32px] lg:mb-8 lg:text-[40px]"
        >
          Why choose us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mb-16 max-w-70 text-lm text-LightCream md:mb-18 md:max-w-[540px] md:text-lm lg:mb-21 lg:text-base"
        >
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </motion.p>
        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-stretch">
          {BENEFITS.map((benefit, index) => (
            <Benefit
              title={benefit.title}
              desc={benefit.text}
              key={benefit.id}
              index={index}
            >
              {benefit.ico}
            </Benefit>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Benefits;
