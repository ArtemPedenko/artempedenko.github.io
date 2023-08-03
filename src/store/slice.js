import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedData: [],
  visibleData: [],
};

const slice = createSlice({
  name: "cityWishList",
  initialState,
  reducers: {
    setDefaultValues: (state) => {
      state = initialState;
    },
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.selectedData = action.payload;
    },
    setVisibleData: (state, action) => {
      state.visibleData = action.payload;
    },
  },
});

export const { setData, setSelectedData, setVisibleData } = slice.actions;

export default slice.reducer;
