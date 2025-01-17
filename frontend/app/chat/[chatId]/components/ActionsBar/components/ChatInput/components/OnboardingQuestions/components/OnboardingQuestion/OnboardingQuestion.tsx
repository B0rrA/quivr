import { Fragment } from "react";

import { useOnboarding } from "@/lib/hooks/useOnboarding";

import { useOnboardingQuestion } from "./hooks/useOnboardingQuestion";
import { QuestionId } from "../../types";

type OnboardingQuestionsProps = {
  questionId: QuestionId;
};

export const OnboardingQuestion = ({
  questionId,
}: OnboardingQuestionsProps): JSX.Element => {
  const { onboarding } = useOnboarding();
  const { handleSuggestionClick, question } = useOnboardingQuestion(questionId);

  if (!onboarding[questionId]) {
    return <Fragment />;
  }

  return (
    <div
      onClick={() => void handleSuggestionClick()}
      className="cursor-pointer shadow-md dark:shadow-primary/25 hover:shadow-xl transition-shadow bg-yellow-100 px-3 py-1 rounded-xl border-black/10 dark:border-white/25"
    >
      {question}
    </div>
  );
};
