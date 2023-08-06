const addToSelected = (selectedData, dataElement) => {
  console.log("selectedData")
  console.log(selectedData)
  console.log("dataElement")
  console.log(dataElement)

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
  return data.filter((data) => {


    return (
      data.city.toLowerCase().includes(filter.toLowerCase()) ||
      data.country.toLowerCase().includes(filter.toLowerCase())
    );
  });
};

export { addToSelected, search, Lighter };
