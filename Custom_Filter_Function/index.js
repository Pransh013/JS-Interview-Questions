const arr = [10, 20, 30, 40, 50];

const filteredResult = arr.filter((val) => val <= 30);
console.log('filter function => ', filteredResult);

Array.prototype.customFilter = function (arr, cb) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

customFilterResult = arr.customFilter(arr, (val) => val <= 30);
console.log('custom filter => ', customFilterResult);
console.log('input arr => ', arr);