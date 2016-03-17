import React from 'react'

import BoardStatusBar from './BoardStatusBar'
import Tappable from './Tappable'

export default class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <BoardStatusBar
          timeleft={this.props.timeleft}
          score={this.props.score} />

        {this.generateTappable()}
      </div>
    );
  }

  generateTappable() {
    var score = 1;
    return (
      <Tappable
        size={1}
        score={score}
        onTap={this.onNewScore.bind(this)} />
    );
  }

  onNewScore(score) {
    this.props.onNewScore(score);
  }
}

Board.propTypes = {
  score: React.PropTypes.number.isRequired,
  timeleft: React.PropTypes.number.isRequired,
  onNewScore: React.PropTypes.func.isRequired
};