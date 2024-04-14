const arr = [1, 2, 3, 4, 5];

const res = arr.reduce((acc, val) => acc + val, 0);
console.log(res, arr);

Array.prototype.customReduce = function (cb, initialVal) {
  let acc = initialVal;

  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

const result = arr.customReduce((acc, val) => acc + val, 0);

console.log("customReduce result => ", result, arr);
