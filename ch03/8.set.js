// set : 중복허용 X
// 속성 => 속성값 : map
// 속성 => 속성 : set

let set = new Set();
set.add("홍길동");
set.add(20);
set.add({});
set.add("홍길동");      //중복 허용X
console.log(set.size);  //size 3


//entries() : key, value 모두 반환
for (let [key, val] of set.entries()){
  console.log(`key: ${key}, val: ${val}`);
}
//key반환
set.keys();
//value반환
set.values();

let obj1 = {};
let obj2 = {};
set.add(obj1);
set.add(obj2);
console.log(set.size);
