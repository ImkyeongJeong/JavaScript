//p.192
//인덱스(주소)
let arr = new Array();
arr = [];
arr.push('홍길동');
arr.push(20);
arr.push({ name: "Hwang", id: "1001" });
arr.push(["사슴", "고양이"]);
arr.pop();                        //마지막위치 제거
arr.shift();                      //처음위치 제거
arr.unshift(["냥냥이", "멍멍이"]); //첫 번째 위치에 추가
arr.splice(1, 1, 'good');         //특정한 위치에 추가(index값, 요소의 개수, 대체값) 2개를 good으로 대체 개수가 없으면 삭제됨
arr.splice(1, 0, "add1");         //뒤로 밀리면서 추가
arr.splice(1, 0, "add2");
arr.splice(1, 0, "add3");
console.log(arr);

//배열 요소 합 구하기
//reduce()
const arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce(function (ac, el) {
  return ac + el; //return: 그다음 요소의 ac값으로 활용한다.
}, 0);
console.log(sum);

//forEach()
let sum2 = 0;
arr1.forEach(function (el) {
  sum2 = sum2 + el;
});
console.log(sum2);