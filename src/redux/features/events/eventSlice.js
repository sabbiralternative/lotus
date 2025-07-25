import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeBetValues: null,
  showComponent: false,
  price: null,
  stake: null,
  predictOdd: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setShowComponent: (state, action) => {
      state.showComponent = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setPlaceBetValues: (state, action) => {
      state.placeBetValues = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setStake: (state, action) => {
      state.stake = action.payload;
    },

    setPredictOdd: (state, action) => {
      state.predictOdd = action.payload;
    },
  },
});

export const {
  setShowComponent,
  setPosition,
  setPlaceBetValues,
  setPrice,
  setStake,

  setPredictOdd,
} = eventSlice.actions;

export default eventSlice.reducer;
