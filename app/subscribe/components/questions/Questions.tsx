import Wrapper from "@/app/components/layout/Wrapper";
import { QUESTIONS } from "@/app/constatnt";
import Question from "./Question";

const Questions = () => {
  return (
    <section className="sectionX sectionY">
      <Wrapper className="">
        <div className="flex flex-col items-center">
          {QUESTIONS.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              question={question.question}
              answers={question.answers}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Questions;
