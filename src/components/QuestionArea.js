import React from "react";
import '../styling/styles.css'

export class QuestionComponent extends React.Component {
  onValueChange = (value) => {
    this.props.updateSubmissionData(this.props.questionIndex, value);
  };

  renderOptions = () => {
    const question = this.props.activeQuestion;
    return question.options.map((option) => {
      return (
        <label className={'question-option'}>
          <input
            type="radio"
            value={option.value}
            checked={this.props.selectedOption === option.value}
            onChange={() => this.onValueChange(option.value)}
          />
          {option.displayText}
        </label>
      );
    });
  };

  render() {
    return (
      <div class="row" >
      <div class="col-4" className={'question-no'}>
          <div>Question {this.props.questionIndex + 1}</div>
          <div>Marked out of {this.props.activeQuestion.marks}</div>
      </div>
      <div class="col-8" className={'title-options'} >
        <span className={'question-title'}>{this.props.activeQuestion.questionText}</span>
        {this.renderOptions()}
      </div>
      </div>
    );
  }
}
