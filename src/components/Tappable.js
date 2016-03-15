import React from 'react'
import classNames from 'classnames'

export default class Tappable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTapped: false };
  }

  render() {
    const classes = classNames('tappable', {
      'bounceIn': this.state.isTapped === false,
      'bounceOut': this.state.isTapped === true
    });

    return (
      <button
        className={classes}
        style={this.getStyle()}
        onClick={this.handleTap.bind(this)}
        disabled={this.state.isTapped}>
      </button>
    );
  }

  getStyle() {
    return {
      top: this.props.posY + 'vem',
      left: this.props.posX + 'vem',
      width: this.props.size + 'vem',
      height: this.props.size + 'vem'
    };
  }

  handleTap() {
    this.setState({ isTapped: true });

    if (this.props.onTap)
      this.props.onTap(this.props.score);
  }
}

Tappable.propTypes = {
  score:React.PropTypes.number.isRequired,
  size: React.PropTypes.number.isRequired,
  onTap: React.PropTypes.func
};
