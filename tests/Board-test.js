import expect from 'expect'
import React from 'react'
import { renderIntoDocument, findRenderedComponentWithType, createRenderer } from 'react-addons-test-utils'
import { getMountedInstance } from 'react-shallow-testutils'

import Board from 'src/components/Board'

describe('Board component', () => {
  it('callback on new score', function() {
    let spy = expect.createSpy();
    let shallowRenderer = createRenderer();
    shallowRenderer.render(<Board score={1} timeleft={1} onNewScore={spy} />);
    let component = getMountedInstance(shallowRenderer);
    component.onNewScore();
    expect(spy).toHaveBeenCalled();
  });
});