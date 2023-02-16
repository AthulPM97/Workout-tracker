import { Container } from "react-bootstrap";
import ExerciseCard from "./ExerciseCard";

const Day = (props) => {
  console.log(props.data)
  return (
    <Container>
      {props.data.map((item) => (
        <ExerciseCard data={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Day;
