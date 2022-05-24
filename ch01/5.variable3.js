
//string -> number
//정수변환
let int1 = window.parseInt(3.234);
int1 = parseInt('3.14');     //문자열 숫자인 값도 처리
// int1 = parseInt('hello'); //NaN(Not a Number)
console.log(int1);

//소수점변환
let double1 = window.parseFloat('3.14abc');
double1 = parseFloat('3.14abc'); //바꿀 수 있는 곳 까지는 변경
console.log(double1);

console.log('3'+'7');                     //결과는 37
console.log(parseInt('3')+parseInt('7')); //결과는 10


//number -> string
console.log(3);
console.log((3).toString());

let arr = [1, 2, 3];
console.log(arr.toString()); //구분자: ,
console.log(arr.join('-'));  //구분자: -


//object 속성의 object,,,,,
let parentObj = {
  fname: 'window',
  lname: 'close',
  childObj:{
    fname: 'document',
    lname: 'open',
    grandChild: {
      hobby: ['run', 'reading']
    }
  }
}
console.log(parentObj.childObj.grandChild.hobby[0]);