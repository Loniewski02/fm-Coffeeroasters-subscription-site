"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { subscriptionActions } from "@/app/store/subscription-slice";
import { isUserDataNotEmpty } from "@/app/helpers";
import { QUESTIONS } from "@/app/constatnt";

import Wrapper from "@/app/components/layout/Wrapper";
import Question from "./Question";
import Summary from "./Summary";

const Questions: React.FC = () => {
  const dispatch = useAppDispatch();
  const disabled = useAppSelector((state) => state.subscription.disabled);
  const userData = useAppSelector((state) => state.subscription.userData);
  const router = useRouter();

  const navigateHandler = (id: string) => {
    dispatch(subscriptionActions.setNavigatedItemitem(id));
    router.push(`#${id}`);
  };

  return (
    <section className="sectionX sectionY relative">
      <h2 className=" invisible absolute left-1/2 top-0 -translate-x-1/2 text-center text-2xl">
        Create your plan
      </h2>
      <Wrapper className="xl:section-inner-x lg:flex lg:justify-between lg:gap-16 xl:gap-28">
        <aside className="hidden min-w-max flex-col lg:flex">
          {QUESTIONS.map((item, index) => (
            <button
              key={item.id}
              onClick={navigateHandler.bind(null, item.id)}
              disabled={disabled === item.id}
              className={`${isUserDataNotEmpty(userData, item.id) ? "text-DarkGreyBlue" : "text-[#cdcdcd]"} ${disabled === item.id && "cursor-default opacity-60 hover:text-[#cdcdcd]"} border-b border-[#cdcdcd] py-6 text-left font-fraunces text-2xl transition-colors first:pt-0 last:border-0 last:pb-0 hover:text-Grey`}
            >
              <span
                className={`${isUserDataNotEmpty(userData, item.id) && "text-DarkCyan"} mr-7`}
              >
                {index < 10 ? `0${index + 1}` : index + 1}
              </span>
              {item.name}
            </button>
          ))}
        </aside>
        <div className="flex w-full flex-col items-center">
          {QUESTIONS.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              question={question.question}
              answers={question.answers}
            />
          ))}
          <Summary />
        </div>
      </Wrapper>
    </section>
  );
};

export default Questions;
