import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { findWithType, getMountedInstance } from 'react-shallow-testutils'

import Match from 'src/components/Match'
import Board from 'src/components/Board'

describe('Match component', () => {
  it('has a board', () => {
    let renderer = createRenderer();
    renderer.render(<Match player={{}} opponent={{}} duration={60} freezetime={5} onMatchEnd={() => {}} />);
    let board = findWithType(renderer.getRenderOutput(), Board);
    expect(board).toExist();
  });

  it('callback on match end', function(done) {
    let renderer = createRenderer();
    let spy = expect.createSpy();
    renderer.render(<Match player={{}} opponent={{}} duration={1} freezetime={0} onMatchEnd={spy} />);
    this.timeout(5000);
    setTimeout(() => {
      expect(spy).toHaveBeenCalled();
      done();
    }, 1200);
  });
});