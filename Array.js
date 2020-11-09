/**
 * 자주 사용하는 연산
 */

// 배열 만들기

let fruits = ["apple", "banana"];
console.log(fruits.length); // 2
console.log("-----");

// 인덱스로 배열의 항목에 접근하기

let first = fruits[0];
console.log(first); // apple

let last = fruits[fruits.length - 1]; // 총 배열의 길이 - 1은 무조건 마지막 배열의 요소
console.log(last); // banana
console.log("-----");

// 배열의 항목들을 순회하며 처리하기

fruits.forEach(function (item, index, array) {
  console.log(item, index, array);
});
// apple 0 [ 'apple', 'banana' ]
// banana 1 [ 'apple', 'banana' ]
console.log("-----");

// 배열 끝에 항목 추가하기

let newLength = fruits.push("orange");
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
console.log("-----");

// 배열 끝에서부터 항목 제거하기

last = fruits.pop();
console.log(fruits); // [ 'apple', 'banana' ]
console.log("-----");

// 배열 앞에서부터 항목 제거하기

first = fruits.shift();
console.log(fruits); // [ 'banana' ]
console.log("-----");
