import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { workoutActions } from "../../store/workoutSlice";
import Day from "../Exercise/Day";

const LegDay = () => {
  //custom hooks
  const { error, sendRequest } = useHttp();

  //store
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.muscleGroup.legs);

  //side effects
  useEffect(() => {
    sendRequest(
      {
        url: "https://workout-tracker-d956e-default-rtdb.firebaseio.com/legday.json",
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
        dispatch(workoutActions.setLegs(exercisesArray));
      }
    );
    if(error) console.log('error fetching data' + error);
  }, []);

  return <Day data={exercises} day='legday'/>;
};

export default LegDay;