
const hong = {
  memberId: '001',
  memberNm: '홍길동',
  memberAge: 20
}
const hwang = {
  memberId: '002',
  memberNm: '황우영',
  memberAge: 22
}
const park = {
  memberId: '003',
  memberNm: '박민규',
  memberAge: 25
}

const friends =[hong, hwang, park];

//테이블생성(<table><tr><th>타이틀</th></tr><tr><td>데이터</td></tr></table>)
function createTable(ary=[]){ //배열을 매개변수로 받아서 처리
  let tag = '<table border=1>';
  tag += createHeader(ary[0]);
  //tr,td생성
  
  for(let i=0; i<ary.length; i++){
    tag += createTr(ary[i]);
  }
  tag += '</table>';
  return tag;
}

//obj => 속성으로 활용
function createHeader(obj = {}){
  let thead = '<thead><tr>';
  for(let field in obj){  //obj가 갖고 있는 field의 개수만큼 반복
    thead += `<th>${field}</th>`;
  }
  thead += '</tr></thead>';
  return thead;
}

function createTr(obj = {}){
  //<tr><td>데이터</td></tr>
  let tbody = '<tbody><tr>';
  for( field in obj){
    tbody += `<td>${obj[field]}</td>`;
  }
  tbody += '</tr></tbody>';
  return tbody;
}

// let result = createTable(friends);
// document.write(result);
