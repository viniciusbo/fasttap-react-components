import React from 'react'

import Board from './Board'
import Timer from './Timer'
import Score from './Score'

export default class Match extends React.Component {
  constructor(props) {
    super(props);
    let timeleft = this.props.freezetime + this.props.duration;
    this.state = {
      score: 0,
      timeleft: timeleft,
      hasStarted: this.props.freezetime === 0 ? true : false,
      hasEnded: timeleft === 0 ? true : false
    };
  }

  render() {
    if (this.state.hasEnded === true)
      return (
        <Score
          playerScore={this.state.score}
          opponentScore={10}
          didWin={true} />
      );

    if (this.state.hasStarted === true)
      return (
        <Board
          score={this.state.score}
          timeleft={this.state.timeleft}
          onNewScore={this.onNewScore.bind(this)} />
      )

    return (
      <Timer
        timeout={this.props.freezetime}
        onTimeout={this.onStart.bind(this)} />
    );
  }

  onNewScore(score) {
    if (this.props.onNewScore)
      this.props.onNewScore(score);

    this.setState({
      score: this.state.score + score
    });
  }

  onStart() {
    if (this.props.onStart)
      this.props.onStart();

    setInterval(this.onTick.bind(this), 1000);
    setTimeout(this.onEnd.bind(this), (this.props.duration + this.props.freezetime) * 1000);

    this.setState({
      timeleft: this.props.duration,
      hasStarted: true
    });
  }

  onTick() {
    this.setState({
      timeleft: this.state.timeleft - 1
    });
    this.checkMatchEnd();
  }

  checkMatchEnd() {
    if (this.state.timeleft > 0)
      return;

    this.setState({
      hasEnded: true
    });
  }

  onEnd() {
    this.props.onEnd(this.state.score);
    this.setState({
      hasEnded: true
    });
  }
}

Match.propTypes = {
  player: React.PropTypes.object.isRequired,
  opponent: React.PropTypes.object.isRequired,
  duration: React.PropTypes.number.isRequired,
  freezetime: React.PropTypes.number.isRequired,
  onStart: React.PropTypes.func,
  onNewScore: React.PropTypes.func,
  onEnd: React.PropTypes.func.isRequired
};