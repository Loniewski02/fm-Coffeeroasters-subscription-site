import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { subscriptionActions } from "@/app/store/subscription-slice";

import Button from "@/app/components/UI/Button";

type SpanProps = {
  text: string;
};

const Span: React.FC<SpanProps> = ({ text }) => {
  const checkData = (text: string) => {
    return text === "" ? "_____" : text;
  };
  return <span className="text-DarkCyan">{checkData(text)}</span>;
};

const Summary: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.subscription.userData);

  const anyValueEmpty = (obj: UserData) => {
    return Object.values(obj).some((value) => value === "");
  };

  const showModalHandler = () => {
    dispatch(subscriptionActions.showModal());
  };

  let preferences = userData.preferences;
  let beanType = userData["bean-type"];
  let quantity = userData.quantity;
  let grindOption = userData["grind-option"];
  let deliveries = userData.deliveries;

  return (
    <div className="mt-15 flex flex-col gap-14 md:mt-18 md:gap-10 lg:mt-25">
      <div className="section-inner-x  gradient w-full rounded-[10px] py-8 ">
        <h3 className="mb-2 font-barlow text-base uppercase text-Grey">
          order summary
        </h3>
        {grindOption !== "none" ? (
          <p className="font-fraunces text-2xl leading-[40px] tracking-wide text-LightCream">
            “I drink my coffee as <Span text={preferences} />, with a
            <Span text={beanType} /> type of bean. <Span text={quantity} />,
            ground ala <Span text={grindOption} />, sent to me
            <Span text={deliveries} />
            .”
          </p>
        ) : (
          <p className="font-fraunces text-2xl leading-[40px] tracking-wide text-LightCream">
            “I drink my coffee as <Span text={preferences} />, with a
            <Span text={beanType} /> type of bean. <Span text={quantity} />,
            sent to me <Span text={deliveries} />
            .”
          </p>
        )}
      </div>
      <Button
        className="self-center lg:self-end"
        type="button"
        ariaLabel="Create Plan"
        onClick={showModalHandler}
        disabled={anyValueEmpty(userData)}
      >
        Create My Plan!
      </Button>
    </div>
  );
};

export default Summary;
