function ageSort(users) {
  // Your code here
  return users.sort(compareAge)
}

function compareAge(a, b) {
     return a.age - b.age
}

const users = [
  {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      occupation: 'Software Engineer',
      friends: [2, 3, 4]
  },
  {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 25,
      occupation: 'Data Scientist',
      friends: [1, 4]
  },
  {
      id: 3,
      firstName: 'Mary',
      lastName: 'Smith',
      age: 32,
      occupation: 'UX Designer',
      friends: [2, 4]
  },
  {
      id: 4,
      firstName: 'James',
      lastName: 'Johnson',
      age: 55,
      occupation: 'CTO',
      friends: [1, 2, 3]
  }
];

ageSort(users);         // => Jane, John, Mary, James
//=============================
function oddEvenSort(arr) {
  // Your code here
  return arr.sort(evenOdd)
}

    function(a,b) {
      if (a % 2 === 0 && b%2 === 1) {return 1}
      if (b % 2 === 0 && a % 2 === 1) {return -1}

      return a-b
    }
const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
const arr2 = [5, 8, 13, 6, 22, 14, 9];

oddEvenSort(arr1);           // => [1, 3, 5, 7, 9, 2, 4, 6, 8]
oddEvenSort(arr2);           // => [5, 9, 13, 6, 8, 14, 22]
//=======================
function validAnagrams(s, t) {
  // Your code here

  let arr1 = s.split("").sort()
  let arr2 = t.split("").sort()
  return(arr1.join('')===arr2.join(''))
}

let s = "anagram";
let t = "nagaram";

validAnagrams(s, t);            // => true
//==========================


function reverseBaseSort(arr) {
  // Your code here
  arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  });
  return arr
}
const arr1 = [11, 1, 101, 0, 10, 100];
const arr2 = [1, 45, 164, 6, 31, 90, 671];

reverseBaseSort(arr1);      // => [100, 101, 10, 11, 0, 1]
reverseBaseSort(arr2);      // => [164, 671, 31, 45, 90, 1, 6]
//===========================

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
