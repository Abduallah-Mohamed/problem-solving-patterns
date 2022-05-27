var uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(" ");
  s2 = s2.split(" ");

  const fc1 = {};
  const fc2 = {};

  const result = [];

  for (let word of s1) {
    fc1[word] = fc1[word] + 1 || 1;
  }

  for (let word of s2) {
    fc2[word] = fc2[word] + 1 || 1;
  }

  for (let word of s2) {
    if (!fc1[word]) {
      result.push(word);
    }
  }

  for (let word of s1) {
    if (!fc2[word]) {
      if (!result.includes(word)) {
        result.push(word);
      }
    }
  }

  return result;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));
