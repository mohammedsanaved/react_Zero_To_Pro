import React from "react";

const Progress = ({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + +(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1}/{numQuestion}
        </strong>
      </p>
      <p>
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
