type Props = {
  country: string;
  data: string[];
  children: React.ReactNode;
};

const ContactInfoItem: React.FC<Props> = ({ country, data, children }) => {
  return (
    <div className="flex w-full min-w-max max-w-[285px] flex-col items-center gap-6 text-DarkGreyBlue md:items-start ">
      {children}
      <h3 className="mt-6 text-center text-xxl md:text-left lg:text-[32px]">
        {country}
      </h3>
      <ul className="text-center text-lm md:text-left lg:text-base">
        {data.map((item) => (
          <li key={item} className="text-lm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfoItem;
