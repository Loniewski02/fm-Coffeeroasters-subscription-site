import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
  isShown: boolean;
};

const barClasses =
  "block w-full h-[3px] bg-DarkGreyBlue rounded-sm absolute left-0";

const BurgerBtn: React.FC<Props> = ({ onClick, isShown }) => {
  return (
    <button
      aria-label="menu button"
      onClick={onClick}
      className="p-2 md:hidden"
    >
      <span className="relative block h-[15px] w-4 ">
        <motion.span
          animate={{
            y: isShown ? 6 : 0,
            rotate: isShown ? 45 : 0,
          }}
          className={`${barClasses} top-0`}
        />
        <motion.span
          animate={{ opacity: isShown ? 0 : 1 }}
          className={`${barClasses} top-1/2 -translate-y-1/2 transform`}
        />
        <motion.span
          animate={{
            y: isShown ? -6 : 0,
            rotate: isShown ? -45 : 0,
          }}
          className={`${barClasses} bottom-0`}
        />
      </span>
    </button>
  );
};

export default BurgerBtn;
