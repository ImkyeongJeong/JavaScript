
var a = 1;
var b = 5;

function outerFunc(){

  function innerFunc(){
    a = b;
  }
  console.log(a); // 1
  a = 3;
  b = 4;
  innerFunc();
  console.log(a); // 3 -> 4
}
outerFunc();