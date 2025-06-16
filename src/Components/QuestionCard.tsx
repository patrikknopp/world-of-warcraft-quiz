import { type Answer, type Question } from "../types";

type QuestionCardProps = {
  question: Question;
  onAnswerSelect: (answerId: number) => void;
  selectedAnswer: number | null;
  showResult: boolean;
};

export default function QuestionCard({
  question,
  onAnswerSelect,
  selectedAnswer,
  showResult,
}: QuestionCardProps) {
  return (
    <div className="card bm-4">
      <div className="card-body">
        <h5 className="card-title">{question.text}</h5>
        <div className="list-group">
          {question.answers.map((answer) => {
            let className = "list-group-item list-group-item-action";

            if (selectedAnswer === answer.id) {
              className += showResult
                ? answer.isCorrect
                  ? " bg-success text-white"
                  : " bg-danger text-white"
                : " bg-danger text-white";
            } else if (showResult && answer.isCorrect) {
              className += " bg-success text-white";
            }
            return (
              <button
                key={answer.id}
                className={className}
                onClick={() => onAnswerSelect(answer.id)}
                disabled={showResult}
              >
                {answer.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
