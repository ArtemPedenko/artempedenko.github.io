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

const removeFromSelected = (selectedData, dataElement) => {
  console.log(dataElement.city);
  const changedSelectedData = [...selectedData];
  selectedData.map((item, index) => {
    if (item.city === dataElement.city) {
      changedSelectedData.splice(index, 1);
    }
  });
  return changedSelectedData;
};

function Lighter({ filter, str }) {
  if (!filter) return str;
  const regExp = new RegExp(filter, "ig");
  const matchValue = str.match(regExp);
  if (matchValue) {
    return str.split(regExp).map((symbol, index, array) => {
      if (index < array.length - 1) {
        const lightingText = matchValue.shift();
        console.log("symbol " + symbol);
        console.log("lightingText " + lightingText);
        return (
          <span key={index}>
            {symbol}
            <span
              style={{
                borderRadius: "5px",
                background: "#c31432",
              }}
            >
              {lightingText}
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

export { search, Lighter };
