"use client";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/app/hooks/hooks";

import QuestionItem from "./QuestionItem";
import Arrow from "@/public/assets/plan/general/icon-arrow.svg";

type Props = {
  question: string;
  id: string;
  answers: { title: string; text: string }[];
};

const Question: React.FC<Props> = ({ question, id, answers }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigatedItem = useAppSelector(
    (state) => state.subscription.navigatedItem,
  );
  const disabled = useAppSelector((state) => state.subscription.disabled);

  useEffect(() => {
    disabled === id && setIsExpanded(false);
  }, [disabled]);

  useEffect(() => {
    navigatedItem === id && setIsExpanded(true);
  }, [navigatedItem]);

  const toggleAccordeonHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div
      id={id}
      className={`${disabled === id && "opacity-60"} w-full max-w-[350px] md:max-w-full`}
    >
      <button
        onClick={toggleAccordeonHandler}
        disabled={disabled === id}
        className="relative mb-8 flex w-full items-center justify-between md:mb-10"
      >
        <span className="max-w-[240px] text-left font-fraunces text-2xl text-Grey md:max-w-max md:text-[32px]">
          {question}
        </span>
        <Arrow
          className={`${isExpanded && "rotate-180"} transition-transform`}
        />
      </button>
      <QuestionItem answers={answers} isExpanded={isExpanded} id={id} />
    </div>
  );
};

export default Question;
