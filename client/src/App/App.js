import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

import Question from '../components/Question';

ReactDOM.render(
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Yes Man! Questionnaire</h2>
    </div>
    <Question content="" />
  </div>
);