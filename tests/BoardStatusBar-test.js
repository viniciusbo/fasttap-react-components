import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'

import BoardStatusBar from 'src/components/BoardStatusBar'

describe('BoardStatusBar component', () => {
  it('mount', () => {
    let tree = renderIntoDocument(<BoardStatusBar score={10} timeleft={30} />);
    expect(tree).toBeA(BoardStatusBar);
  });
})
