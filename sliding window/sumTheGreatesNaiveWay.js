// function to sum the greates subsequence of the array
function sumGreatestSequence(arr, sequence) {
  if (sequence > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - sequence + 1; i++) {
    let temp = 0;
    for (let j = 0; j < sequence; j++) {
      temp += arr[i + j];
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

console.log(
  sumGreatestSequence([1, 2, 5, 3, 20, 3, 4, 5, 6, 8, 5, 4, 9, 20], 7)
);
