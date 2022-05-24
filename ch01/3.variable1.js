//변수의 호이스팅(끌어올린다.)
//코드가 실행하기 전 변수선언/함수선언이 최상단으로 끌어 올려진 것 같은 현상

var sum2;
var myName;

let sum = 10;     //변수선언, 값을 초기화
console.log(sum);

console.log(sum2);
var sum2 = 100;


console.log(myName()); //홍길동 출력
// object(참조타입변수) =>object, array, function(){}
function myName() { 
  return '홍길동';
}


var result = 100;   //전역변수 result값: 100

{
  var result = 50;  //var는 블럭레벨의 의미가 없다 (50의 값으로 다시 선언된 것) / let은 블럭 안에서만 유효하는 값이 된다.
}
function run() {
  //지역변수(local variable)
  var result = 0;
  console.log(result);
}
run();

console.log(result); //전역변수 result값 출력