//전역객체(상위객체:window), 전역변수

var avar = '안녕';  //var:widow(전역객체)가 갖고 있는 소속으로 만들 때 사용
let alet = '안녕';  //let:변수에 값만 담고싶을 때 사용

window.alert('반갑습니다.');
console.log(this.avar); //this:window(최상위객체)의 속성값 avar읽기
console.log(this.alet); //undefined

function run(){
  console.log(this.avar);
  console.log(this.alet);
}
run();

//변수 자체로만 출력할 땐
console.log(avar);
console.log(alet);