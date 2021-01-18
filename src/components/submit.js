import React from "react";
import "../styling/styles.css"


export class SubmissionComponent extends React.Component {
    
    render() {
        return (
            <div className={'submit-area'} >
            
                <h2>You have successfully submitted the Assessment</h2>
                <span className={'submit-page'}> - <b>Question Asked</b>: {this.props.totalQuestionsCount}</span>
                <span className={'submit-page'}> - <b>Total Marks</b>: {this.props.userScore}/20</span>
                <span className={'submit-page'}> - <b>Your score</b> : {((this.props.userScore / 20) * 100).toFixed(2)}%</span>
               
            </div>
        )
    }
}