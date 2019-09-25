import React, {useState} from 'react';

let time;

const Time = (props) => {

    const getValidDisplayTime = (hours, minutes, seconds) => {
        let tmp = '';
        if(props.displayHours !== false){
            tmp = tmp + (hours/100).toFixed(2).slice(2);
            if(props.displayMinutes !== false){
                tmp = tmp + ":"
            }
        }
        if(props.displayMinutes !== false){
            tmp = tmp + (minutes/100).toFixed(2).slice(2);
            if(props.displaySeconds !== false){
                tmp = tmp + ":"
            }
        }
        if(props.displaySeconds !== false){
            tmp = tmp + (seconds/100).toFixed(2).slice(2);
        }
        return tmp
    };

    let defaultTime;

    if(props.fromTime !== undefined){
        defaultTime = new Date(props.fromTime);
    }
    else {
        defaultTime = new Date(Date.now())
    }

    const [text, setText] = useState(getValidDisplayTime(defaultTime.getHours(),defaultTime.getMinutes(), defaultTime.getSeconds()));
    const [idInterval, setIdInterval] = useState(0);
    const [isCount, setIsCount] = useState(false);

    const startStopwatch = () => {
        if (time === undefined) {
            if(props.fromTime !== undefined) {
                time = new Date(props.fromTime);
            }
            else {
                time = new Date(2000,0,0,0,0,0,0);
            }
        }
        let start = Date.now();
        const id = setInterval(function () {
            const delta = Date.now() - start;
            time.setMinutes(defaultTime.getMinutes());
            time.setHours(defaultTime.getHours());
            time.setSeconds(Math.floor(delta / 1000) + defaultTime.getMinutes());
            props.hint(time.getSeconds());
            setText(getValidDisplayTime(time.getHours(), time.getMinutes(), time.getSeconds()));
        }, 1000);
        setIdInterval(id)
    };

    const startTimer = () => {
        let countDownDate =new Date(Date.now());
        countDownDate.setSeconds(countDownDate.getSeconds() +defaultTime.getSeconds() + 1);
        countDownDate.setMinutes(countDownDate.getMinutes() + defaultTime.getMinutes());
        countDownDate.setHours(countDownDate.getHours() + defaultTime.getHours());
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            if (distance < 0) {
                clearInterval(x);
            }
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            props.hint(seconds);
            setText(getValidDisplayTime(hours,minutes,seconds));
        }, 1000);
    };
    if(props.isOn === true && isCount === false){
        if(props.watchType === "timer"){
            startTimer();
        }
        else if (props.watchType === "stopwatch"){
            startStopwatch()
        }
        setIsCount(true);
    }
    else if (props.isOn === false && isCount === true) {
        clearInterval(idInterval)
    }

    return(
        <React.Fragment>
            <div>{text}</div>
        </React.Fragment>
    )
};

export default Time;