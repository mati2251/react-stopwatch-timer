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
**displaySeconds:** `true`(default) or `false` If you don't need seconds in your watch you can set this props for false
### Example use:
## 4 License
_GNU General Public License v3.0_