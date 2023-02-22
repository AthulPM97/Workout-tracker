import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ExerciseCard from "./ExerciseCard";

const Day = (props) => {
  //store
  const pull = useSelector((state) => state.muscleGroup.pull);
  let data;
  if (props.day === "pullday") {
    data = pull;
  }
  return (
    <Container>
      {data.map((item) => (
        <ExerciseCard data={item} key={item.id} day={props.day} />
      ))}
    </Container>
  );
};

export default Day;
