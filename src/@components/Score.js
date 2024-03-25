import { AcademicCapIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Score() {
  let email = localStorage.getItem("email");
  let score = localStorage.getItem("score");
  let total = localStorage.getItem("total");

  let percentage = (score / total) * 100;

  // useEffect(() => {
  //   let leaderboards = JSON.parse(localStorage.getItem("leaderboards"));
  //   let scoreData = { email: email, score: score };
  //   console.log(leaderboards);
  //   if (leaderboards == null) {
  //     leaderboards = [];
  //     leaderboards[leaderboards.length] = scoreData;
  //   } else {
  //   }
  //   console.log(leaderboards);
  //   localStorage.setItem("leaderboards", JSON.stringify(leaderboards));
  // }, []);

  useEffect(() => {
    let leaderboards = JSON.parse(localStorage.getItem("leaderboards")) || [];

    if (email !== null) {
      // Check if the email already exists in leaderboards
      const index = leaderboards.findIndex((item) => item.email === email);

      if (index !== -1) {
        // Update the score only if the current score is better
        if (score > leaderboards[index].score) {
          leaderboards[index].score = score;
        }
      } else {
        // Add a new entry if the email doesn't exist
        leaderboards.push({ email: email, score: score });
      }

      // Sort the leaderboards based on scores
      leaderboards.sort((a, b) => b.score - a.score);

      localStorage.setItem("leaderboards", JSON.stringify(leaderboards));
    }
  }, [email,score]);

  return (
    <div className="flex flex-col justify-center items-center">
    <AcademicCapIcon className="w-[10%]"></AcademicCapIcon>
      <div className="flex flex-col items-center text-4xl m-6">Your Score {score + "/" + total}</div>
      <div className="flex flex-col items-center text-xl mb-6">{`Percentage = ${percentage}%`}</div>
      <Link to="/" className="bg-blue-700 text-gray-100 p-2 rounded-lg m-4 hover:bg-blue-600 w-[30%] text-center">Go Home</Link>

      {percentage>60 && <Link to={`/questions/${total}`} className="bg-blue-700 text-gray-100 p-2 rounded-lg m-4 hover:bg-blue-600 w-[30%] text-center">Retry</Link>}
    </div>
  );
}
