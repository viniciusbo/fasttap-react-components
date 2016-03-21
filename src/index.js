import React from 'react'
import {render} from 'react-dom'

import Match from './components/Match'

let player = {
  id: 1,
  nick: 'Player #1'
};

let opponent = {
  id: 2,
  nick: 'Player #2'
};

let onMatchEnd = (didWin) => {
  if (didWin === true)
    return console.log('YOU WIN!');

  console.log('YOU LOSE....');
};

render(<Match player={player} opponent={opponent} onMatchEnd={onMatchEnd} />, document.querySelector('#app'))