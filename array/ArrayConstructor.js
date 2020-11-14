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

/**
 * 만약 숫자인 1개의 요소를 가지는 배열을 생성하려면?
 */

const Array4 = Array.of(1);
console.log(Array4);

// Array.of() 메서드는 인자의 수나 유형에 관계없이 가변 인자를 갖는 새 Array 인스턴스를 만든다
