import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { workoutActions } from "../../store/workoutSlice";
import Day from "../Exercise/Day";

const PullDay = () => {
  //custom hooks
  const { error, sendRequest } = useHttp();

  //store
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.muscleGroup.pull);

  //side effects
  useEffect(() => {
    sendRequest(
      {
        url: "https://workout-tracker-d956e-default-rtdb.firebaseio.com/pullday.json",
      },
      (data) => {
        const keys = Object.keys(data);
        let exercisesArray = [];
        keys.forEach((key) => {
          const exerciseWithId = {
            ...data[key],
            id: key,
          };
          exercisesArray.push(exerciseWithId);
        });
        dispatch(workoutActions.setPull(exercisesArray));
      }
    );
    if(error) console.log('error fetching data' + error);
  }, []);

  return <Day data={exercises} day='pullday'/>;
};

export default PullDay;