# JavaScript Filter Function

- The `Filter()` function is another function in JS which as the name suggests, enables us to easily create a new array filled with elements that pass a specific test defined by a provided function. It **does not alter the original array.**

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  ```

### Creating a Custom Filter Function

  ```js
  function customFilter(arr, cb) {
    let result = []; // This array will hold the filtered elements
    for (let i = 0; i < arr.length; i++) {
      result.push(cb(arr[i])); // Apply the callback to each element
    }
    return result;
  }
  ```

- To use our custom Filter function, we can pass an array and a callback function that defines the filter logic.

  ```js
  const nums = [1, 2, 3, 4];
  const evenNumbers = customFilter(nums, (val) => val % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  ```

- Here `customFilter` takes two parameters: the array nums and a callback function that tests each number on the provided function. The output is identical to using the native Filter function but the way we are using it is not. So to achieve identical behaviour we can add it to **array prototype.**

### Adding Custom Filter to Array.prototype

- To extend the functionality of all array objects in JavaScript, we can add our custom Filter function to Array.prototype.

  ```js
  Array.prototype.customFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i])); // `this` refers to the array
    }
    return result;
  };
  ```

- By adding customFilter as a method of Array.prototype, every array instance inherits `this` method. In the customFilter function, `this` refers to the array instance on which customFilter is called.
- After adding the customFilter function to Array.prototype, you can use it like this:

  ```js
  const numbers = [1, 2, 3, 4];
  const evenNumbers = numbers.customFilter((number) => number % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  ```
