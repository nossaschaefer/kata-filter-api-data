function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter(function (dataObject) {
    return mandatoryKeys.every((key) => key in dataObject);
  });
}

// function areAllElementsKeys(obj, keysArray) {
//   return keysArray.every(key => key in obj);
// }

// apiData = [{ id: 1, price: 100 }, { price: 50 }];
// mandatoryKeys = ["id", "price"];
