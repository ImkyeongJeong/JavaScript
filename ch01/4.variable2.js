//원시형 vs 참조형
//string, number, boolean, undefined vs object(object, ary, function)

let str1 = 'Hello';
let str2 = str1;
console.log(`str1=> ${str1}, str2=> ${str2}`);  //str1 + ', ' + str2
str2 = 'Nice';
console.log(`str1=> ${str1}, str2=> ${str2}`);


//참조타입: 주소값을 갖고 있다.
let obj1 = {  
  fname: 'Hong'
}
let obj2 = obj1;
console.log(`obj1=> ${obj1.fname}, ${obj2.fname}`);
obj1.fname = "Hwang";//참조값을 갖고 있어서 참조하고 있는 Hong의 object값을 바꾼다.
console.log(`obj1=> ${obj1.fname}, ${obj2.fname}`);

//상수 선언 후 속성은 바꿀 수 있다.
const obj3 ={
  fname: 'Park'
}
obj3.fname = "New";
console.log(`obj3=> ${obj3.fname}`)

//심볼: 유니크한 값을 만들어줄 때 사용(object의 중복되지 않는 key값으로 쓸 때 심볼타입으로 데이터 선언)
let sym1 = Symbol('text');
let sym2 = Symbol('text');
console.log(sym1 == sym2);

let hong = {
  sym1: '홍길동'
}
