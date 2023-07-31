import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {}
};

const slice = createSlice({
  name: "cityWishList",
  initialState,
  reducers: {
    setDefaultValues: (state) => {
      state = initialState;
    },
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setData } = slice.actions;

export default slice.reducer;
