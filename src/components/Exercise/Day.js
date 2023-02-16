import { Container } from "react-bootstrap";
import ExerciseCard from "./ExerciseCard";

const Day = (props) => {
  return (
    <Container>
      {props.data.map((item) => (
        <ExerciseCard data={item} key={item.id} day={props.day}/>
      ))}
    </Container>
  );
};

export default Day;
