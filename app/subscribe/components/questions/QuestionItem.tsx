import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { subscriptionActions } from "@/app/store/subscription-slice";
import { checkDataValue } from "@/app/helpers";

type Props = {
  answers: { title: string; text: string }[];
  id: string;
  isExpanded: boolean;
};

const QuestionItem: React.FC<Props> = ({ answers, isExpanded, id }) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.subscription.userData);

  const userChoiceHandler = (id: string, name: string) => {
    dispatch(subscriptionActions.changeData({ field: id, value: name }));
  };

  return (
    <motion.div
      animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
      className="flex h-0 flex-col gap-4 overflow-hidden md:flex-row "
    >
      {answers.map((answer) => (
        <div className="last:mb-28 md:w-[33%] md:last:mb-25" key={answer.title}>
          <button
            data-option={answer.title}
            tabIndex={isExpanded ? 0 : 1}
            onClick={userChoiceHandler.bind(null, id, answer.title)}
            className={`${!checkDataValue(userData, id, answer.title) ? "bg-DarkCyan text-LightCream hover:opacity-85" : "bg-[#F4F1EB] text-DarkGreyBlue hover:bg-PaleOrange"} flex flex-col rounded-lg p-6 text-left transition active:scale-95 md:min-h-[250px] md:py-8`}
          >
            <span className="mb-1 block font-fraunces text-2xl md:mb-6">
              {answer.title}
            </span>
            <span>{answer.text}</span>
          </button>
        </div>
      ))}
    </motion.div>
  );
};

export default QuestionItem;
