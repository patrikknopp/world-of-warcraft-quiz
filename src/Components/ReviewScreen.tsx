import { type Question, type Answer } from "../types";
import { FaTrophy } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useEffect } from "react";

type ReviewScreenProps = {
  questions: Question[];
  selectedAnswers: number[];
  onRestart: () => void;
  onSubmit: () => void;
};

export default function ReviewScreen({
  questions,
  selectedAnswers,
  onRestart,
  onSubmit,
}: ReviewScreenProps) {
  const correctAnswers = questions.reduce((count, question, index) => {
    const selectedAnswerId = selectedAnswers[index];
    if (!selectedAnswerId) return count;
    const isCorrect = question.answers.find(
      (a) => a.id === selectedAnswerId
    )?.isCorrect;
    return isCorrect ? count + 1 : count;
  }, 0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    scrollToTop();
    setTimeout(() => {
      onSubmit();
    }, 500);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Checking the answers</h1>

      <div className="progress mb-4">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "100%" }}
        >
          Completed: {questions.length} of {questions.length}
        </div>
      </div>

      <div className="text-center mb-4">
        <h4>
          <FaTrophy className="text-warning me-2" />
          {correctAnswers} / {questions.length} correctly
        </h4>
      </div>

      {questions.map((question, index) => {
        const selectedAnswerId = selectedAnswers[index];
        const selectedAnswer = question.answers.find(
          (a) => a.id === selectedAnswerId
        );
        const isCorrect = selectedAnswer?.isCorrect;

        return (
          <div key={question.id} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                Question {index + 1}: {question.text}
              </h5>
              <div className="list-group">
                {question.answers.map((answer) => {
                  let className = "list-group-item";
                  const isSelected = answer.id === selectedAnswerId;

                  if (isSelected) {
                    className += isCorrect
                      ? " bg-success text-white"
                      : " bg-danger text-white";
                  } else if (answer.isCorrect) {
                    className += " bg-success text-white";
                  }

                  return (
                    <div key={answer.id} className={className}>
                      {answer.text}
                      {isSelected && !isCorrect && (
                        <span className="ms-2">❌</span>
                      )}
                      {isSelected && isCorrect && (
                        <span className="ms-2">✔️</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      <div className="d-flex justify-content-between">
        <button className="btn btn-warning" onClick={onRestart}>
          Restart Quiz
        </button>
        <button className="btn btn-danger" onClick={handleSubmit}>
          <FaArrowUp className="me-2" />
          Show Results
        </button>
      </div>
    </div>
  );
}
