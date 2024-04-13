# JavaScript Map Function

- The `Map()` function in JS is used to iterate over an array and apply a transformation to each element, **returning a new array** with transformed elements. It **does not alter the original array.**

### Creating a Custom Map Function

```js
function customMap(arr, cb) {
  let result = []; // This array will hold the transformed elements
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i])); // Apply the callback to each element
  }
  return result;
}
```

- To use our custom map function, we can pass an array and a callback function that defines the transformation logic.

  ```js
  const nums = [1, 2, 3, 4];
  const squaredNumbers = customMap(nums, (val) => val * val);
  console.log(squaredNumbers); // Output: [1, 4, 9, 16]
  ```

- Here `customMap` takes two parameters: the array nums and a callback function that squares each number. The output is identical to using the native map function but the way we are using it is not. So to achieve identical behaviour we can add it to **array prototype**

### Adding Custom Map to Array.prototype

- To extend the functionality of all array objects in JavaScript, we can add our custom map function to Array.prototype.

  ```js
  Array.prototype.customMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this)); // `this` refers to the array
    }
    return result;
  };
  ```

- By adding customMap as a method of Array.prototype, every array instance inherits `this` method. In the customMap function, this refers to the array instance on which customMap is called.
- After adding the customMap function to Array.prototype, you can use it like this:

  ```js
  const numbers = [1, 2, 3, 4];
  const squaredNumbers = numbers.customMap((number) => number * number);
  console.log(squaredNumbers); // Output: [1, 4, 9, 16]
  ```
