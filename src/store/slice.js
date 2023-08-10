import { createSlice } from "@reduxjs/toolkit";
import { reject, union } from "lodash";

const initialState = {
  data: [],
  selectedData: [],
  visibleData: [],
  searchingText: "",
  currentStatus: "all",
  loading: false,
  randomStreetModal: false,
  randomCity: {},
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
    addToSelectedData: (state, action) => {
      state.selectedData = reject(state.selectedData, action.payload);
      state.selectedData.push(action.payload);
    },
    removeFromSelectedData: (state, action) => {
      state.selectedData = reject(state.selectedData, action.payload);
      state.visibleData = state.selectedData;
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
    setCurrentStatus: (state, action) => {
      state.currentStatus = action.payload;
      state.searchingText = "";
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
    setRandomStreetModal: (state, action) => {
      state.randomStreetModal = action.payload;
    },
    setRandomCity: (state, action) => {
      state.randomStreetModal = true;
      state.randomCity = action.payload;
    },
  },
});

export const {
  setData,
  setSelectedData,
  setVisibleData,
  setSearchingText,
  setCurrentStatus,
  getCityDataRequest,
  getCityDataSuccess,
  getCityDataFailure,
  setRandomStreetModal,
  addToSelectedData,
  removeFromSelectedData,
  setRandomCity,
} = slice.actions;

export default slice.reducer;
