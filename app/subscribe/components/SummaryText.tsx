import { useAppSelector } from "@/app/hooks/hooks";

type SpanProps = {
  text: string;
};

const Span: React.FC<SpanProps> = ({ text }) => {
  const checkData = (text: string) => {
    return text === "" ? "_____" : text;
  };
  return <span className="text-DarkCyan">{checkData(text)}</span>;
};

const SummaryText: React.FC<{ className: string }> = ({ className }) => {
  const userData = useAppSelector((state) => state.subscription.userData);

  let preferences = userData.preferences;
  let beanType = userData["bean-type"];
  let quantity = userData.quantity;
  let grindOption = userData["grind-option"];
  let deliveries = userData.deliveries;
  return (
    <>
      {grindOption !== "none" ? (
        <p className={className}>
          “I drink my coffee as <Span text={preferences} />, with a <Span text={beanType} /> type of bean. <Span text={quantity} />, ground ala <Span text={grindOption} />, sent to me <Span text={deliveries} />.”
        </p>
      ) : (
        <p className={className}>
          “I drink my coffee as <Span text={preferences} />, with a <Span text={beanType} /> type of bean. <Span text={quantity} />, sent to me <Span text={deliveries} />.”
        </p>
      )}
    </>
  );
};

export default SummaryText;
