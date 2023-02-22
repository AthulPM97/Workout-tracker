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
      let existingItem = state.push.find(
        (item) => item.name === action.payload.name
      );
      existingItem = { ...action.payload, id: existingItem.id };
      let existingItemIndex = state.push.findIndex(
        (item) => item.name === existingItem.name
      );
      state.push[existingItemIndex] = { ...existingItem };
    },
    setPush(state, action) {
      state.push = action.payload;
    },
    updateLegs(state, action) {
      let existingItem = state.legs.find(
        (item) => item.name === action.payload.name
      );
      existingItem = { ...action.payload, id: existingItem.id };
      let existingItemIndex = state.legs.findIndex(
        (item) => item.name === existingItem.name
      );
      state.legs[existingItemIndex] = { ...existingItem };
    },
    setLegs(state, action) {
      state.legs = action.payload;
    },
    updatePull(state, action) {
      let existingItem = state.pull.find(
        (item) => item.name === action.payload.name
      );
      existingItem = { ...action.payload, id: existingItem.id };
      let existingItemIndex = state.pull.findIndex(
        (item) => item.name === existingItem.name
      );
      state.pull[existingItemIndex] = { ...existingItem };
    },
    setPull(state, action) {
      state.pull = action.payload;
    },
  },
});

export const workoutActions = workoutSlice.actions;

export default workoutSlice.reducer;
