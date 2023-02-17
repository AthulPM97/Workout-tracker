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
    updateLegs(state,action) {
      let existingItem = state.push.find((item) => item.id === action.payload.id);
      existingItem = {...action.payload.data, id: action.payload.id};
    },
    setLegs(state,action) {
      state.legs = action.payload;
    },
    updatePull(state,action) {
      let existingItem = state.push.find((item) => item.id === action.payload.id);
      existingItem = {...action.payload.data, id: action.payload.id};
    },
    setPull(state,action) {
      state.pull = action.payload;
    }
  },
});

export const workoutActions = workoutSlice.actions;

export default workoutSlice.reducer;
