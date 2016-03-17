import expect from 'expect'
import React from 'react'
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-addons-test-utils'

import Score from 'src/components/Score'

describe('Score component', () => {
  it('show you win', () => {
    let tree = renderIntoDocument(<Score playerScore={10} opponentScore={5} didWin={true} />);
    let youWinScoreResult = findRenderedDOMComponentWithClass(tree, 'score-result--win');
    expect(youWinScoreResult).toExist();
  });

  it('show you lose', () => {
    let tree = renderIntoDocument(<Score playerScore={5} opponentScore={10} didWin={false} />);
    let youLoseScoreResult = findRenderedDOMComponentWithClass(tree, 'score-result--lose');
    expect(youLoseScoreResult).toExist();
  });
});