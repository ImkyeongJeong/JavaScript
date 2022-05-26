//map p.140
let obj = {
  sname: 'Hong',
  age: 10
}

let map = new Map();
map.set('sname','hong');  //key값은 중복된 값이 들어올 수 없다.
map.set('sname','hwang'); //동일값은 새로운 값으로 변경됨
map.set(10, 2);
map.set(obj,3);
console.log(map.size);

let val = map.get('sname'); //key값을 넣어주면 value를 갖고 옴
console.log(val);
console.log(obj);

//map.entries(): key와 value를 배열형태로 반환
for (let [key, value] of map.entries()){
  console.log(`key=> ${key}, val=> ${val}`);
}

//key값만 뽑을 때
for(let key of map.keys()){
  console.log(`key=> ${key}`);
}
//value값만 뽑을 때
for(let value of map.values()){
  console.log(`value=> ${value}`);
}

//key, value 전체 삭제
map.clear();
console.log(map.size);

let friends =[{name:'홍길동', age:20},{name:'김민수', age:22},{name:'최민식', age:24}];

firends = [['홍길동', 20],['김민수', 22],['최민식', 24]];
map = new Map(friends);
console.log(map);

//map.get(key) => value
let tag = '<ul>';
document.write(tag);
for (let [key, val] of map.entries()){
  tag += createList(key, val);
};
tag += '</ul>';
document.write(tag);
function createList(key, value){
  //<li>값</li>
  return `<li>${key}-${value}</li>`;
}