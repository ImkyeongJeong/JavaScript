//tagged literal
let str = 'Hello, World';
let msg = 'Hi';
str = `${msg}`;
let result = `${str == 'Hi' ? true : false}`;
console.log(result);

//배열요소: map: A -> B로 변경, filter:true값일 때 A -> A를 새로운 배열에 담음, reduce: map, filter,집계
let friends = [{ name: '라이언', age: 5 }, { name: '어피치', age: 3 }
  , { name: '콘', age: 4 }, { name: '프로도', age: 2 }];
let newFriends = friends.map(function (val, idx) {
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age * 2;
  obj.sno = idx + 1;
  return obj;
});

console.log(newFriends);
console.clear();
//filter
newFriends = friends.filter(function (val, idx) {
  return idx > 1; //idx가 1보다 큰 값만 반환
});

//reduce 
newFriends = friends.reduce(function (accum, val, idx, ary) {
  return accum + val.age; //누적집계를 한다. 0+5/5+3/8+4/12+2
}, 0);
console.log(newFriends);

//맵핑
newFriends = friends.reduce(function (accum, val, idx, ary) {
  console.log(accum, val);
  accum.push(val); // []빈 배열에 {}담음 -> [{}] // [{}] + {} -> [{},{}] // 누적된 값을 다음 값의 초기값으로 사용
  return accum;
}, []);
console.log(newFriends);

//li로 만들어보기
//<ul><li>1,라이언,5</li><li>2,어피치,4</li>..</ul>
newFriends = friends.reduce(function (accum, val, idx, ary) {
  let tag = '';
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li>${val.name}, ${val.age}</li>`;
  if (idx == friends.length - 1) {
    tag += '</ul>';
  }
  return accum + tag; //이전 값에 누적
}, '');
document.write(newFriends);


//table로 만들어보기
newFriends = friends.reduce(function (accum, val, idx, ary) {
  let tag = '';
  if (idx == 0) {
    tag += '<table border=1><tr>';
  }
  tag += `<td>${val.name}</td><td>${val.age}</td></tr>`;
  if (idx == friends.length - 1) {
    tag += '</table>';
  }
  return accum + tag; //이전 값에 누적
}, '');
document.write(newFriends);