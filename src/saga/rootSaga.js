import { all } from "redux-saga/effects";
import { citiesLoadingWatcher } from "./cityWishListSaga";

function* rootSaga() {
    yield all([citiesLoadingWatcher()]);
}

export default rootSaga;