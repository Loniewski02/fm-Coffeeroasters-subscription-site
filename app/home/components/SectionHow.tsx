"use client";
import { useRouter } from "next/navigation";
import Button from "../../components/UI/Button";
import Wrapper from "../../components/layout/Wrapper";
import HowItem from "./HowItem";

const DUMMY_DATA = [
  {
    id: "i1",
    title: "Pick your coffee",
    desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: "i2",
    title: "Choose the frequency",
    desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: "i3",
    title: "Receive and enjoy!",
    desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const SectionHow = () => {
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
        <div className="relative mb-15 hidden h-[2px] w-[500px] bg-PaleOrange md:block lg:mb-20 lg:w-[760px]">
          <div className="absolute left-0 h-8 w-8 -translate-y-1/2 rounded-full border-[2px] border-DarkCyan bg-LightCream" />
          <div className="absolute right-0 h-8 w-8 -translate-y-1/2 rounded-full border-[2px] border-DarkCyan bg-LightCream" />
          <div className="absolute left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-DarkCyan bg-LightCream" />
        </div>
        <div className="flex flex-col items-center justify-between gap-14 md:flex-row md:items-start md:gap-6 lg:justify-start lg:gap-12 xl:gap-24">
          {DUMMY_DATA.map((item, index) => (
            <HowItem
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

export default SectionHow;
