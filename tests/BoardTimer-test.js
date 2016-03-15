import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import BoardTimer from 'src/components/BoardTimer'

describe('BoardTimer component', function() {
  it('callback after timeout', function(done) {
    let renderer = createRenderer();
    let spy = expect.createSpy();
    renderer.render(<BoardTimer timeout={2} onTimeout={spy} />);

    this.timeout(5000);
    setTimeout(() => {
      expect(spy).toHaveBeenCalled();
      done();
    }, 3000);
  });
});