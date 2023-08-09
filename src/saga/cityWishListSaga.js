import { takeEvery, call, put, select } from "redux-saga/effects";
import getCitiesDataApi from "./api";
import { getCityDataRequest, getCityDataSuccess } from "../store/slice";
import Papa from "papaparse";

function* getCitiesDataWorker() {
  try {
    const state = yield select();
    const { data } = yield call(getCitiesDataApi);
    if (data) {
      const parsedData = Papa.parse(data, { header: true }).data;
      yield put(getCityDataSuccess(parsedData));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* citiesLoadingWatcher() {
  yield takeEvery(getCityDataRequest, getCitiesDataWorker);
}
