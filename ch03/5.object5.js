//정적메소드
for(let i = 0; i < 5; i++){
  let temp = parseInt(Math.random()*10) + 1;
  console.log(temp);
}
Math.ceil(3.3);  //올림처리
Math.floor(3.3); //버림처리
Math.trunc(3.3); //소수점 이후를 잘라냄
Math.round(3.5); 
console.log(Math.PI); //원주율

Math.floor(-3.3); // -4 출력 (-3~-4 중 최하값으로 떨어지기 때문)
Math.trunc(-3.3); // -3 출력 (소수점 잘라냄)
// let math = new Math();
// math.random();

//클로저 : 함수가 실행되는 시점의 변수값을 기억하고 지속적으로 사용할때
//지역변수로 선언했는데 함수가 끝난뒤에도 계속 사용할 수 있는 특징이 있음
function outerFunc(name){
  let saying = 'hello ' + name;
  return function() {
    return saying;
  }
}

let f1 = outerFunc('홍길동');
console.log(f1()); //saying을 리턴해줌
let f2 = outerFunc('김민수');
console.log(f2());

function initFunc(){
  let cnt = 0;
  function addCnt(){
    cnt += 1;
  }
  addCnt();
  console.log(cnt);
}
initFunc();
initFunc(); //2가 나올거라고 생각했지만 1이나옴->호출시마다 cnt값이 초기화되기때문
initFunc();

function initFunction(){
  let cnt = 0;
  return function addCnt(){
    cnt += 1;
    console.log(cnt);
  }
  // addCnt();
}
let add = initFunction();
add();
add(); // 2로 1증가
add(); // 3으로 1증가
//최대한 변수는 함수 안에서 선언하고 함수 안에서 계속적인 처리를 하고 싶을때 사용