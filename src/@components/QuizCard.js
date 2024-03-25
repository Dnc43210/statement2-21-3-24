import React from "react";
import { Link } from "react-router-dom";

export default function QuizCard(props) {
    let questionnaire = props.questionnaire;
    let i = props.index;
  return (
    <Link
      to={`/questions/${questionnaire.amount}`}
      key={`card${i}`}
      class="max-w-sm  rounded-3xl overflow-hidden hover:shadow-2xl duration-500 border bg-slate-200"
    >
      <img
        class="w-full object-cover h-[60%] sm:h-auto"
        src="https://t4.ftcdn.net/jpg/04/39/13/37/360_F_439133763_FrLdhZsd5aGC23r9ATARuKJBr8ifZjIe.jpg"
        alt="Banner"
      />
      <div class="px-6 py-1 md:py-4">
        <p class="font-bold text-sm mb-2 md:text-xl">{questionnaire.name}</p>
      </div>
      <div class="px-6 pb-2">
        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2 capitalize">
          {"questions: " + questionnaire.amount}
        </span>
      </div>
    </Link>
  );
}
