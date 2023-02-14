import React, { useState } from "react";

const BreakTimer = () => {
    //states
    const [timer, setTimer] = useState("03:00");

    const countdownTimeInMinutes = 3;
    const countdownTimeInSeconds = countdownTimeInMinutes * 60;

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds/60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    }

    //timer
    const countDownTimer = setInterval(() => {
        countdownTimeInSeconds--;
        const updatedTime = formatTime(countdownTimeInSeconds);
        setTimer(updatedTime);
        if(countdownTimeInSeconds <= 0) {
            clearInterval(countDownTimer);
        }
    },1000);

    return(
        <React.Fragment>
            {timer}
        </React.Fragment>
    )
}

export default BreakTimer;