import React, { useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { workoutActions } from "../../store/workoutSlice";
import BreakTimer from "./BreakTimer";
import Sets from "./Sets";

const ExerciseCard = (props) => {
  //custom hooks
  const { error, sendRequest } = useHttp();

  //store
  const dispatch = useDispatch();

  //refs
  const currentLoad = useRef();

  //states
  const [showGroup, setShowGroup] = useState(false);

  //handlers
  const showCardHandler = () => {
    setShowGroup((prev) => !prev);
  };

  const submitDataHandler = (sets) => {
    const data = {
      name: props.data.name,
      currentLoad: currentLoad.current.value,
      sets: sets,
    };
    sendRequest(
      {
        url: "https://workout-tracker-d956e-default-rtdb.firebaseio.com/pushday.json",
        method: "POST",
        body: data,
      },
      (responseData) => {
        const dataWithId = {
          ...data,
          id: responseData.name,
        }
        dispatch(workoutActions.addToPush(dataWithId));
      }
    );

    setShowGroup(false);
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          {props.data.name}
          <Button
            variant="outline-warning"
            style={{ float: "right" }}
            onClick={showCardHandler}
          >
            Expand
          </Button>
        </Card.Header>
        {showGroup && (
          <Card.Body>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Current Load</Form.Label>
                  <Form.Control
                    type="number"
                    value={props.data.currentLoad}
                    ref={currentLoad}
                  />
                </Form.Group>
              </Col>
              <Col>
                <BreakTimer />
              </Col>
            </Row>
            <br />
            <Sets sets={props.data.sets} onComplete={submitDataHandler} />
          </Card.Body>
        )}
      </Card>
      <br />
    </React.Fragment>
  );
};

export default ExerciseCard;
