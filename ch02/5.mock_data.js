let data = `[{
  "id": 1,
  "first_name": "Roddy",
  "last_name": "Basson",
  "email": "rbasson0@springer.com",
  "gender": "Male",
  "salary": 57
}, {
  "id": 2,
  "first_name": "Shawn",
  "last_name": "Stapley",
  "email": "sstapley1@ox.ac.uk",
  "gender": "Female",
  "salary": 82
}, {
  "id": 3,
  "first_name": "Carlynn",
  "last_name": "Colloby",
  "email": "ccolloby2@unc.edu",
  "gender": "Female",
  "salary": 80
}, {
  "id": 4,
  "first_name": "Nelli",
  "last_name": "Moncreiffe",
  "email": "nmoncreiffe3@huffingtonpost.com",
  "gender": "Female",
  "salary": 84
}, {
  "id": 5,
  "first_name": "Helge",
  "last_name": "Edison",
  "email": "hedison4@dyndns.org",
  "gender": "Female",
  "salary": 66
}, {
  "id": 6,
  "first_name": "Sholom",
  "last_name": "Smedley",
  "email": "ssmedley5@1und1.de",
  "gender": "Male",
  "salary": 96
}, {
  "id": 7,
  "first_name": "Ciel",
  "last_name": "Vinnicombe",
  "email": "cvinnicombe6@cbsnews.com",
  "gender": "Female",
  "salary": 65
}, {
  "id": 8,
  "first_name": "Pedro",
  "last_name": "Westall",
  "email": "pwestall7@cloudflare.com",
  "gender": "Male",
  "salary": 74
}, {
  "id": 9,
  "first_name": "Vivianne",
  "last_name": "Jorgesen",
  "email": "vjorgesen8@pbs.org",
  "gender": "Female",
  "salary": 81
}, {
  "id": 10,
  "first_name": "Tybi",
  "last_name": "Daingerfield",
  "email": "tdaingerfield9@tamu.edu",
  "gender": "Female",
  "salary": 81
}]`;

//parse():JSON => 오브젝트타입으로 변경
data = JSON.parse(data);
console.log(data);

//salary가 80이상인 데이터 출력
let over80 = data.filter((val) => {
  console.log(val);
  return val.salary >= 80;
});
console.log(over80);

//gender가 Female인 데이터만 출력
let females = data.filter(obj => obj.gender == 'Female');
console.log(females);

let str = createTable(females);
document.write(str);