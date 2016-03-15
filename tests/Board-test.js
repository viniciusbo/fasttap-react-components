import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { findWithType, getMountedInstance } from 'react-shallow-testutils'

import Board from 'src/components/Board'
import BoardTimer from 'src/components/BoardTimer'

describe('Board component', () => {
  it('show board timer before match start', () => {
    let renderer = createRenderer();
    renderer.render(<Board score={0} freezetime={0} onNewScore={() => {}} onStart={() => {}} />);
    let boardTimer = findWithType(renderer.getRenderOutput(), BoardTimer);
    expect(boardTimer).toExist();
  });

  it('start after freezetime', function(done) {
    let renderer = createRenderer();
    let spy = expect.createSpy();
    renderer.render(<Board score={0} freezetime={2} onNewScore={() => {}} onStart={spy} />);

    this.timeout(5000);
    setTimeout(() => {
      let component = getMountedInstance(renderer);
      let boardTimer = findWithType(renderer.getRenderOutput(), BoardTimer);
      expect(component.state.hasStarted).toBe(true);
      expect(boardTimer).toNotExist();
      expect(spy).toHaveBeenCalled();
      done();
    }, 3000);
  });
});