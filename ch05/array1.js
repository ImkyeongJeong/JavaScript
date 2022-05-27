//String.indexOf() => 있으면 인덱스 리턴/ 없으면: -1리턴
//Array.indexOf() =>  있으면 인덱스 리턴/ 없으면: -1리턴
//Array.find() => 있으면 찾은 값 리턴/ 없으면: undefined리턴

let arr1 = ['펭수', '라이언', '어피치', '콘', '브라운', '무지'];
let idx = arr1.indexOf('라이언'); //1
arr1.indexOf('라이언', idx + 1);  //찾은 값 이후부터 찾기

let find_arr = arr1.find(el => el == '라이언');
console.log(find_arr);


//Array.some(함수) => 1건이라도 조건 만족 true / false
let boolean_some = arr1.some(el => el.length >= 3); //1건이라도 element 크기가 3이상인가?
console.log(boolean_some);//true

//Array.every(함수) => 모든 조건 만족 ture / false
let boolean_every = arr1.every(el => el.length >= 3); //모든 element 크기가 3이상인가?
console.log(boolean_every);//false

//Array.sort(); 배열 정렬
console.log(arr1.sort());
console.log(arr1.sort().reverse()); //역순

//문자, 숫자일 경우
let arr2 = [3, 4, 21, 10, 1];
arr2.sort((a, b) => { //a:비교하는 원본, b:비교하는 대상
  //a, b => 0보다 큰 값이 반환 b, a    /뒤에 있는 값을 앞에 넣겠다
  //a, b => 0보다 큰 작은 값이 반환 a, b
  // if (a - b > 0) {
  //   return 10;  //0보다 큰 값을 리턴
  // } else {
  //   return -10; //-값을 리턴
  // }

  // return b - a; //내림차순
  return a - b; //오름차순
});
console.log(arr2);

//오브젝트일 경우
let arr3 = [{ name: "김민수", age: 25 },
{ name: "최익수", age: 23 },
{ name: "이민기", age: 27 }];

//나이순
arr3.sort((e1, e2) => e1.age - e2.age);

//이름순
arr3.sort((e1, e2) => {
  if (e1.name < e2.name) { return -1 }
  else return 1;
});
console.log(arr3);

let names = "정임경, 박근형, 김진형, 황하경, 류미래";
let arrNames = names.split(/,\s+/) //,공백을 구분자로 배열을 생성
  .sort().join(' ');
console.log(arrNames);
// console.log(arrNames);

//join(): 배열의 모든 요소를 연결해 하나의 문자열로 만듦
//split(): (구분자) 문자열을 분할하는 메서드