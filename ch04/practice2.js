let str = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.Enim assumenda ratione blanditiis esse tenetur voluptas voluptates.Voluptates cumque, voluptate, nihil, quam iure minus porro velit sed perspiciatis laboriosam est soluta!`;
let strAry = str.split(' '); //단어를 배열에 담음

//prompt(): 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띄움
//startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
let findWord = prompt('찾을 문자열을 입력하세요>>');
for (let word of strAry) {
  // console.log(world);
  word.startsWith(findWord);
}

//찾고자하는 문자로 시작하는 단어 => 새로운 배열 생성
let newAry = strAry.filter(elem => elem.startsWith(findWord));
console.log(newAry);