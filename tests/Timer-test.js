import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import Timer from 'src/components/Timer'

describe('Timer component', () => {
  it('callback on timeout', function(done) {
    let spy = expect.createSpy();
    let renderer = createRenderer();
    renderer.render(<Timer timeout={1} onTimeout={spy} />);
    this.timeout(5000);
    setTimeout(() => {
      expect(spy).toHaveBeenCalled();
      done();
    }, 2500);
  });

  it('callback immediatly when timeout is zero', () => {
    let spy = expect.createSpy();
    let renderer = createRenderer();
    renderer.render(<Timer timeout={0} onTimeout={spy} />);
    expect(spy).toHaveBeenCalled();
  });
});