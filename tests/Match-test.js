import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { findWithType, getMountedInstance } from 'react-shallow-testutils'

import Match from 'src/components/Match'
import Board from 'src/components/Board'
import Timer from 'src/components/Timer'
import Score from 'src/components/Score'

describe('Match component', () => {
  beforeEach(function() {
    this.onStart = expect.createSpy();
    this.onNewScore = expect.createSpy();
    this.onEnd = expect.createSpy();
    this.fixture = <Match
      player={{}}
      opponent={{}}
      duration={60}
      freezetime={5}
      onStart={this.onStart}
      onNewScore={this.onNewScore}
      onEnd={this.onEnd} />;
    this.renderer = createRenderer();
    this.renderer.render(this.fixture);
    this.component = getMountedInstance(this.renderer);
  });

  it('show board on match start', function() {
    this.component.onStart();
    let tree = this.renderer.getRenderOutput();
    let board = findWithType(tree, Board);
    expect(board).toExist();
  });

  it('show timer before freezetime timeout', function() {
    let tree = this.renderer.getRenderOutput();
    let timer = findWithType(tree, Timer);
    expect(timer).toExist();
  });

  it('callback on start', function() {
    this.component.onStart();
    expect(this.onStart).toHaveBeenCalled();
  });

  it('callback on new score', function() {
    this.component.onNewScore();
    expect(this.onNewScore).toHaveBeenCalled();
  });

  it('callback on match end', function() {
    this.component.onEnd();
    expect(this.onEnd).toHaveBeenCalled();
  });

  it('show score after match end', function() {
    this.component.onEnd();
    let tree = this.renderer.getRenderOutput();
    let score = findWithType(tree, Score);
    expect(score).toExist();
  });
});