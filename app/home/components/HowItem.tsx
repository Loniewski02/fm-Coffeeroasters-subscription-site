type Props = {
  num: number;
  title: string;
  desc: string;
};

const HowItem: React.FC<Props> = ({ num, title, desc }) => {
  let number;

  num < 10 ? (number = "0" + num) : (number = num);

  return (
    <div className="flex max-w-[327px] flex-col gap-6 text-center md:w-full md:max-w-[220px] md:gap-10 md:text-left lg:max-w-[250px] xl:max-w-[285px]">
      <span className="font-fraunces text-7xl text-PaleOrange">{number}</span>
      <h3 className="text-xxl text-DarkGreyBlue lg:max-w-[255px] lg:text-[32px]">
        {title}
      </h3>
      <p className="text-lm text-DarkGreyBlue lg:text-base">{desc}</p>
    </div>
  );
};

export default HowItem;
