import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ExerciseCard from "./ExerciseCard";

const Day = (props) => {
  //store
  const push = useSelector((state) => state.muscleGroup.push);
  const legs = useSelector((state) => state.muscleGroup.legs);
  const pull = useSelector((state) => state.muscleGroup.pull);
  let data;
  if (props.day === "pullday") {
    data = pull;
  }
  if (props.day === "pushday") {
    data = push;
  }
  if (props.day === "legday") {
    data = legs;
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
