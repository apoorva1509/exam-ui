import React from "react";
import { Quiz } from './quiz'
import "../styling/styles.css"
import { SubmissionComponent } from "./submit";
import questions from './data'

const ViewType = {
  Welcome: 'Welcome',
  Quiz: 'Quiz',
  Submission: 'Submission'
}

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentView: ViewType.Welcome,
      userScore: 0
    };
  }

  startQuiz = () => {
    this.setState({
      currentView: ViewType.Quiz
    })
  }

  submitQuiz = (score) => {
    this.setState({
      currentView: ViewType.Submission,
      userScore: score
    })
  }

  renderQuizPage = () => {
    return <Quiz questions={this.state.questions} onSubmit={this.submitQuiz}></Quiz>
  }

  renderSubmissionPage = () => {
    return <SubmissionComponent totalQuestionsCount={this.state.questions.length} userScore={this.state.userScore}></SubmissionComponent>
  }

  renderWelcomePage = () => {
    return <div className={'welcome-page'}>
      <h2>Attempt the Quiz</h2>
      <div>
        <h5>Instruction</h5>
          <p>Total Number Of Questions:5</p>
          <p>Time Alloted:15</p>
          <p>No Negative Marking</p>

      </div>
      <button className={"btn btn-success"} onClick={this.startQuiz}>Start </button>
    </div>
  }

  render() {
    switch (this.state.currentView) {
      case ViewType.Quiz:
        return this.renderQuizPage();
      case ViewType.Submission:
        return this.renderSubmissionPage();
      default:
        return this.renderWelcomePage();
    }
  }
}
