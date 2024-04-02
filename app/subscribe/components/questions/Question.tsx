"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Arrow from "@/public/assets/plan/general/icon-arrow.svg";
import QuestionItem from "./QuestionItem";

type Props = {
  question: string;
  id: string;
  answers: { title: string; text: string }[];
  onUserData: (id: string, text: string) => void;
};

const Question: React.FC<Props> = ({ question, id, answers, onUserData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordeonHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div id={id} className="w-full max-w-[350px] md:max-w-full">
      <button
        onClick={toggleAccordeonHandler}
        className="relative mb-8 flex  w-full items-center justify-between md:mb-10"
      >
        <span className="max-w-[240px] text-left font-fraunces text-2xl text-Grey md:max-w-max md:text-[32px]">
          {question}
        </span>
        <Arrow
          className={`${isExpanded && "rotate-180"} transition-transform`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <QuestionItem answers={answers} id={id} onUserChoice={onUserData} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
