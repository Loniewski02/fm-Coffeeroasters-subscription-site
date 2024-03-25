type Props = {
  children: React.ReactNode;
  title: string;
  desc: string;
};

const Benefit: React.FC<Props> = ({ children, title, desc }) => {
  return (
    <div className="flex w-full flex-col items-center gap-14 rounded-lg bg-DarkCyan px-4 py-12 md:max-w-max md:flex-row md:py-10 md:pl-18 md:pr-12 lg:flex-col lg:px-6 lg:py-12 lg:pt-18">
      {children}
      <div className="flex flex-col gap-6 px-4 md:text-left lg:text-center">
        <h3 className="text-2xl text-LightCream">{title}</h3>
        <p className="max-w-[212px] text-base text-LightCream md:max-w-[344px] md:text-lm lg:text-base">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Benefit;
