import { useEffect } from "react";
import axios from "axios";
import { usePapaParse } from "react-papaparse";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./store/slice";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cityWishList.data);
  const { readString } = usePapaParse();
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv"
      )
      .then(function (response) {
        readString(response.data, {
          worker: true,
          complete: (results) => {
            const resData = results.data;
            resData.shift();
            console.log(resData);
            dispatch(setData(resData));
          },
        });
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      });
  }, []);

  return <div style={{ color: "white" }}>{data[0]}</div>;
}
