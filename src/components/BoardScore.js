import React from 'react'

export default class BoardScore extends React.Component {
  render() {
    return (
      <div className="board-score">
        <span className="board-score-item board-score-item--player">Your score: {this.props.playerScore}</span>
        <span className="board-score-item board-score-item--opponent">Opponent score: {this.props.opponentScore}</span>
        {this.winOrLose()}
      </div>
    );
  }

  winOrLose() {
    if (this.props.playerScore > this.props.opponentScore)
      return (
        <span className="board-score-result board-score-result--win">You WIN!</span>
      );

    return (
      <span className="board-score-result board-score-result--lose">You lose...</span>
    );
  }
}

MatchDetails.propTypes = {
  playerScore: React.PropTypes.number.isRequired,
  opponentScore: React.PropTypes.number.isRequired**
};