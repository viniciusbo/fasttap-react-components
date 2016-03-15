import React from 'react'

export default class BoardTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeleft: this.props.timeout };
    this.interval = setInterval(this.decreaseTimeleft.bind(this, 1), 1000);
  }

  decreaseTimeleft(amount) {
    if (this.state.timeleft <= 0) {
      clearInterval(this.interval);
      return this.props.onTimeout();
    }
    
    this.state.timeleft -= amount;
  }

  render() {
    return (
      <div className="board-timer">
        {this.state.timeleft}
      </div>
    );
  }
}

BoardTimer.propTypes = {
  timeout: React.PropTypes.number.isRequired,
  onTimeout: React.PropTypes.func.isRequired
}