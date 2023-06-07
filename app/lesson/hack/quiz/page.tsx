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
      // @ts-ignore
      setSelectedAnswer(true);
      console.log("true");
    } else {
      // @ts-ignore
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
      <div className="container flex flex-col w-full md:w-1/2 bg-dark text-light justify-center items-center py-8 rounded-lg">
        <h1 className="text-light font-semibold text-3xl">Test Quiz</h1>
        <h2 className="text-gold font-semibold text-xl">
          Cracking and Hacking
        </h2>
        <div className="container flex items-center justify-center my-4">
          <h2 className="text-lg font-semibold">
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        </div>
        <div className="w-full">
          {!showResult ? (
            <div className="container w-full text-xl font-semibold bg-salmon p-4 rounded-lg justify-center">
              <h3>{questions[activeQuestion].question}</h3>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`${
                    selectedAnswerIndex === idx
                      ? "answer-selected"
                      : "hover:bg-gold"
                  } flex text-dark bg-light border rounded-lg my-2 px-2 list-none cursor-pointer`}
                >
                  <span>{answer}</span>
                </li>
              ))}
              {checked ? (
                <button
                  onClick={nextQuestion}
                  className="w-1/2 flex justify-center mx-auto bg-teal-500 text-light shadow-lg rounded-lg"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="w-1/2 flex justify-center mx-auto bg-slate-200 text-gray-500 shadow-lg rounded-lg"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container bg-leaf bg-opacity-80 rounded py-4">
              <div className="container flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold my-2">Hasil</h3>
                <h3 className="text-2xl font-semibold my-2">
                  Skor :{" "}
                  <span className="text-dark font-bold">
                    {(result.score / 25) * 100}%
                  </span>
                </h3>
                <p className="text-2xl my-2 text-center">
                  <span className="text-dark font-bold">
                    {result.correctAnswers}
                  </span>{" "}
                  jawaban benar dari{" "}
                  <span className="text-dark font-bold">
                    {questions.length}
                  </span>{" "}
                  pertanyaan
                </p>
                <button className="font-semibold px-4 py-2 mt-4 bg-dark shadow shadow-dark rounded-md hover:bg-darker transition">
                  <Link href="/lesson">Selesai</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
