import React, { Component } from 'react';
import Questionnaire from '../components/Questionnaire';
import Result from '../components/Result';
import questionnaireQuestions from '../api/questionnaireQuestions';
import  '../stylesheets/App.css';

class StartQuestionnaire extends Component {
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
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  // populate our app's state
  componentDidMount() {
    const shuffledAnswerOptions = questionnaireQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: questionnaireQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  // function to shuffle the array of answers just to spice things up
  shuffleArray(array) {
    var currentIndex = array.length, 
        temporaryValue, 
        randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < questionnaireQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: questionnaireQuestions[counter].question,
      answerOptions: questionnaireQuestions[counter].answers,
      answer: ''
    });
  }

  // this function can be used to find the most answers with a certain tag, then we could base our result
// on the final page off of that. 
getResults() {
  const answersCount = this.state.answersCount;
  const answersCountKeys = Object.keys(answersCount);
  const answersCountValues = answersCountKeys.map(key => answersCount[key]);
  const maxAnswersCount = Math.max.apply(null, answersCountValues);

  console.log({answersCountKeys, answersCountValues});
  console.log(answersCountKeys);
  console.log(answersCountValues);
  console.log(maxAnswersCount);
  return answersCountKeys.filter(key => answersCount[key] === maxAnswersCount);
}

setResults (result) {
  if (result.length === 1) {
    this.setState({ result: result[0] });
  } else {
    this.setState({ result: 'Undetermined' })
  }
}

renderQuestionnaire() {
  return (
    <Questionnaire
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={questionnaireQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
     />
  );
}

renderResult() {
  if (this.state.result === "fitness") {
    console.log(this.state.answerOptions);
    return <Result questionnaireResult={this.state.result} />;
  }
}

render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Yes Man! Questionnaire</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuestionnaire()}
      </div>
    )
  }
}

export default StartQuestionnaire;