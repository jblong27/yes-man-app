import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Questionnaire from './components/Questionnaire';
import Result from './components/Result';
import questionnaireQuestions from './api/questionnaireQuestions';
import UserStore from './stores/UserStore';
import LoginForm from './components/LoginForm';
import SubmitButton from './components/SubmitButton';
import  './stylesheets/App.css';
import './api/questionnaireQuestions';

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
  }
  
  async componentDidMount() {
    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch(err) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  
    const shuffledAnswerOptions = questionnaireQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: questionnaireQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
    this.handleanswerSelected = this.handleanswerSelected.bind(this);
  }
  async doLogout() {
    try {
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }
    catch(err) {
      console.log(err);
    }
  }
  // function to shuffle the array of answers just to spice things up
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleanswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < questionnaireQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
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
        onAnswerSelected={this.handleanswerSelected}
       />
    );
  }

  renderResult() {
    return <Result questionnaireResult={this.state.result} />;
  }
  render() {
    if (UserStore.loading) {
      return (
        <div className="app">
          <div className="container">
            Loading, please wait..
          </div>
        </div>
      );
    }

    else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              Welcome {UserStore.username}

              <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={ () => this.doLogout() }
              />
            </div>
          </div>
        );
      }

      return (
        <div className="app">
          <div className="container">
              
            <LoginForm />
          </div>
        </div>
      )
    }
    return (
  
      <div className="App">
        <div className="App-header">
          <h2>Yes Man! Questionnaire</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuestionnaire()}
      </div>
    );
  }
}

export default observer(App);