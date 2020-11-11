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

// 배열에 항목 추가하기

newLength = fruits.unshift("strawberry"); // 앞에 추가
console.log(fruits); // [ 'strawberry', 'banana' ]

newLength = fruits.push("mango"); // 뒤에 추가
console.log(fruits); // [ 'strawberry', 'banana', 'mango' ]
console.log("-----");

// 배열 안 항목 인덱스 찾기

let pos = fruits.indexOf("banana");
console.log(pos); // 1
console.log("-----");

// 인덱스 위치에 있는 항목 제거하기

let removedItem = fruits.splice(pos, 1);
console.log(fruits); // [ 'strawberry', 'mango' ]
console.log("-----");

// 인덱스 위치에서부터 여러개의 항목 제거하기

let vegetables = ["cabbage", "turnip", "radish", "carrot"];
pos = 1;
let n = 2;

let removedItems = vegetables.splice(pos, n);
console.log(vegetables); // [ 'cabbage', 'carrot' ]
console.log(removedItems); // [ 'turnip', 'radish' ]
console.log("-----");

// 배열 복사하기
let shallowCopy = fruits.slice();
console.log(shallowCopy); // [ 'strawberry', 'mango' ]
console.log("-----");

/**
 * 배열 요소에 접근하기
 */

let arr = ["first element", "second element", "third element"];
console.log(arr[0]); // first element
console.log(arr[1]); // second element
console.log(arr[arr.length - 1]); // third element

// 숫자로 시작하는 JavaScript 속성은 마침표 구문으로 접근할 수 없으며, 반드시 괄호 표기법으로 접근해야 함

let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(years.0);   // syntax error
console.log(years[0]); // 정상 작동
console.log(years["2"] != years["02"]);
console.log(years[2] === years["2"]);
// 숫자 2는 암시적인 toString 변환을 사용해 문자열로 변환됨
console.log("-----");
