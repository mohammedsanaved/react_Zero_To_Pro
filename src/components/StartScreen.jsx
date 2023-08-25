import React from "react";

const StartScreen = ({ numQuestion, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to REACT QUIZZ</h2>
      <h3>{numQuestion} question to master the ReactJS</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
};

export default StartScreen;
