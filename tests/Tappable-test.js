import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { getMountedInstance } from 'react-shallow-testutils'

import Tappable from 'src/components/Tappable'

describe('Tappable component', () => {
  it('change state when tapped', () => {
    let renderer = createRenderer();
    renderer.render(<Tappable score={1} size={10} />);
    let component = getMountedInstance(renderer);
    component.handleTap();
    expect(component.state.isTapped).toBe(true);
  });

  it('callback when tapped', () => {
    let renderer = createRenderer();
    let spy = expect.createSpy();
    renderer.render(<Tappable score={1} size={10} onTap={spy} />);
    let component = getMountedInstance(renderer);
    component.handleTap();
    expect(spy).toHaveBeenCalledWith(1);
  });
})
