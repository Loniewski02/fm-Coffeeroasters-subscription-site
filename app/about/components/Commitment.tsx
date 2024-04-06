"use client";
import { motion } from "framer-motion";

import Wrapper from "@/app/components/layout/Wrapper";

import mobileBg from "@/public/assets/about/mobile/image-commitment.jpg";
import tabletBg from "@/public/assets/about/tablet/image-commitment.jpg";
import desktopBg from "@/public/assets/about/desktop/image-commitment.jpg";

const Commitment = () => {
  return (
    <section className="sectionX sectionY">
      <Wrapper className="xl:section-inner-x flex flex-col items-center md:flex-row md:justify-center md:gap-16 xl:justify-between">
        <motion.img
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{
            once: true,
          }}
          src={mobileBg.src}
          alt=""
          className="mb-12 block h-full w-full max-w-[350px] rounded-lg md:hidden"
        />
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{
            once: true,
          }}
          src={tabletBg.src}
          alt=""
          className="hidden h-full rounded-lg md:block lg:hidden"
        />
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{
            once: true,
          }}
          src={desktopBg.src}
          alt=""
          className="hidden h-full  rounded-lg lg:block"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.1 },
          }}
          viewport={{
            once: true,
          }}
          className="text-center text-DarkGreyBlue md:max-w-[340px] md:text-left lg:max-w-[540px] "
        >
          <h2 className="mb-8 text-[32px] lg:text-[40px]">Our commitment</h2>
          <p className="text-lm lg:text-base">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default Commitment;
