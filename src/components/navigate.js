import React from "react";
import "../styling/styles.css";


export class Navigate extends React.Component {
  navfn(key){
    this.setState({
        currentQuestion: key,
      });
  }

  render() {
    return (
      <div className={"navigation-container"}>
        <h6>Quiz Navigation</h6>
        <div>
            <button class="navbutton"  >1</button>
            <button class="navbutton"  >2</button>
            <button class="navbutton" >3</button>
            <button class="navbutton" >4</button>
            <button class="navbutton" >5</button>
        </div>
      </div>
    );
  }
}
