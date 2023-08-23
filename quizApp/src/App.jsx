import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import MainBody from "./MainBody";

const initiatialState = {
  questions: [],
  //loading, error,ready, active, finished
  status: "loading",
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
    default:
      throw new Error("UKnown Action");
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initiatialState);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  });
  return (
    <div className="app">
      <Header />
      <MainBody>
        <p>1/15</p>
        <p>Questions</p>
      </MainBody>
    </div>
  );
};

export default App;
