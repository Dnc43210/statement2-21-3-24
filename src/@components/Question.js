import { decode } from "html-entities";
import React, { useEffect, useState } from "react";

function Question(props) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(-1);
  let question = props.question;

  const allOptions = [question.correct_answer, ...question.incorrect_answers];

  useEffect(() => {
    // Shuffle the combined options array
    const shuffledOptions = shuffleArray(allOptions);
    setOptions(shuffledOptions);
    setSelected(-1);

    // eslint-disable-next-line
  }, [props.question]);

  // Function to shuffle an array (using Fisher-Yates algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="mt-6 max-w-lg mx-4 sm:m-auto sm:mt-6">
      <h1 className="font-medium text-3xl capitalize text-gray-600 mt-3 mb-3">{`Question${
        props.qno + 1
      }`}</h1>
      <p className="my-3 font-medium">{decode(question.question)}</p>
      {options.map((option, i) => (
        <>
          <input
            type="radio"
            name={"q" + props.qno}
            id={`q${props.qno}o${i}`}
            // eslint-disable-next-line
            checked={i == selected}
            onClick={() => {
              setSelected(i);
              props.saveAnswer(option);
            }}
            onChange={() => {}}
          />
          <label className="px-2" htmlFor={`q${props.qno}o${i}`}>
            {decode(option)}
          </label>
          <br />
        </>
      ))}
    </div>
  );
}

export default Question;
