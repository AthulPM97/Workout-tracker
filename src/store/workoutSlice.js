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
    updatePush(state, action) {
      let existingItem = state.push.find((item) => item.id === action.payload.id);
      existingItem = {...action.payload.data, id: action.payload.id};
    },
    setPush(state, action) {
      state.push = action.payload;
    },
    addToLegs(state,action) {
      state.legs = [...state.legs, action.payload]
    },
    setLegs(state,action) {
      state.legs = action.payload;
    }
  },
});

export const workoutActions = workoutSlice.actions;

export default workoutSlice.reducer;
