import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedData: [],
  visibleData: [],
  searchingText: "",
  currentList: "all",
  loading: false,
};

const slice = createSlice({
  name: "cityWishList",
  initialState,
  reducers: {
    setDefaultValues: (state) => {
      state = initialState;
    },
    setLoading: (state, action) => {
      state.selectedData = action.payload;
    },
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
    },
    setVisibleData: (state, action) => {
      state.visibleData = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSearchingText: (state, action) => {
      state.searchingText = action.payload;
    },
    setCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    getCityDataRequest: (state, action) => {
      state.loading = true;
    },
    getCityDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.visibleData = action.payload;
    },
    getCityDataFailure: (state, action) => {
      state.loading = false;
    },

  },
});

export const {
  setData,
  setSelectedData,
  setVisibleData,
  setSearchingText,
  setCurrentList,
  getCityDataRequest,
  getCityDataSuccess,
  getCityDataFailure
} = slice.actions;

export default slice.reducer;
