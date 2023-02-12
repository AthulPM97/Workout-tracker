import { Card } from "react-bootstrap";
import Sets from "./Sets";

const ExerciseCard = (props) => {
    return(
        <Card>
            <Card.Header>
                {props.data.name}
            </Card.Header>
            <Card.Body>
                <p>Current Load: </p>
                <input type="number" value={props.data.currentLoad} />
                <Sets sets={props.data.sets} />
            </Card.Body>
        </Card>
    )
}

export default ExerciseCard;