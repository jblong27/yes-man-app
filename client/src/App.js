import React, { Component } from "react";
import Question from './components/Question';
import Questionnaire from './components/Questionnaire';
import  './stylesheets/App.css';
import './api/questionnaireQuestions';
import questionnaireQuestions from "./api/questionnaireQuestions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
  
  componentDidMount() {
    const shuffledAnswerOptions = questionnaireQuestions.map((question) => this.shuffleArray(question.answers));
  }

    this.handleanswerSelected = this.handleanswerSelected.bind(this);
  }
  // // return (

  // //   <div className="App">
  // //     <div className="App-header">
  // //       <h2>Yes Man! Questionnaire</h2>
  // //     </div>
  // //     <Question content="Hello world" />
  // //   </div>
  // );
}
export default App;