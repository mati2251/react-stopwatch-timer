import React from 'react';
import './Circle.css'

const Circle = (props) => {

    const circleCoordinates = (radius, steps, centerX, centerY) => {
        let xValues = [centerX];
        let yValues = [centerY];
        for (let i = 0; i < steps; i++) {
            xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
            yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
        }
        return {x: xValues, y: yValues}
    };

    const coordinates = circleCoordinates(40, 60, 50, 50);
    let array = [];
    for (let i = 0; i < 60; i++) {
        let tmp = 30 - i;
        if (tmp < 0) {
            tmp = 60 + tmp;
        }
        let style;
        if (props.hint === tmp) {
            style = {
                left: (coordinates.y[i]).toString() + "%",
                top: (coordinates.x[i]).toString() + "%",
                transform: "rotate(" + (360 - i * 6).toString() + "deg)",
                backgroundColor: props.tintColor,
                width: "4px"
            };
        } else {
            style = {
                left: (coordinates.y[i]).toString() + "%",
                top: (coordinates.x[i]).toString() + "%",
                transform: "rotate(" + (360 - i * 6).toString() + "deg)",
                backgroundColor: props.color
            };
        }
        array.push(<div style={style} className="react-stopwatch-timer__element" key={i}/>);
    }

    return array;

};

export default Circle;