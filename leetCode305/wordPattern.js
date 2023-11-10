var wordPattern = function (pattern, s) {
  const sWord = s.split(" ");
  if (pattern.length !== sWord.length) return false;
  let len = 0;
  let m = new Map();
  while (len < sWord.length) {
    if (m.has(pattern[len])) {
      if (!(m.get(pattern[len]) == sWord[len])) return false;
    } else {
      m.set(pattern[len], sWord[len]);
    }
    len++;
  }
  if ([...new Set(m.values())].length !== m.values().length) {
    console.log([...new Set(m.values())].length);
    console.log([...m.values()].length);
  }
  return true;
};
// console.log(wordPattern("abba", "dog cat cat dog"));
