import React from 'react'

import Board from './Board'

export default class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 }

    let totalDuration = this.props.duration + this.props.freezetime;
    setTimeout(this.onMatchEnd.bind(this), totalDuration * 1000);
  }

  onMatchEnd() {
    this.props.onMatchEnd(this.state.score);
  }

  render() {
    return (
      <Board score={this.state.score} freezetime={this.props.freezetime} onStart={this.onStart} onNewScore={this.onNewScore.bind(this)} />
    );
  }

  onStart() {
    if (this.props.onMatchStart)
      this.props.onMatchStart();
  }

  onNewScore(score) {
    this.setState({
      score: this.state.score + score
    });
  }
}

Match.propTypes = {
  player: React.PropTypes.object.isRequired,
  opponent: React.PropTypes.object.isRequired,
  duration: React.PropTypes.number.isRequired,
  freezetime: React.PropTypes.number.isRequired,
  onMatchStart: React.PropTypes.func,
  onMatchEnd: React.PropTypes.func.isRequired
};