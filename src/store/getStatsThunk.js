import { workoutActions } from "./workoutSlice";

export const sendMail = () => {
  return async (dispatch) => {
    const getPushStats = async () => {
      const response = await fetch(
        `https://workout-tracker-d956e-default-rtdb.firebaseio.com/pushday.json`
      );
      if (!response.ok) {
        alert("Failed to send mail. Try again!");
      } else {
        const data = await response.json();
        dispatch(workoutActions.setPush(data));
      }
    };

    try {
      await getPushStats();
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };
};
