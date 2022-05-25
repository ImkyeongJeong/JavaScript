//인스턴스 : 필드, 생성자, 메소드
//프로토타입: 메소드(함수)의 참조값
let year = 2022;
let month = 5; //6월달(월: 0~11월로 표시 됨)
let today = new Date();                  //현재시점 년월일 시분초
console.log(today.toLocaleDateString()); //2022. 5. 25.
console.log(today.toLocaleTimeString()); //오후 3:11:57
console.log(today.toLocaleString());     //2022. 5. 25. 오후 3:11:57

// today = new Date('2022-6-1');     //날짜
today = new Date(year,month+1,0); //n월의 마지막날
today = new Date(year,month,1);   //n월의 1일날
console.log(today.getDay());      //위 날짜의 요일정보(수요일: 3)
console.log(today.getDate());     //날짜정보

//1일 ?요일, 마지막날 몇일?
function showCalendar(year, mon) {
  document.write(`<h3>${year}년 ${mon}월 달력</h3>`);
  let firstDate = new Date(year,month,1); //6월의 1일날을 cal에 대입
  let lastDate = new Date(year,month+1,0);//6월의 마지막날을 cal에 대입
  console.log(firstDate.getDay());        //6월 1일의 요일정보
  console.log(lastDate.getDate());        //6월 1일의 요일정보
  //date객체 선언
}
showCalendar(2025, 5); //6월달