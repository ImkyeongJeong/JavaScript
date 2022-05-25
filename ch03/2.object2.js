
//함수 table 생성
//클래스로 table 생성
class Table {
  constructor(data){ 
    this.tag = '';
    this.aryData = data; //매개변수로 받은(ary) 값 대입
  }
  createHeader(){
    this.aryData[0];
    this.tag += '<thead><tr>';
    for(let field in this.aryData[0]){
      this.tag += `<th>${field}</th>`;
    }
    this.tag +='</tr></thead>';
  }
  createBody(){
    this.tag += '<tbody>';
    for(let obj of this.aryData){
      this.tag += '<tr>';
      for(let field in obj){
        this.tag += `<td>${obj[field]}</td>`;
      }
      this.tag += '</tr>';
    }
    this.tag += '</tbody>';
  }
  createTable(){
    this.tag += '<table border=1>';
    //header정보 생성
    this.createHeader();
    //body정보 생성
    this.createBody();
    this.tag += '</table>';
    console.log(this.tag);
    return this.tag;
  }
}

let ary = [{
  sno:'1001', sname:'홍길동', score:80
},{
  sno:'1002', sname:'김민수', score:80
},{
  sno:'1003', sname:'박상민', score:80
}];

let table = new Table(ary);
let str = table.createTable();
document.write(str);