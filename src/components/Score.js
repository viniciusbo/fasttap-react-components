import React from 'react'

export default class Score extends React.Component {
  render() {
    return (
      <div className="score">
        {this.winOrLose()}
        <span className="score-item score-item--player">Your score: {this.props.playerScore}</span>
        <span className="score-item score-item--opponent">Opponent score: {this.props.opponentScore}</span>
      </div>
    );
  }

  winOrLose() {
    if (this.props.didWin)
      return (
        <span className="score-result score-result--win">You WIN!</span>
      );

    return (
      <span className="score-result score-result--lose">You lose...</span>
    );
  }
}

Score.propTypes = {
  playerScore: React.PropTypes.number.isRequired,
  opponentScore: React.PropTypes.number.isRequired,
  didWin: React.PropTypes.bool.isRequired
};