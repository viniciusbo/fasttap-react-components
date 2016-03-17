import React from 'react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeleft: this.props.timeout };
    this.checkTimeout();
    this.interval = setInterval(this.onTick.bind(this), 1000);
  }

  checkTimeout() {
    if (this.state.timeleft <= 0) {
      clearInterval(this.interval);
      this.props.onTimeout();
    }
  }

  onTick(amount) {
    this.setState({ timeleft: this.state.timeleft - 1 });
    this.checkTimeout();
  }

  render() {
    return (
      <div className="timer">
        <span className="timer-counter">{this.state.timeleft}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  timeout: React.PropTypes.number.isRequired,
  onTimeout: React.PropTypes.func.isRequired
}