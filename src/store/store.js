import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReduser";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

store.sagaTask = sagaMiddleware.run(rootSaga);
export default store;
