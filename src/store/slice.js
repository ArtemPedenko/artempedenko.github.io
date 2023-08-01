import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedData: [],
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
    },
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
    },
  },
});

export const { setData, setSelectedData } = slice.actions;

export default slice.reducer;
