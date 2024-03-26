"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "@/public/assets/plan/general/icon-arrow.svg";

type Props = {
  question: string;
  id: string;
  answers: { title: string; text: string }[];
};

const Question: React.FC<Props> = ({ question, id, answers }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordeonHandler = () => {
    setIsExpanded((prevState) => !prevState);
    console.log(isExpanded);
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex h-0 flex-col gap-4 overflow-hidden md:flex-row"
          >
            {answers.map((answer) => (
              <div className="mb-28 md:mb-25">
                <button
                  className={`flex flex-col rounded-lg bg-[#F4F1EB] p-6 text-left text-DarkGreyBlue transition-colors hover:bg-PaleOrange md:min-h-[250px]  md:py-8`}
                >
                  <span className="mb-1 block font-fraunces text-2xl md:mb-6">
                    {answer.title}
                  </span>
                  <span className="block md:min-w-[160px]">{answer.text}</span>
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
