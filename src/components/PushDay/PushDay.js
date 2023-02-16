import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { workoutActions } from "../../store/workoutSlice";
import Day from "../Exercise/Day";

const PushDay = () => {
  //custom hooks
  const { error, sendRequest } = useHttp();

  //store
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.muscleGroup.push);

  //side effects
  useEffect(() => {
    sendRequest(
      {
        url: "https://workout-tracker-d956e-default-rtdb.firebaseio.com/pushday.json",
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
        dispatch(workoutActions.setPush(exercisesArray));
      }
    );
    if(error) console.log('error fetching data' + error);
  }, []);

  return <Day data={exercises}/>;
};

export default PushDay;
