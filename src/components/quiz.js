import React from "react";
import { QuestionComponent } from "./QuestionArea";
import { ReviewSubmissionComponent } from "./review";
import "../styling/styles.css";
import {TimerComponent} from "./timer";
import {Navigate} from "./navigate";


export class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      submissionData: {},
    };
  }

  updateSubmissionData = (index, value) => {
    const submissionData = Object.assign({}, this.state.submissionData);
    submissionData[index] = value;
    this.setState({
      submissionData,
    });
  };

 
  onPreviousQuestion = () => {
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1,
      });
    }
  };

  onNextQuestion = () => {
    if (this.state.currentQuestion < this.props.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    }
  };


  getFinalScore = () => {
    let score = 0, marks=0;
    Object.keys(this.state.submissionData).map((questionIndex) => {
      const attemptedAnswer = this.state.submissionData[questionIndex];
      const expectedAnswer = this.props.questions[parseInt(questionIndex)]
        .answer;
        const mak=this.props.questions[parseInt(questionIndex)].marks;
      if (expectedAnswer == attemptedAnswer) {
        
        score=score+mak;
      }
    });
    return score;
  };

  onSubmit = () => {
    const score = this.getFinalScore();
    this.props.onSubmit(score);
  };
 onNav = (num) => {
   this.setState({
    currentQuestion: num,
   });
 };

  renderNavigationHeader = () => {
    return (
        <div className={"navigation-header"}>
        <div class="prev">
          {this.state.currentQuestion > 0 && (
            <button
             className={"btn btn-danger"}
              onClick={this.onPreviousQuestion}
            >
              Previous
            </button>
          )}
          </div>

<div class="next">
          {this.state.currentQuestion < this.props.questions.length - 1 && (
            <button
              className={"btn btn-danger "}
              onClick={this.onNextQuestion}
            >
              Next
            </button>
          )}
          </div>
        </div>

    );
  };

  renderNavigationFooter = () => {
    const attemptedQuestions = Object.keys(this.state.submissionData);
    return (
      <button className={"btn btn-success"} onClick={this.onSubmit}>
        Submit
      </button>
    );
  };

  render() {
    return (
      <div>
            <div class="main">
      <div class="row">
      
        <div  class="col-6" className={"question-container"}>
        <h6 className={"title"}>Attempt Questions Here</h6>
          <QuestionComponent
            questionIndex={this.state.currentQuestion}
            activeQuestion={this.props.questions[this.state.currentQuestion]}
            updateSubmissionData={this.updateSubmissionData}
            selectedOption={
              this.state.submissionData[this.state.currentQuestion]
            }
          ></QuestionComponent>
          <div class="next-btn">
          {this.renderNavigationHeader()}</div>
          <div class="submit-btn">
           {this.renderNavigationFooter()}</div>
          </div>
          <div class="col-2" className={"right-container"}>
          
            <TimerComponent duration={900} timeoutFn={this.onSubmit}></TimerComponent>
            <Navigate navifn={this.onNav}>
            </Navigate>
            </div>
         </div>
          </div>
          <div  className={"review-box"}>
        <ReviewSubmissionComponent
          submissionData={this.state.submissionData}
          totalQuestionsCount={this.props.questions.length}
        ></ReviewSubmissionComponent>
        </div>
        </div>
    );
  }
}
