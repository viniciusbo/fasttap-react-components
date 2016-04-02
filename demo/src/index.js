import React from 'react'
import { render } from 'react-dom'
import Match from '../../src/components/Match'

let player = {
  id: 1,
  nick: 'Player #1'
};

let opponent = {
  id: 2,
  nick: 'Player #2'
};

let onStart = (didWin) => {
  if (didWin === true)
    return console.log('YOU WIN!');

  console.log('YOU LOSE...');
};

let component = (
  <Match
    player={player}
    opponent={opponent}
    onStart={onStart}
    onNewScore={() => {}}
    onEnd={() => {}}
    duration={60}
    freezetime={5} />
);

render(component, document.querySelector('#demo'));
