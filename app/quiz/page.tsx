"use client";
import Link from "next/link";
import { useState } from "react";
import { quiz } from "./quizdata";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer: any, idx: any) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  //   calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <>
      <div className="container flex flex-col bg-light text-dark justify-center items-center mt-24 py-8 rounded-lg">
        <h1 className="text-dark font-semibold">Kuis Ini Kuis</h1>
        <div className="ml-4">
          <Link href="/lesson" className="text-salmon p-1 bg-dark">
            Home
          </Link>
        </div>
        <div className="container">
          <h2>
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        </div>
        <div>
          {!showResult ? (
            <div className="quiz-container text-xl font-semibold bg-salmon py-4 px-2 rounded-lg">
              <h3>{questions[activeQuestion].question}</h3>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`${
                    selectedAnswerIndex === idx
                      ? "answer-selected"
                      : "hover:bg-slate-200"
                  } border rounded-lg my-2 px-2 list-none`}
                >
                  <span>{answer}</span>
                </li>
              ))}
              {checked ? (
                <button
                  onClick={nextQuestion}
                  className="w-full bg-slate-700 text-light shadow-lg rounded-lg"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="w-full bg-slate-200 text-gray-500 shadow-lg rounded-lg"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container bg-leaf">
              <h3>Results</h3>
              <h3>Overall {(result.score / 25) * 100}%</h3>
              <p>
                Total question: <span>{questions.length}</span>{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
