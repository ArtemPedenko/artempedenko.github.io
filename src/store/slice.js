import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedData: [],
  visibleData: [],
  searchingText: "",
  currentList: "all",
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
    setVisibleData: (state, action) => {
      state.visibleData = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.visibleData = action.payload;
    },
    setSearchingText: (state, action) => {
      state.searchingText = action.payload;
    },
    setCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    
  },
});

export const {
  setData,
  setSelectedData,
  setVisibleData,
  setSearchingText,
  setCurrentList,
} = slice.actions;

export default slice.reducer;
