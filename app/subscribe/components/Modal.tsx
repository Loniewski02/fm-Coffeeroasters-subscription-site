"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { subscriptionActions } from "@/app/store/subscription-slice";

import Button from "@/app/components/UI/Button";
import SummaryText from "./SummaryText";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const price = useAppSelector((state) => state.subscription.price);

  const closeModalHandler = () => {
    dispatch(subscriptionActions.hideModal());
  };

  const dataFetchHandler = () => {
    console.log(`fetching user data`);
    closeModalHandler();
  };

  return (
    <>
      <section className="fixed left-1/2 top-1/2 z-50 w-full max-w-[572px] -translate-x-1/2 -translate-y-1/2 p-4">
        <div className="w-full rounded-t-lg bg-DarkGreyBlue px-6 py-7 md:px-14 md:pb-10 md:pt-12">
          <h2 className="text-xxl text-LightCream md:text-[40px]">
            Order Summary
          </h2>
        </div>
        <div className="rounded-b-lg bg-LightCream p-6 pt-10 md:p-14">
          <SummaryText className="mb-2 font-fraunces text-2xl leading-[40px] text-Grey" />
          <p className="mb-6 text-lm text-DarkGreyBlue md:mb-12 lg:text-base">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="md:flex md:items-center md:justify-between md:gap-4">
            <span className="hidden font-fraunces text-[32px] text-DarkGreyBlue md:block md:w-full">
              ${price.toFixed(2)} / mo
            </span>
            <Button
              className="md:w-full md:max-w-[210px]"
              type="button"
              onClick={dataFetchHandler}
            >
              Checkout <span className="md:hidden">- $14.00 / mo</span>
            </Button>
          </div>
        </div>
      </section>
      <div
        onClick={closeModalHandler}
        className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[#0000007b] backdrop-blur-md"
      />
    </>
  );
};

export default Modal;
