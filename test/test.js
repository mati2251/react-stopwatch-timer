import React from 'react';
import ReactTimerStopwatch from '../src/ReactTimerStopwatch';
import renderer from 'react-test-renderer';

test('test react timer stopwatch component', () => {
    const component = renderer.create(
        <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});