import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { subscriptionActions } from "@/app/store/subscription-slice";

import Button from "@/app/components/UI/Button";
import SummaryText from "../SummaryText";
import { useEffect } from "react";

const Summary: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.subscription.userData);
  const disabled = useAppSelector((state) => state.subscription.disabled);

  useEffect(() => {
    userData.preferences !== "Capsule" &&
      dispatch(
        subscriptionActions.changeData({ field: "grind-option", value: "" }),
      );
  }, [disabled]);

  const anyValueEmpty = (obj: UserData) => {
    return Object.values(obj).some((value) => value === "");
  };

  const showModalHandler = () => {
    dispatch(subscriptionActions.checkPrice());
    dispatch(subscriptionActions.showModal());
  };

  return (
    <div className="mt-15 flex flex-col gap-14 md:mt-18 md:gap-10 lg:mt-25">
      <div className="section-inner-x  gradient w-full rounded-[10px] py-8 ">
        <h3 className="mb-2 font-barlow text-base uppercase text-Grey">
          order summary
        </h3>
        <SummaryText className="font-fraunces text-2xl leading-[40px] tracking-wide text-LightCream" />
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
