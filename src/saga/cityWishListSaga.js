import { takeEvery, call, put, select } from "redux-saga/effects";
import getCitiesDataApi from "./api";
import { usePapaParse } from "react-papaparse";
import { getCityDataRequest, getCityDataSuccess } from "../store/slice";
import { dataParse } from "../utils";

function* getCitiesDataWorker() {
    const { readString } = usePapaParse();

    try {
        const state = yield select();
        const { data } = yield call(getCitiesDataApi);
        if (data) {
            console.log(dataParse(data))
            yield put(getCityDataSuccess(dataParse(data)));

        }

    } catch (error) {
        console.log(error);
    }
};

export function* citiesLoadingWatcher() {
    yield takeEvery(getCityDataRequest, getCitiesDataWorker);
}