import React from "react";
import Option from "./Option";

const Question = ({ question, answer, dispatch }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
};

export default Question;
