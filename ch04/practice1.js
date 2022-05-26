let friends = [{name:'라이언', age:5},{name:'어피치', age:3}
              ,{name:'콘', age:4},{name:'프로도', age:2}];

let newFriends = friends.map(function(val, idx){
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age;
  obj.sno = idx + 1;
  // return obj;                              //[{sname:?, age:?, sno:?},{},{}]       (obj타입)
  return `${obj.sno},${obj.sname},${obj.age}`;//['1,라이언,5', '2,어피치,3', '3,콘,4'] (문자열)
});

console.log(newFriends.join('-'));

let table = '<table border=1><tr>';
//elem에 ['1,라이언,5', '2,어피치,3', '3,콘,4'] 배열이 들어있음
table += `${newFriends.map(elem => {let em = elem.split(','); return '<td>'+em[0]+'</td><td>'+em[1]+'</td><td>'+em[2]+'</td>'}).join('<tr>')}`
table += '</tr></table>';
document.write(table);