import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { findWithType, findAllWithType, getMountedInstance } from 'react-shallow-testutils'

import Match from 'src/components/Match'
import Board from 'src/components/Board'
import Timer from 'src/components/Timer'
import Score from 'src/components/Score'

describe('Match component', () => {
  it('has a board', () => {
    let renderer = createRenderer();
    renderer.render(<Match player={{}} opponent={{}} duration={60} freezetime={0} onEnd={() => {}} />);
    let tree = renderer.getRenderOutput();
    let found = findAllWithType(tree, Board);
    expect(found.length).toBe(1);
  });

  it('show timer before freezetime timeout', () => {
    let renderer = createRenderer();
    renderer.render(<Match player={{}} opponent={{}} duration={60} freezetime={5} onEnd={() => {}} />);
    let tree = renderer.getRenderOutput();
    let found = findAllWithType(tree, Timer);
    expect(found.length).toBe(1);
  });

  it('callback on start', () => {
    let spy = expect.createSpy();
    let renderer = createRenderer();
    renderer.render(<Match player={{}} opponent={{}} duration={60} freezetime={0} onStart={spy} onEnd={() => {}} />);
    let component = getMountedInstance(renderer);
    component.onStart();
    expect(spy).toHaveBeenCalled();
  });

  it('callback on new score', () => {
    let spy = expect.createSpy();
    let renderer = createRenderer();
    renderer.render(<Match player={{}} opponent={{}} duration={60} freezetime={0} onNewScore={spy} onEnd={() => {}} />);
    let component = getMountedInstance(renderer);
    component.onNewScore();
    expect(spy).toHaveBeenCalled();
  });

  it('callback on match end', () => {
    let spy = expect.createSpy();
    let renderer = createRenderer();
    renderer.render(<Match player={{}} opponent={{}} duration={60} freezetime={0} onEnd={spy} />);
    let component = getMountedInstance(renderer);
    component.onEnd();
    expect(spy).toHaveBeenCalled();
  });

  it('show score after match end', () => {
    let renderer = createRenderer();
    renderer.render(<Match player={{}} opponent={{}} duration={0} freezetime={0} onEnd={() => {}} />);
    let tree = renderer.getRenderOutput();
    let found = findAllWithType(tree, Score);
    expect(found.length).toBe(1);
  });
});