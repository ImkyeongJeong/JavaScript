//오브젝트: 속성=속성값, 속성=함수
const friends = ['김민식','황성우']
let obj = {
  sname: '홍길동',
  age: 20,
  getInfo: function() {return this.sname;}
}
obj.phone = '010-1111-2222';
obj.friends = friends;
console.log(obj);
console.log(obj.friends);    //['김민식', '황성우']
console.log(obj.friends[0]); //김민식

//Object.defineProperty()정적 메서드 (메서드에 조건을 걸어서 제한을 걸 수 있음)
//객체에 새로운 속성을 직접 정의하거나 이미 존재하는 속성을 수정한 후, 해당 객체를 반환
Object.defineProperty(obj,'score',{
  set: function (score){
    if(score < 0 ){
      alert('점수가 0보다 작습니다.')
    } else if (score >= 100){
      alert('점수가 100보다 큽니다.')
    } else {
      this._score = score;
    }
  },
  get: function (){
    return this._score;
  }
});
// obj.score = -10;  //점수가 0보다 작습니다.
// obj._score = 30; 
 
//Object.assign(): 원본 객체(두 개의 파라메터 중 두 번째 파라메터)의 사본 객체 생성해서 반환 p.129
//없는 속성은 추가, 중복되는 속성은 원본 객체(두 번째 파라메터)의 속성값으로 덮어씀
let refObj = obj;

let copyObj = Object.assign({}, obj);
copyObj.age = 30;

console.log(copyObj, obj); //서로 다른 객체를 갖고 있다.

