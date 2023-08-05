const addToSelected = (selectedData, dataElement) => {
  const changedSelectedData = [...selectedData];
  let count = 0;
  selectedData.map((item) => {
    if (item[0] === dataElement[0]) count += 1;
  });
  if (count === 0) {
    changedSelectedData.push(dataElement);
  }
  return changedSelectedData;
};



function Lighter({ filter, str }) {
  if (!filter) return str;
  const regExp = new RegExp(filter, 'ig');
  const matchValue = str.match(regExp);
  if (matchValue) {
    return str.split(regExp).map((symbol, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <span key={index} >
            {symbol}
            <span
              style={{
                borderRadius: '5px',
                background: '#c31432',
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
  const searchingData = data.filter((city) => {
    if (city[0].toLowerCase().includes(filter.toLowerCase())) {
    //  console.log("1 " + city[0]);
    //  console.log(city);
    //  //city[0] = "zqlupa";
    HighlightText(city[0], filter);
    //  // city[0] = "zalupa";
    //  return city;
    //}
    //if (city[3].toLowerCase().includes(filter.toLowerCase())) {
    //  //city[3] = HighlightText(filter, city[3]);
    //  // city[3] = "zalupa";
    //
    //  return city;
    }
    //return filteredData;
    return (
      city[0].toLowerCase().includes(filter.toLowerCase()) ||
      city[3].toLowerCase().includes(filter.toLowerCase())
    );
  });

  let searchingData1 = [];
  let searchingData2 = []

  for (let i = 0; i < data.length; i++) {
    if (
      data[i][0].toLowerCase().includes(filter.toLowerCase()) ||
      data[i][3].toLowerCase().includes(filter.toLowerCase())
    ) {
      searchingData1.push(data[i]);
    }
  }
  console.log(searchingData1);
  
  //searchingData1[0] = "zalupa";
  //console.log(searchingData1);
  return searchingData;
};

export { addToSelected, search, Lighter };
