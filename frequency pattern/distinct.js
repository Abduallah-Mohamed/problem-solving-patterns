var kthDistinct = function (arr, k) {
  if (arr.length < k) return "";

  const fc = {};
  const distinct = [];

  for (let char of arr) {
    fc[char] = fc[char] + 1 || 1;
  }

  for (let key in fc) {
    if (fc[key] === 1) distinct.push(key);
  }

  if (distinct.length < k) {
    return "";
  }

  return distinct[k - 1];
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));
