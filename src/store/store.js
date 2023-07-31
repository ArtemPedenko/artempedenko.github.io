import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReduser";

const store = configureStore({
  reducer
});
export default store;
