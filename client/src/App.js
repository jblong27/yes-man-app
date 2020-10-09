import React from "react";
import Question from './components/Question';

function App() {
  return (

    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Yes Man! Questionnaire</h2>
      </div>
      <Question content="" />
    </div>
  );
}
export default App;