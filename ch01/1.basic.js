//[오브젝트1, 오브젝트2, 오브젝트3]
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

const members = [hong, hwang, park];

// for of(배열일 때), for in(object일 때)
for(let member of members){           //members의 길이만큼 member란 변수에 hong, hwang, park을 담음
  for(let field in member){           //hong이 갖고 있는 field와 field값 출력(memberId, memberNm, memberAge)
    console.log(field + ' => ' + member[field]);
  }
}

document.write('<h3>Hello</h3>');
document.write('<ul>');
document.write('<li>사과</li>');
document.write('<li>오렌지</li>');
document.write('<li>파인애플</li>');
document.write('</ul>');

let table = '<table border=1>';
table += '<tr><th>회원아이디</th><th>회원이름</th><th>회원나이</th></tr>';
//배열의 수 만큼 반복
for(let member of members){
  table += '<tr>';
  //필드의 수 만큼 반복
  for(let field in member){
    table += '<td>'+member[field]+'</td>';
  }
  table += '</tr>';
}
table += '</table>';
document.write(table);
