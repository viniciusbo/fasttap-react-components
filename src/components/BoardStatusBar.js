import React from 'react'

export default class BoardStatusBar extends React.Component {
  render() {
    return (
      <div className="board-statusbar">
        <span className="board-statusbar-score">
          {this.props.score}
        </span>

        <span className="board-statusbar-timeleft">
          {this.props.timeleft % 60}:{parseInt(this.props.timeleft / 60)}
        </span>
      </div>
    );
  }
}

BoardStatusBar.propTypes = {
  score: React.PropTypes.number.isRequired,
  timeleft: React.PropTypes.number.isRequired
};