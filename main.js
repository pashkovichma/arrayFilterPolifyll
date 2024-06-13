Array.prototype.myFilter = function(callback, thisArg) {
  // Check if callback is a function
  if (typeof callback !== 'function') {
      throw new TypeError(callback + ' isn`t a function');
  }

  let result = [];

  let context = thisArg || undefined;

  this.forEach((element, index) => {
    if (callback.call(context, element, index, this)) {
      result.push(element);
    }
  });

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.myFilter(function(element) {
  // Check for even
  return element % 2 === 0;
});

const everyFourthAndEven = numbers.myFilter(function(element, index, array) {
  // Log each element, index, and array just for demonstration
  console.log('Element:', element, 'Index:', index, 'Array:', array);
  // Check for even and index 
  return element % 2 === 0 && index % 4 === 3;
});

const context = {
  condition: 5
}

const everyFourthAndEvenAndGeaterThan5 = numbers.myFilter(function(element, index, array) {
  // Log each element, index, and array just for demonstration
  console.log('Element:', element, 'Index:', index, 'Array:', array);
  // Check for even and index 
  return element % 2 === 0 && index % 4 === 3 && element > this.condition;
}, context);

console.log(evens); // [ 2, 4, 6, 8, 10 ]

console.log(everyFourthAndEven); // [ 4, 8 ]

console.log(everyFourthAndEvenAndGeaterThan5); // [8]