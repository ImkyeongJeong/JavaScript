//AJAX(비동기통신) : Asynchronous Javascript And Xml

//동기: 결과가 주어질 때까지 아무것도 못하고 대기해야 함
//비동기: 결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업을 할 수 있음

//setTimeout(): 지정된 시간 후 시행
//동기방식
setTimeout(e => { 
  console.log('first');
  
  setTimeout(e => {
    console.log('second');

    setTimeout(e => {
      console.log('third');
    }, 2000);

  }, 3000);

}, 1000);

//비동기방식
setTimeout(e => {
  console.log('second');
}, 1000);

setTimeout(e => {
  console.log('second');
}, 3000);

setTimeout(e => {
  console.log('third');
}, 2000);