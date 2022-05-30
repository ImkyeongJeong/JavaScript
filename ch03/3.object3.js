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

//달력 만들기 (1일 ?요일, 마지막날 ?일)
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
function showCalendar(year, month) {
  document.write(`<h3>${year}년 ${month+1}월 달력</h3>`);
  let firstDate = new Date(year,month,1); //6월의 1일날을 cal에 대입
  let lastDate = new Date(year,month+1,0);//6월의 마지막날을 cal에 대입
  console.log(lastDate);
  console.log(firstDate.getDay());        //6월 1일의 요일정보
  console.log(lastDate.getDate());        //6월의 마지막 날짜 정보

  let calendar = '<table border=1>';
  calendar += '<thead><tr>';
  for(let day of days){
    calendar += '<th>' + day + '</th>';
  }
  calendar += '</tr></thead><tbody><tr>';
  for(let i = 0; i < firstDate.getDay(); i ++){
    calendar += '<td></td>';
  }
  for(let day = 1; day <= lastDate.getDate(); day++){
    calendar += '<td>' + day + '</td>';
    if((firstDate.getDay() + day) % 7 == 0){
      calendar += '</tr><tr>';
    }
  }
  calendar += '</table>';
  document.write(calendar);
}
showCalendar(2022, 6); //6월달