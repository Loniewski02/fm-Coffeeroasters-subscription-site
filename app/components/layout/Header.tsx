import Wrapper from "./Wrapper";

type Props = {
  children?: React.ReactNode;
  title: string;
  desc: string;
  font: "big" | "small";
  bgClass: string;
};

const Header: React.FC<Props> = ({ title, desc, children, font, bgClass }) => {
  return (
    <header className="sectionX headerY">
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
    </header>
  );
};

export default Header;
