import { createSlice } from "@reduxjs/toolkit";

const initialWorkoutState = {
  push: [],
  legs: [],
  pull: [],
};

const workoutSlice = createSlice({
  name: "muscle group",
  initialState: initialWorkoutState,
  reducers: {
    addToPush(state, action) {
        state.push = [...state.push, action.payload]
    },
  },
});

export const workoutActions = workoutSlice.actions;

export default workoutSlice.reducer;
