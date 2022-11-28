function ageSort(users) {
  // Your code here
  return users.sort(compareAge)
}

function compareAge(a, b) {
  return a.age - b.age
}
//=============================
function oddEvenSort(arr) {
  // Your code here
  return arr.sort(evenOdd)
}

function evenOdd(a,b) {
  if (a % 2 === 0 && b % 2 === 1) {return 1}
  if (b % 2 === 0 && a % 2 === 1) {return -1}

  return a-b;
}

//===========================

function validAnagrams(s, t) {
  // Your code here
  let sLetters = s.split("");
  let tLetters = t.split("");
  sLetters.sort();
  tLetters.sort();

  return(tLetters.join("")===sLetters.join(""));
}
//===================

function reverseBaseSort(arr) {
  // Your code here
  arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  });
  return arr
}
//==========================
function frequencySort(arr) {
  // Your code here
  let frequencyMap = new Object();
  for (let i = 0; i < arr.length; i++) {
    frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
  };
  return arr.sort((a, b) => frequencyMap[a] - frequencyMap[b] || b - a);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
