
//1. 함수선언식 정의
function sum(num1=0, num2=0){ //매개값이 안 들어오면 초기값 0
  if(num1==undefined){
    num1 = 0;
  }
  return num1 + num2;
}
console.log(sum(10,20));

//2. 함수표현식 정의
// 변수 = string, number, boolean, undefined, object, function 할당 가능
let mySum = function(val1=0, val2=0){
  return val1 + val2;
}
console.log(mySum(10,20));
let yourSum = mySum;
console.log(yourSum(10,20));

//3. 화살표 함수(함수나 메소드 매개값으로 사용되어질 때(return구문 생략))
let otherSum = (val1, val2) => val1 + val2; 

//배열에는 forEach(); (매개값으로 기능이 들어감) 배열에 대한 각각의 요소들에 대한 기능
const arr = [10, 22, 17, 23, 34, 42];
let summ = 0;
arr.forEach((val, idx, ary) => {
  if(val % 2 == 0){
    summ += val;
  }
});
console.log(`짝수의 합: ${summ}`);

//forEach메소드의 콜백함수(코드 길어질 때 사용)
arr.forEach(getOddSum);
function getOddSum(val, idx, ary){
  if(val % 2 == 0){
    summ += val;
  }
};

