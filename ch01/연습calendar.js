

let tableTag = '<table border=1>';
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

tableTag += '<tr>';
for(let day of days){
  tableTag += '<th>' + day + '</th>';
}
tableTag += '</tr><tr>';

for(let day = 1; day <= 31; day++){
  tableTag+='<td>'+ day +'</td>';
  if(day%7==0){
    tableTag+='</tr><tr>';
  }
}
tableTag += '</table>';
document.write(tableTag);