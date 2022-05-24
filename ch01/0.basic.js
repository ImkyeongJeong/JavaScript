//변수의 선언 : 데이터타입 선언하지 않는다
// var(변수 중복 선언 시 오류를 찾아내지 않음), let(변수), const(상수)
var fname = 'hello';  //string
fname = 100;          //number
fname = true;         //boolean
fname = null;         //'', 0 => null : object타입
var lname;            //undefined(초기화 되지 않은 값)
console.log(typeof lname);

console.clear();      //로그정보 초기화(이전에 출력한 콘솔 지움)
var lname = 'Hong';
console.log(lname);

//{}안에 변수 선언 : 지역변수
{
  let lname = 'Hwang';
  console.log(lname);
}

console.log(lname);   //전역변수의 lname의 Hong을 출력함

{
  let lname = 'Park';
  console.log(lname);
}

const age = 10;       //상수선언

//학생: 이름, 나이, 학생번호 => object타입
const student = { //클래스 인스턴스라 생각하면 됨
  fname: '홍길동',
  age: 20,
  sno: '22-0001',
  info: function(){ //메소드(함수)
    return this.fname + ', ' + this.age;
  }
}

//속성값 
console.log(student.fname);   //student의 fname속성값
console.log(student['age']);  //student의 age속성값
let fieldName = 'sno';
console.log(student[fieldName]);  //student의 sno속성값
console.log(student['info()']);
debugger;

//objec일 경우 ..for ..(변수 in 객체)
for(let field in student){
  console.log(field + ': ' + student[field]);
}

//배열
const numAry = [10, 34, 15, 22];
console.log(numAry[0]);
for(let i = 0; i < numAry.length; i++){
  console.log(numAry[i]);
}

//확장 for..of
for(let num of numAry){
  console.log(num);
}