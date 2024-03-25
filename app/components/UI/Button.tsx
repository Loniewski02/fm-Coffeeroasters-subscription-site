type Props = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
  onClick: () => void;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      aria-label={props.ariaLabel ? props.ariaLabel : ""}
      className={`${
        props.className && props.className
      } rounded-md bg-DarkCyan px-8 py-4 font-fraunces text-lg text-LightCream transition hover:bg-CyanHover active:scale-105`}
    >
      {props.children}
    </button>
  );
};

export default Button;
