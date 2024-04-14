# JavaScript Reduce Function

- The `Reduce()` function in JavaScript is used for transforming an array into a single value. This value can be of any type: number, string, object, etc., depending on the purpose of the callback function provided to it. It **does not alter the original array.**

  ```js
  const nums = [1, 2, 3, 4];
  const sum = nums.reduce((acc, val) => acc + val, 0);
  console.log(sum); // Output: 10
  ```

### Creating a Custom Reduce Function

```js
function customReduce(arr, cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    acc = reducer(acc, arr[i]);
  }
  return acc;
}
```

- To use the custom reduce function, pass it an array, a reducer function that defines the reduction operation, and an initial value for the accumulator.

  ```js
  const nums = [1, 2, 3, 4];
  const sum = customReduce(nums, (acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 10
  ```

- This example mirrors the native reduce function usage, producing the sum of all numbers in the array. The output is identical to using the native Reduce function but the way we are using it is not. So to achieve identical behaviour we can add it to **array prototype.**

### Adding Custom Reduce to Array.prototype

- Adding the custom reduce function to Array.prototype allows it to be invoked directly on any array instance:

  ```js
  Array.prototype.customReduce = function (reducer, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = reducer(acc, this[i]);
    }
    return acc;
  };
  ```

- By adding customReduce as a method of `Array.prototype`, every array instance inherits `this` method. In the customReduce function, this refers to the array instance on which customReduce is called.
- After adding the customReduce function to Array.prototype, we can use it like this:

  ```js
  const numbers = [1, 2, 3, 4];
  const sum = numbers.customReduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 10
  ```
