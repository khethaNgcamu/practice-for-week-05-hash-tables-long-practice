function anagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) return false;

  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
    if (charCount[char] < 0) return false;
  }

  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  const set1 = new Set(arr1);
  const resultSet = new Set();

  for (let num of arr2) {
    if (set1.has(num)) {
      resultSet.add(num);
    }
  }

  return Array.from(resultSet);
}


function duplicate(arr) {
  // Your code here
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }

  return null; // If no duplicate found, though problem states there will be one
}


function twoSum(nums, target) {
  // Your code here
  const complements = new Set();

  for (let num of nums) {
    if (complements.has(num)) {
      return true;
    }
    complements.add(target - num);
  }

  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  if (pattern.length !== strings.length) return false;

  const patternToStr = {};
  const strToPattern = {};

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const s = strings[i];

    if (!patternToStr[p]) {
      patternToStr[p] = s;
    } else if (patternToStr[p] !== s) {
      return false;
    }

    if (!strToPattern[s]) {
      strToPattern[s] = p;
    } else if (strToPattern[s] !== p) {
      return false;
    }
  }

  return true
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];