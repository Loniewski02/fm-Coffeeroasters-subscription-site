"use client";
import Wrapper from "@/app/components/layout/Wrapper";
import { QUESTIONS } from "@/app/constatnt";
import Question from "./Question";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Questions = () => {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const dataLength = Object.keys(userData).length;
    console.log(userData);
    console.log(dataLength);
  }, [userData]);

  const userDataHandler = (id: string, text: string) => {
    setUserData((prevData) => {
      return { ...prevData, [id]: text };
    });
  };

  return (
    <section className="sectionX sectionY">
      <Wrapper className="lg:sectionX xl:section-inner-x lg:flex lg:justify-between lg:gap-28">
        <aside className="hidden min-w-max flex-col lg:flex">
          {QUESTIONS.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                router.push(`#${item.id}`);
              }}
              className="border-b border-[#cdcdcd] py-6 font-fraunces text-2xl text-[#cdcdcd] transition-colors first:pt-0 last:border-0 last:pb-0 hover:text-Grey"
            >
              <span className="mr-7">
                {index < 10 ? `0${index + 1}` : index + 1}
              </span>
              {item.name}
            </a>
          ))}
        </aside>
        <div className="flex w-full flex-col items-center">
          {QUESTIONS.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              question={question.question}
              answers={question.answers}
              onUserData={userDataHandler}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Questions;
