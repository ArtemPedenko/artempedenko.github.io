import { usePapaParse } from "react-papaparse";

const addToSelected = (selectedData, dataElement) => {
  const changedSelectedData = [...selectedData];
  let count = 0;
  selectedData.map((item) => {
    if (item.city === dataElement.city) count += 1;
  });
  if (count === 0) {
    changedSelectedData.push(dataElement);
  }
  return changedSelectedData;
};

function Lighter({ filter, str }) {
  if (!filter) return str;
  const regExp = new RegExp(filter, "ig");
  const matchValue = str.match(regExp);
  if (matchValue) {
    return str.split(regExp).map((symbol, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <span key={index}>
            {symbol}
            <span
              style={{
                borderRadius: "5px",
                background: "#c31432",
              }}
            >
              {c}
            </span>
          </span>
        );
      }
      return symbol;
    });
  }
  return str;
}

const search = (data, filter) => {
  if (!filter) {
    return data;
  }
  return data.filter((data) => {
    return (
      data.city.toLowerCase().includes(filter.toLowerCase()) ||
      data.country.toLowerCase().includes(filter.toLowerCase())
    );
  });
};

import Papa from "papaparse";

const dataParse = (data) => {
  const { readString } = usePapaParse();
  var csvData = [];
  readString(data, {
    header: true,
    worker: true,
    //step: function (result) {
    //  csvData.push(result.data);
    //},
    complete: function (results) {
      csvData.push(results.data);
      console.log("done");
    },
  });
  return csvData;
  //return qqq;
};

export { addToSelected, search, Lighter, dataParse };
