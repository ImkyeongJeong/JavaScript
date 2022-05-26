//string vs object

let str1 = '홍길동';             //string
let str2 = new String('홍길동'); //object(new라는 키워드로 생성자 호출 시)
console.log(str1, str2);
console.log(typeof str1, typeof str2);
console.log(str1 == str2);       //값만비교 == (true)
console.log(str1 === str2);      //값과 타입을 비교할 때 === (false)

//p.158
str1 = '   how are you   to   day everyone.   ';

//trim: 좌우 공백 제거 / trimStart(): 좌 공백제거 / trimEnd(): 우 공백제거
str1 = str1.trim();

//replace =>찾을 문자열을 대체문자로 변경
// /\s+/ =>정규표현식에서 s: 공백을 의미. +: 1개 이상을 의미, g:전체
// str1 = str1.replace(/\s/g, '');

//split() =>문자열을 매개값을 기준으로 잘라서 배열로 생성
//join(매개값) => 배열타입을 문자로 변경, 매개값을 구분자로 사용
// filter() =>배열에서 매개값의 함수의 true값만 새로운 배열
str1 = str1.split(' ').filter(elem => elem != '');
str1 = str1.join(' ');
console.log(str1);

//toString(): 숫자를 문자열로 변경하는 메서드
console.log(typeof(333).toString());

// indexOf(), lastIndexOf()(뒤에서부터): 찾은 문자열 시작 위치를 숫자로 반환
let idx = 'hello, world'.indexOf('w');
console.log(idx); //7
idx = 'hello, world, hel'.lastIndexOf('hel');
console.log(idx); //14

//substring 문자열 가져오기
let strs = 'hello, nice, world, hel';
idx = strs.indexOf('world') + 'world'.length;
console.log(idx); //18
console.log(strs.substring(idx)); //, hel
