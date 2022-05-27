var uncommonFromSentences = function (s1, s2) {
  if (s2.length === 0 && s1.length !== 0) return s1.split(" ");
  if (s1.length === 0 && s2.length !== 0) return s2.split(" ");
  if (s1.length === 0 && s2.length === 0) return [];

  s1 = s1.split(" ");
  s2 = s2.split(" ");

  const fc1 = {};

  const result = [];

  // insert the whole words into the fc1 object
  for (let word of s1) {
    fc1[word] = fc1[word] + 1 || 1;
  }

  // inserthe whole words into the fc1 object too
  for (let word of s2) {
    fc1[word] = fc1[word] + 1 || 1;
  }

  // if any word in fc1 has value of 1 it will be the different word in the both sentences
  for (let word in fc1) {
    if (fc1[word] === 1) {
      result.push(word);
    }
  }

  return result;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));
