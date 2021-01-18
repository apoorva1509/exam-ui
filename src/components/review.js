import React from "react";
import "../styling/styles.css";


export class ReviewSubmissionComponent extends React.Component {
  renderSubmissionDetails = () => {
    return Object.keys(this.props.submissionData).map((index) => {
      return (
        <div className={"review-text"}>
          <b>{parseInt(index) + 1}</b>: {this.props.submissionData[index]}
        </div>
      );
    });
  };

  render() {
    return (
      <div className={"review-area"}>
        <h6>Review </h6>
        {this.renderSubmissionDetails()}
      </div>
    );
  }
}
