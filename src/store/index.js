import { configureStore } from "@reduxjs/toolkit";

import workoutReducer from "./workoutSlice";

const store = configureStore({
  reducer: {
    muscleGroup: workoutReducer,
  },
});

export default store;
