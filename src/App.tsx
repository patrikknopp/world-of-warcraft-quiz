import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { quizData } from "./data";
import QuestionCard from "./Components/QuestionCard";
import ReviewScreen from "./Components/ReviewScreen";
import { FaTrophy, FaRedo } from "react-icons/fa";
import "./App.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;

  const handleAnswerSelect = (answerId: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerId;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmitQuiz = () => {
    setShowReview(true);
  };

  const calculateScore = () => {
    return quizData.questions.reduce((score, question, index) => {
      const selectedAnswerId = selectedAnswers[index];
      if (!selectedAnswerId) return score;
      const selectedAnswer = question.answers.find(
        (a) => a.id === selectedAnswerId
      );
      return selectedAnswer?.isCorrect ? score + 1 : score;
    }, 0);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowReview(false);
  };

  if (!quizStarted) {
    return (
      <div className="container my-5 text-center">
        <h1 className="mb-4">Welcome to World of Warcraft Quiz!</h1>
        <p>
          <p>
            &copy; {new Date().getFullYear()} Patrik Knopp, Unofficial project
          </p>
        </p>
        <button
          className="btn btn-danger btn-lg"
          onClick={() => setQuizStarted(true)}
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (showReview) {
    return (
      <ReviewScreen
        questions={quizData.questions}
        selectedAnswers={selectedAnswers}
        onRestart={handleRestartQuiz}
        onSubmit={() => setShowResults(true)}
      />
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="container my-5 text-center">
        <h1 className="mb-4">Quiz Results</h1>
        <div className="display-4 mb-3">
          <FaTrophy className="text-warning" /> {score}/
          {quizData.questions.length}
        </div>
        <button className="btn btn-danger" onClick={handleRestartQuiz}>
          <FaRedo className="me-2" /> Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{quizData.title}</h1>
      <p>The results will be displayed after the quiz is completed.</p>
      <p>&copy; {new Date().getFullYear()} Patrik Knopp, Unofficial project</p>
      {quizStarted && !showResults && (
        <div className="progress mb-4">
          <div
            className="progress-bar progress-bar-danger"
            role="progressbar"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / quizData.questions.length) * 100
              }%`,
            }}
          >
            {!showReview
              ? `Question ${currentQuestionIndex + 1} of ${
                  quizData.questions.length
                }`
              : "Checking the answers"}
          </div>
        </div>
      )}
      <QuestionCard
        question={currentQuestion}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={selectedAnswers[currentQuestionIndex] || null}
        showResult={false}
      />
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          disabled={currentQuestionIndex === 0}
        >
          Previous Question
        </button>
        {isLastQuestion ? (
          <button
            className="btn btn-success"
            onClick={handleSubmitQuiz}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
          >
            Submit Answers
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
