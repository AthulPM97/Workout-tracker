import { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Sets = (props) => {
  //refs
  const set1 = useRef();
  const set2 = useRef();
  const set3 = useRef();
  const set4 = useRef();
  const set5 = useRef();

  //handlers
  const submitHandler = (event) => {
    event.preventDefault();
    const sets = {
      1: set1.current.value,
      2: set2.current.value,
      3: set3.current.value,
      4: set4.current.value,
      5: set5.current.value,
    }
    props.onComplete(sets);
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group
        style={{
          display: "flex",
          alignContent: "space-between",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <Form.Label>Set 1</Form.Label>
            <Form.Control type="number" value={props.sets[1]} ref={set1}/>
            <Form.Label>Set 4</Form.Label>
            <Form.Control type="number" value={props.sets[4]} ref={set4}/>
          </Col>
          <Col>
            <Form.Label>Set 2</Form.Label>
            <Form.Control type="number" value={props.sets[2]} ref={set2} />
            <Form.Label>Set 5</Form.Label>
            <Form.Control type="number" value={props.sets[5]} ref={set5} />
          </Col>
          <Col>
            <Form.Label>Set 3</Form.Label>
            <Form.Control type="number" value={props.sets[3]} ref={set3} />
          </Col>
        </Row>
      </Form.Group>
      <br />
      <Button type="submit" variant="primary">
        Done
      </Button>
    </Form>
  );
};

export default Sets;
