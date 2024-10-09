import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // Add your reducers here
  reducer: {
    // Example reducer
    counter: (state = 0, action) => {
      switch (action.type) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
    },
  },
});

export default store;
