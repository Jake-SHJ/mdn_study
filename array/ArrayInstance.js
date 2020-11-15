/**
 * Array Instance
 */

// 모든 Array 인스턴스는 Array.prototype을 상속
// Array() 생성자의 프로토타입을 수정하면 모든 Array 인스턴스가 영향을 받음

console.log(Array.isArray(Array.prototype)); // true
// Array.prototype은 그 스스로 Array

/**
 * Instance Method의 분류
 */

// 변경자 메서드, 대상 배열을 수정
Array.prototype.copyWithin(); // 배열 내 지정된 요소들을 동일 배열 내에서 복사 및 배열 반환
Array.prototype.fill(); // 배열 안의 전체 요소값을 지정된 정적 값으로 채우고 배열 반환
Array.prototype.pop(); // 마지막 요소 제거 및 해당 요소 반환
Array.prototype.push(); // 배열 끝에 요소 추가 및 배열 길이 반환
Array.prototype.reverse(); // 배열 순서 반전 및 해당 배열 반환
Array.prototype.shift(); // 배열 첫 요소 제거 및 해당 요소 반환
Array.prototype.sort(); // 배열 요소 정렬 및 배열 반환
Array.prototype.splice(); // 배열에서 요소를 추가/삭제 및 삭제한 요소를 담은 배열 반환
Array.prototype.unshift(); // 배열 처음에 요소 추가 및 배열 길이 반환

// 접근자 메서드, 대상 배열을 기반으로 새로운 배열 또는 값을 반환
Array.prototype.concat(); // 주어진 배열을 이어붙인 새로운 배열을 반환
Array.prototype.filter(); // 콜백 함수의 반환 결과가 true인 요소만 모은 새로운 배열을 반환
Array.prototype.includes(); // 배열이 주어진 값을 포함하는지 판별 및 boolean 반환
Array.prototype.indexOf(); // 주어진 값과 일치하는 제일 앞의 인덱스 반환, 없으면 -1
Array.prototype.lastIndexOf(); // 주어진 값과 일치하는 제일 뒤의 인덱스 반환, 없으면 -1
Array.prototype.join(); // 배열의 모든 요소를 문자열로 합치고 해당 문자열 반환
Array.prototype.slice(); // 배열의 일부를 추출한 새 배열을 반환
Array.prototype.toString(); // 배열과 그 요소를 나타내는 문자열을 반환
Array.prototype.toLocaleString(); // 배열과 그 요소를 나타내는 지역화된 문자열을 반환

// 순회 메서드
