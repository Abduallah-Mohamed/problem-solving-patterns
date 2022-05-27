// // frequency counter function
// function frequencyCounter(iterable) {
//   let fc = {};

//   for (let item of iterable) {
//     fc[item] = fc[item] + 1 || 1;
//   }

//   return fc;
// }

// function sameSquared(arr1, arr2) {
//   // check the falsey values
//   if (!arr1 || !arr2) return false;

//   // if the two arrays length are not the same return false
//   if (arr1.length !== arr2.length) return false;

//   let fc1 = frequencyCounter(arr1);
//   let fc2 = frequencyCounter(arr2);

//   for (let i in fc1) {
//     if (!fc2[i * i] && fc2[i * i] > 1) {
//       return false;
//     }
//   }

//   return true;
// }

// another solution here
function sameSquared(arr1, arr2) {
  // ? check for falsy values
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  const fc = {};

  for (let firstValue of arr1) {
    fc[firstValue * firstValue] = fc[firstValue * firstValue] + 1 || 1;
  }

  console.log(fc);

  for (let secondValue of arr2) {
    if (!fc[secondValue]) return false;
    fc[secondValue] -= 1; // decrement because if is there any dublicated values in the second array.
  }

  return true;
}

console.log(sameSquared([1, 2, 3], [9, 4, 1])); // true
console.log(sameSquared([1, 2, 3], [4, 1, 9])); // true
console.log(sameSquared([1, 2, 3], [1, 9])); // false
console.log(sameSquared([1, 2, 1], [4, 4, 1])); // false
console.log(sameSquared([2, 3, 6, 8, 8], [64, 36, 4, 9, 64])); // true
