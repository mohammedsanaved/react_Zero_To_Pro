import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

const SECS_PER_QUESTION = 30;
const initiatialState = {
  questions: [],
  //loading, error,ready, active, finished
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  highscore: 0,
  secondRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      // this is to find the current question we are solving
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        // if user selected option is same as correctOption then state.points will set to +10 other wise 0
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      // return {
      //   ...state,
      //   status: "ready",
      //   answer: null,
      //   points: 0,
      //   highscore: 0,
      //   index: 0,
      // };
      // Optimize Way
      return {
        ...initiatialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("UKnown Action");
  }
}
const App = () => {
  const [
    { questions, status, index, answer, points, highscore, secondRemaining },
    dispatch,
  ] = useReducer(reducer, initiatialState);
  const numQuestion = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );
  console.log(maxPossiblePoints);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <MainBody>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={numQuestion}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestion={numQuestion}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </MainBody>
    </div>
  );
};

export default App;
