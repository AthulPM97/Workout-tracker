import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Sets from "./Sets";

const ExerciseCard = (props) => {
  const [showGroup, setShowGroup] = useState(false);

  //handlers
  const showCardHandler = () => {
    setShowGroup((prev) => !prev);
  };

  return (
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
          <p>Current Load: </p>
          <input type="number" value={props.data.currentLoad} />
          <Sets sets={props.data.sets} />
        </Card.Body>
      )}
    </Card>
  );
};

export default ExerciseCard;
