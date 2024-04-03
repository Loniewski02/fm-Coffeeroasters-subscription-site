"use client";
import { useState, useEffect } from "react";
import Arrow from "@/public/assets/plan/general/icon-arrow.svg";
import QuestionItem from "./QuestionItem";

type Props = {
  question: string;
  disabled: string;
  id: string;
  navigated: string;
  answers: { title: string; text: string }[];
  onUserData: (id: string, text: string) => void;
};

const Question: React.FC<Props> = ({
  disabled,
  question,
  id,
  answers,
  onUserData,
  navigated,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    disabled === id && setIsExpanded(false);
  }, [disabled]);

  useEffect(() => {
    navigated === id && setIsExpanded(true);
  }, [navigated]);

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
      <QuestionItem
        answers={answers}
        isExpanded={isExpanded}
        id={id}
        onUserChoice={onUserData}
      />
    </div>
  );
};

export default Question;
