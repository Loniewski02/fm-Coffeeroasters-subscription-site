"use client";
import { useRouter } from "next/navigation";
import { HOW_IT_WORKS } from "@/app/constatnt";

import Button from "../../components/UI/Button";
import Wrapper from "../../components/layout/Wrapper";
import Line from "@/app/components/layout/Line";
import HowItem from "./HowItem";

const HowItWorks = () => {
  const router = useRouter();

  const nawigateHanler = () => {
    router.push("/subscribe");
  };

  return (
    <section className="sectionX sectionY">
      <Wrapper className="lg:section-inner-x">
        <h2 className="text-Gray mb-20 text-center text-2xl text-Grey md:mb-13 md:text-left lg:mb-24">
          How it works
        </h2>
        <Line isDark={false} />
        <div className="flex flex-col items-center justify-between gap-14 md:flex-row md:items-start md:gap-6 lg:justify-start lg:gap-12 xl:gap-24">
          {HOW_IT_WORKS.map((item, index) => (
            <HowItem
              isDark={false}
              key={item.id}
              num={index + 1}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        <Button
          type="button"
          onClick={nawigateHanler}
          className="mt-20 md:mt-11 lg:mt-16"
        >
          Create your plan
        </Button>
      </Wrapper>
    </section>
  );
};

export default HowItWorks;
