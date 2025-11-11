const chunkArray = (arr, length) => {
  const chunkedArray = [];

  arr.forEach((val) => {
    const last = chunkedArray[chunkedArray.length - 1];

    if (!last || last.length === length) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArray;
};
module.exports = chunkArray;
