import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const BreakTimer = () => {
  //states
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  //format time function
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  //side effects
  useEffect(() => {
    let intervalId;
    if (timerActive && timer < 180) {
      intervalId = setInterval(() => {
        setTimer((count) => count + 1);
      }, 1000);
    } else if (timer === 180) {
      setTimerActive(false);
      setTimer(0);
    }

    return () => clearInterval(intervalId);
  }, [timer, timerActive]);

  //handlers
  const startTimerHandler = () => {
    setTimerActive(state => !state);
  };
  const stopTimerHandler = () => {
    setTimerActive(state => !state);
    setTimer(0)
  };

  return (
    <React.Fragment>
      <p>Break Timer:</p>
      <Row>
        <Col
          className="border"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {formatTime(timer)}
        </Col>
        <Col>
          <Button
            variant="danger"
            onClick={stopTimerHandler}
            style={{ float: "right" }}
          >
            Stop
          </Button>
          <Button
            variant="primary"
            onClick={startTimerHandler}
            style={{ float: "right" }}
          >
            Start
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreakTimer;
