// Input Array
const arr = [1, 2, 3, 4, 5];

// Using inbuilt map function
const mapResult = arr.map((val) => val * val);
console.log("inbuilt map result => ", mapResult);

// Using customMap function
Array.prototype.customMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

const customMapRes = arr.customMap((val) => val + 5);

console.log("custom map result => ", customMapRes);
console.log("original array => ", arr);
