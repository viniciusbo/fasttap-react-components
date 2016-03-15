import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
import { createRenderer, Simulate } from 'react-addons-test-utils'
import { isDOMComponent } from 'react-shallow-testutils'

import BoardStatusBar from 'src/components/BoardStatusBar'

describe('BoardStatusBar component', () => {
  it('mount', () => {
    let renderer = createRenderer();
    renderer.render(<BoardStatusBar score={10} timeLeft={30} />);
    expect(isDOMComponent(renderer.getRenderOutput())).toBe(true);
  });
})
