import React, { useState } from "react";
import Navbar from "./Navbar";
import QuizCard from "./QuizCard";
import Leaderboard from "./Leaderboard";

let questionnaires = [
  {
    name: "Demo quiz",
    amount: 5,
    beRecorded: false,
  },
  {
    name: "Quiz",
    amount: 15,
    beRecorded: true,
  },
];
export default function Dashboard() {
  const [isLoggedIn , setIsLoggedIn] = useState(localStorage.getItem("token")?true:false)

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <p className="font-medium text-3xl px-12 pt-12 capitalize" >Leaderboards</p>
      <Leaderboard></Leaderboard>
      <p className="font-medium text-3xl px-12 pt-12 capitalize" >Questionnaires</p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-4 p-7">
        <QuizCard questionnaire={questionnaires[0]} index={0} beRecorded={questionnaires[0].beRecorded}/>
        {localStorage.getItem("token")&&<QuizCard questionnaire={questionnaires[1]} index={1}  beRecorded={questionnaires[1].beRecorded}/>}
      </div>
    </div>
  );
}
