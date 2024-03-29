import mobileImg from "@/public/assets/about/mobile/image-quality.jpg";
import tabletImg from "@/public/assets/about/tablet/image-quality.jpg";
import desktopImg from "@/public/assets/about/desktop/image-quality.jpg";
import Wrapper from "@/app/components/layout/Wrapper";

const Quality = () => {
  return (
    <section className="sectionX sectionY pt-[140px] md:pt-[232px] xl:pt-[188px]">
      <Wrapper className="section-inner-x flex flex-col items-center rounded-[10px] bg-DarkGreyBlue pb-16 xl:flex-row xl:justify-between xl:gap-6">
        <img
          src={mobileImg.src}
          alt=""
          className="-mt-[78px] mb-16 h-full w-[280px] rounded-lg md:hidden"
        />
        <img
          src={tabletImg.src}
          alt=""
          className="-mt-[161px] mb-16 hidden h-full w-[573px] rounded-lg md:block xl:hidden"
        />
        <img
          src={desktopImg.src}
          alt=""
          className="order-2 -mt-[88px] hidden h-full w-[445px] rounded-lg xl:block "
        />
        <div className="order-1 max-w-[540px] text-center text-LightCream xl:text-left">
          <h2 className="mb-6 text-xxl md:text-[32px] lg:mb-8 lg:text-[40px]">
            Uncompromising quality
          </h2>
          <p className="text-lm lg:text-base">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Quality;
