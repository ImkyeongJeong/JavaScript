
//addEventListener():이벤트 등록 메서드(이벤트이름, 함수)
//페이지를 다 읽은 다음에 함수 실행하기 위함
document.addEventListener('DOMCountentLoaded', function () {
  let li = document.createElement('li'); //li태그를 생성 <li></li>
  let txt = document.createTextNode('Cheery');
  li.appendChild(txt); //appendChild():부모 -자식 관계형성 / 하위요소로 txt
  console.log(li);

  //<ul>자식 li
  let ul = document.querySelector('ul'); //querySelector():요소 노드를 한 개 선택
  ul.appendChild(li);
  console.log(ul);
});

//element => getElementsBy.. : tag기준
//node => querySelect or All() : node(element,attrubute,text)

//node: (text)span(text), (text)span(text), (text)span(text)
//element: span, span, span