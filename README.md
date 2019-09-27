# React Timer Stopwatch
## 1. What is it
This is open source project contain React component **ReactTimerStopwatch** which have timer and stopwatch.
## 2. Download
If you use **npm** <br/>
`npm install --save react-stopwatch-timer` <br/>
Or **yarn** <br/>
`yarn add react-stopwatch-timer`
## 3. Usage
You can import component like below: <br/>
`import ReactStopwatchTimer from 'react-stopwatch-timer';` <br/>
### Props:
**isOn:** `true` or `false`(default) true make stopwatch or timer will start <br/>
**watchType:** `stopwatch` or `timer` default variable is unset. In this props you can choose to your watch work like stopwatch or timer <br/>
**fromTime:** `Date` object, default is present time. [More about Date](https://www.w3schools.com/js/js_dates.asp). This props set time for stopwatch or timer will start it <br/>
**displayCircle:** `true` or `false`(default) decide about display beautiful circle around timer or stopwatch <br/>
**children:** You can put some button or etc. inside circle <br/>
**displayHours:** `true`(default) or `false` If you don't need hours in your watch you can set this props for false <br/>
**displayMinutes:** `true`(default) or `false` If you don't need minutes in your watch you can set this props for false <br/>
**displaySeconds:** `true`(default) or `false` If you don't need seconds in your watch you can set this props for false <br/>
**color:** circle elements color. Default props is unset<br/>
**hintColor:** hint color. Default props is unset
**callback:** function start after timer finish works
### Example use:
#### Watch without circle
![example](https://raw.githubusercontent.com/mati2251/react-stopwatch-timer/master/.github/example-without-circle.png) <br/>
```js
import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';

const App = () => {
    return (
            <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"/>
    );
};

export default App;
```
#### Watch with circle
![example](https://raw.githubusercontent.com/mati2251/react-stopwatch-timer/master/.github/example-watch-circle.png) <br/>
```js
import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';

const App = () => {
    return (
            <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch" displayCricle={true} color="gray" hintColor="red"/>
    );
};

export default App;
```
#### Stopwatch
![example](https://raw.githubusercontent.com/mati2251/react-stopwatch-timer/master/.github/stopwatch.png) </br>
```js
import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';

const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);

const App = () => {
    return (
        <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"
                             displayCricle={true} color="gray" hintColor="red" fromTime={fromTime}/>
    );
};

export default App;
```
#### Timer
![example](https://raw.githubusercontent.com/mati2251/react-stopwatch-timer/master/.github/timer.png) <br/>
```js
import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';

const fromTime = new Date(0, 0, 0, 0, 10, 0, 0);

const App = () => {
    return (
        <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="timer"
                             displayCricle={true} color="gray" hintColor="red" fromTime={fromTime}/>
    );
};

export default App;
```
#### Without Hours
![example](https://raw.githubusercontent.com/mati2251/react-stopwatch-timer/master/.github/without-houers.png) <br/>
```js
import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';

const fromTime = new Date(0, 0, 0, 0, 10, 0, 0);

const App = () => {
    return (
        <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="timer"
                             displayCricle={true} color="gray" hintColor="red" fromTime={fromTime} displayHours={false}/>
    );
};

export default App;
```
#### With button inside circle
![example](https://raw.githubusercontent.com/mati2251/react-stopwatch-timer/master/.github/withButton.png) <br/>
 ```js
import React, {useState} from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';

const fromTime = new Date(0, 0, 0, 0, 10, 0, 0);

const App = () => {

    const [isOn, setIsOn] = useState(false);

    return (
        <ReactTimerStopwatch isOn={isOn} className="react-stopwatch-timer__table" watchType="timer"
                             displayCricle={true} color="gray" hintColor="red" fromTime={fromTime} displayHours={false}>
            <button onClick={() => setIsOn(true) }>START</button>
        </ReactTimerStopwatch>
    );
};

export default App;
```
#### Custom style circle element
![example](https://raw.githubusercontent.com/mati2251/react-stopwatch-timer/master/.github/custom-element.png) <br/>
in js file: 
`import './App.css'` <br/>
in css or scss file: <br/>
```css
.react-stopwatch-timer__element {
    width: 3px !important;
    height: 3px !important;
    border-radius: 5px;
}

.react-stopwatch-timer__table{
    width: 300px !important;
    height: 300px !important;
}
```
## 4 License
_GNU General Public License v3.0_
## 5 Code Link
[Click here](https://github.com/mati2251/react-stopwatch-timer)
## Author
Mateusz Karłowski [Github Profile](https://github.com/mati2251)