import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import BreakTimer from "./BreakTimer";
import Sets from "./Sets";

const ExerciseCard = (props) => {
  const [showGroup, setShowGroup] = useState(false);

  //handlers
  const showCardHandler = () => {
    setShowGroup((prev) => !prev);
  };

  const submitDataHandler = () => {
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
                <Form.Control type="number" value={props.data.currentLoad} />
              </Form.Group>
            </Col>
            <Col><BreakTimer/></Col>
          </Row>
          <br />
          <Sets sets={props.data.sets} onComplete={submitDataHandler} />
        </Card.Body>
      )}
    </Card>
    <br/>
    </React.Fragment>
  );
};

export default ExerciseCard;
