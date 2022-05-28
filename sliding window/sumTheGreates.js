// function to sum the greates subsequence of the array
function sumGreatestSequence(arr, sequence) {
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

console.log(sumGreatestSequence([1, 2, 3, 4, 5, 6, 8], 2)); // 14
