/**
 * Array() 생성자
 */

// 새로운 Array 객체를 생성

const Array1 = ["el_0", "el_1", "el_N"]; // 배열 리터럴 표기법
const Array2 = new Array("el_0", "el_1", "el_N"); // 복수 매개변수 배열 생성지
const Array3 = new Array(3); // 단일 매개변수 배열 생성자

console.log(Array1, Array2, Array3);
// [ 'el_0', 'el_1', 'el_N' ] [ 'el_0', 'el_1', 'el_N' ] [ <3 empty items> ]
// 항목이 하나이면서, 그 항목의 자료형이 숫자일 경우 그 크기만큼의 빈 슬롯을 가진 배열이 생성, 실제 undefined를 채우는 것은 아님
