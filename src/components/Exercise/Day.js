import { Container } from "react-bootstrap";
import ExerciseCard from "./ExerciseCard";

const data = [{
    id: 'e1',
    name: 'Incline Bench press',
    currentLoad: 10,
    sets: {1: 12, 2: 8, 3: 8, 4:8},
}]

const Day = () => {
    return(
        <Container>
            {data.map((item) => <ExerciseCard data={item}/>)}
        </Container>
    )
};

export default Day;