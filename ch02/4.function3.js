//고차함수 =>변수할당 함수에서 반환되는 함수
let arr =[];
//메소드의 매개값으로 함수사용
arr.forEach(function (){

});

//함수의 반환값으로 함수사용
function addFnc(){
  return function (a,b){
    return a + b;
  }
}

let fnc = addFnc();
console.log(fnc(10, 20));

const s1 = {
  sno:'001',
  score: 80
}
const s2 = {
  sno:'002',
  score: 90
}
arr.push(s1);
arr.push(s2);

//filter():주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
let newArr = arr.filter(function (val, idx, ary){
  return val.score > 90; //조건에 만족하는 object를 반환
});
console.log(newArr);