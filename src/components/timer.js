import React from 'react';

export  class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  tick() {
    const { duration, timeoutFn } = this.props;
    if (this.state.seconds === duration) {
        timeoutFn();
    } else {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { duration } = this.props;
    let timeLeft = duration - this.state.seconds;
    var hours = parseInt( timeLeft / 3600 ) % 24;
		var minutes = parseInt( timeLeft / 60 ) % 60;
		var seconds = timeLeft % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);      
    return <span>Time Left: {result}</span>;
  }
}