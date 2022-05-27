function isAnagram(s1, s2) {
  if (!s1 || !s2) return false;

  if (s1.length !== s2.length) return false;

  const fc1 = {};
  const fc2 = {};

  for (let char of s1) {
    fc1[char] = fc1[char] + 1 || 1;
  }

  for (let char of s2) {
    fc2[char] = fc2[char] + 1 || 1;
  }

  // to make sure that i compare the letters only
  delete fc1[" "];
  delete fc2[" "];

  for (let i in fc1) {
    if (fc1[i] !== fc2[i]) return false;
  }

  return true;
}

console.log(isAnagram("hello ", "ohell ")); // true
console.log(isAnagram("silent", "listen")); // true
console.log(isAnagram("martin", "nitram")); // true
console.log(isAnagram("cat", "tag")); // false
console.log(isAnagram("rat", "tar")); // true
