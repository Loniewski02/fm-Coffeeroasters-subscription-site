"use client";
import Wrapper from "@/app/components/layout/Wrapper";
import { QUESTIONS } from "@/app/constatnt";
import Question from "./Question";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Summary from "./Summary";

type Props = {
  onShow: () => void;
};

const Questions: React.FC<Props> = ({ onShow }) => {
  const [userData, setUserData] = useState<UserData>({
    preferences: "",
    "bean-type": "",
    quantity: "",
    "grind-option": "",
    deliveries: "",
  });
  const [disabled, setDisabled] = useState("");
  const [navigated, setNavigated] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (userData.preferences === "Capsule") {
      setDisabled("grind-option");
    } else {
      setDisabled("");
    }
  }, [userData]);

  useEffect(() => {
    if (userData.preferences === "Capsule") {
      setUserData((prevData) => {
        return { ...prevData, "grind-option": "none" };
      });
    } else {
      setUserData((prevData) => {
        return { ...prevData, "grind-option": "" };
      });
    }
  }, [disabled]);

  const userDataHandler = (id: string, text: string) => {
    setUserData((prevData) => {
      return { ...prevData, [id]: text };
    });
  };

  const isUserDataNotEmpty = (key: string) => {
    return (
      Object.keys(userData).includes(key) &&
      userData[key as keyof UserData] !== "" &&
      userData[key as keyof UserData] !== "none"
    );
  };

  const navigateHandler = (id: string) => {
    setNavigated(id);
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
              className={`${isUserDataNotEmpty(item.id) ? "text-DarkGreyBlue" : "text-[#cdcdcd]"} ${disabled === item.id && "cursor-default opacity-60 hover:text-[#cdcdcd]"} border-b border-[#cdcdcd] py-6 text-left font-fraunces text-2xl transition-colors first:pt-0 last:border-0 last:pb-0 hover:text-Grey`}
            >
              <span
                className={`${isUserDataNotEmpty(item.id) && "text-DarkCyan"} mr-7`}
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
              disabled={disabled}
              key={question.id}
              id={question.id}
              question={question.question}
              answers={question.answers}
              onUserData={userDataHandler}
              navigated={navigated}
            />
          ))}
          <Summary userData={userData} onShowModal={onShow} />
        </div>
      </Wrapper>
    </section>
  );
};

export default Questions;
