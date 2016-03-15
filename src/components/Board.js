import React from 'react'

import BoardStatusBar from './BoardStatusBar'
import BoardTimer from './BoardTimer'
import Tappable from './Tappable'

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasStarted: false };
  }

  render() {
    return (
      <div className="board">
        <BoardStatusBar score={this.props.score} />

        {this.getContent()}
      </div>
    );
  }

  getContent() {
    if (this.state.hasStarted === false)
      return (<BoardTimer timeout={this.props.freezetime} onTimeout={this.onTimerEnd.bind(this)} />)

    return this.generateTappable();
  }

  onTimerEnd() {
    console.log('onTimerEnd');
    this.setState({ hasStarted : true });
    this.props.onStart();
  }

  generateTappable() {
    var score = 1;
    return (
      <Tappable score={score} onTap={this.onTap.bind(this)} />
    );
  }

  onTap(newScore) {
    this.props.onNewScore(newScore);
  }
}

Board.propTypes = {
  score: React.PropTypes.number.isRequired,
  freezetime: React.PropTypes.number.isRequired,
  onStart: React.PropTypes.func.isRequired,
  onNewScore: React.PropTypes.func.isRequired
};