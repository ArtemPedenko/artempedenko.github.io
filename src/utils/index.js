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

const HighlightText = (city, text) => {
  console.log("2 " + city);
  console.log("3 " + text);
  const regexp = new RegExp(text, "ig");
  const matchValue = city.match(regexp);
  console.log("4 " + matchValue);
  const splited = city.split(regexp);
  const highlight = (
    <span style={{ backgroundColor: "red" }}>{matchValue[0]}</span>
  );

  function qq(item, index) {
    if (index < splited.length - 1) {
      console.log("5 " + index);
      return [item, highlight];
    } else {
      return item;
    }
  }

  if (matchValue) {
    console.log("6 ");
    city = splited.map((item, index) => qq(item, index));
    console.log("7 ");
  }
  console.log(8);
  console.log(city);
  return city;
};

const search = (data, filter) => {
  if (!filter) {
    return data;
  }
  return data.filter((city) => {
    //if (city[0].toLowerCase().includes(filter.toLowerCase())) {
    //  console.log("1 " + city[0]);
    //  console.log(city);
    //  //city[0] = "zqlupa";
    //  //city[0] = HighlightText(city[0], filter);
    //  // city[0] = "zalupa";
    //  return city;
    //}
    //if (city[3].toLowerCase().includes(filter.toLowerCase())) {
    //  //city[3] = HighlightText(filter, city[3]);
    //  // city[3] = "zalupa";
    //
    //  return city;
    //}
    //return filteredData;
    return (
      city[0].toLowerCase().includes(filter.toLowerCase()) ||
      city[3].toLowerCase().includes(filter.toLowerCase())
    );
  });
};

export { addToSelected, search };
