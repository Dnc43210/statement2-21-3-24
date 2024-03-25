import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
// import axios from "axios";
import questionBank from "@utils/questions.json";
import Question from "./Question";

export default function Quiz() {
  const [questions, setQuestions] = useState(questionBank.results);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const handleAnswers = (selected) => {
    const updatedAnswers = [...answers]; // Make a copy of the answers array
    if (selected === questions[currentQuestion].correct_answer) {
      updatedAnswers[currentQuestion] = 1;
    } else {
      updatedAnswers[currentQuestion] = 0;
    }
    setAnswers(updatedAnswers); // Update the answers state
    console.log(updatedAnswers);
  };

  const { amount } = useParams();

  const handleScore = () => {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      count = count + answers[i];
    }
    localStorage.setItem("score", count);
    localStorage.setItem("total", amount);
    navigate("/score");
  };

  const getRandomQuestions = (array, numQuestions) => {
    let shuffled = array.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numQuestions);
  };

  useEffect(() => {
    const shuffledQuestions = getRandomQuestions(questionBank.results, amount);
    setQuestions(shuffledQuestions);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        handleScore();
        clearTimeout(timer);
      }
    }, 45000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [currentQuestion, questions]);

  return (
    <>
      <Navbar />
      <Question
        question={questions[currentQuestion]}
        qno={currentQuestion}
        saveAnswer={handleAnswers}
      />

      <button
        className="border rounded-lg p-2 bg-blue-500 text-white disabled:bg-gray-500 mx-auto block mt-4"
        onClick={() => {
          let current = currentQuestion;
          // eslint-disable-next-line
          if (current + 1 < amount) setCurrentQuestion(current + 1);
          else handleScore();
        }}
        disabled={answers[currentQuestion]===undefined}
      >
        {currentQuestion + 1 < amount ? "Submit&Next" : "finish"}
      </button>
    </>
  );
}
