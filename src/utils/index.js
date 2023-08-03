const addToSelected = (selectedData, dataElement) => {
  const changedSelectedData = [...selectedData];
  let count = 0;
  selectedData.map((item) => {
    if (item[0] === dataElement[0]) count += 1;
  });
  if (count === 0) {
    changedSelectedData.push(dataElement);
  }
  //console.log(" count = " + count)
  //console.log(changedSelectedData)
  return changedSelectedData;
};

const search = (data, text) => {
  if (!text) {
    return data;
  }
  console.log(data[1][0]);
  console.log(text);
  return data.filter((city) => {
    return (
      city[0].toLowerCase().includes(text.toLowerCase()) ||
      city[3].toLowerCase().includes(text.toLowerCase())
    );
  });
};

export { addToSelected, search };
