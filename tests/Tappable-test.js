import expect from 'expect'
import React from 'react'
import { createRenderer, renderIntoDocument, findRenderedDOMComponentWithTag, Simulate } from 'react-addons-test-utils'
import { getMountedInstance } from 'react-shallow-testutils'

import Tappable from 'src/components/Tappable'

describe('Tappable component', () => {
  it('change state when tapped', () => {
    let renderer = createRenderer();
    renderer.render(<Tappable score={1} size={10} onTap={() => {}} />);
    let component = getMountedInstance(renderer);
    component.handleTap();
    expect(component.state.isTapped).toBe(true);
  });

  it('callback when tapped', () => {
    let spy = expect.createSpy();
    let tree = renderIntoDocument(<Tappable score={1} size={10} onTap={spy} />);
    let component = findRenderedDOMComponentWithTag(tree, 'button');
    Simulate.click(component);
    expect(spy).toHaveBeenCalledWith(1);
  });
})
