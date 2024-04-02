import Line from "@/app/components/layout/Line";
import Wrapper from "@/app/components/layout/Wrapper";
import { HOW_IT_WORKS } from "@/app/constatnt";
import HowItem from "@/app/home/components/HowItem";

const HowItWorks = () => {
  return (
    <section className="sectionY lg:sectionX">
      <Wrapper className="sectionX lg:section-inner-x rounded-[10px] bg-DarkGreyBlue py-20 pt-28 md:pb-18">
        <Line isDark={true} />
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-start xl:gap-24">
          {HOW_IT_WORKS.map((item, index) => (
            <HowItem
              key={item.id}
              isDark={true}
              num={index}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HowItWorks;
