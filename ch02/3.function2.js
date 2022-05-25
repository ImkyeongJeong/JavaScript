
function sum(){
  let result = 0;
  for(let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}
console.log(`결과: ${sum(10,20,30,40)}`);

function mySum(a1, a2, ...arg){
  //a1 값이 없을 경우 0반환
  if(a1 == undefined){
    return 0;
  }
  //a2 값이 없을 경우 a1반환
  if(a2 == undefined){
    return a1;
  }
  let result = 0;
  arg.forEach((val) =>{
    result += val;
  });
  return a1 + a2 + result;
}
console.log(`mySum: ${mySum(1,2,3,4,5,6,7)}`);

//...arg:펼침연산자
let arr1 = [1,2,3];
let arr2 = arr1;
arr2[3] = 4;          //자바스크립트에선 배열의 크기를 바꿀 수 있다.
let arr3 = [...arr1]; //주소복사X, 새로운 배열 복사
arr3.push(5);         //push():배열의 제일 마지막에 요소를 하나 추가하는 메소드
console.log(arr1, arr3);