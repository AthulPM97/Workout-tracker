import { Button, Col, Form, Row } from "react-bootstrap";

const Sets = (props) => {

  //handlers
  const submitHandler = () => {
    props.onComplete();
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
            <Form.Control type="number" value={props.sets[1]} />
            <Form.Label>Set 4</Form.Label>
            <Form.Control type="number" value={props.sets[4]} />
          </Col>
          <Col>
            <Form.Label>Set 2</Form.Label>
            <Form.Control type="number" value={props.sets[2]} />
            <Form.Label>Set 5</Form.Label>
            <Form.Control type="number" value={props.sets[5]} />
          </Col>
          <Col>
            <Form.Label>Set 3</Form.Label>
            <Form.Control type="number" value={props.sets[3]} />
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
