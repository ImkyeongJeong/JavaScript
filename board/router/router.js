import myBoardList from '../components/myBoardList.js'
import myBoardRead from '../components/myBoardRead.js'
import myBoardWrite from '../components/myBoardWrite.js'
export default new VueRouter({
 mode : 'history',
 routes : [
  {
   path : '/',
   name : 'boardList',
   component : myBoardList
   },
   {
     path: '/boardRead/:post',
     name: 'boardRead',
     component: myBoardRead,
     props : true
   },
   {
     //어디에 담을지만 처리
     path : '/boardWrite/:contentId',
     name: 'boardWrite',
     component: myBoardWrite,
     props : true
   },
   //지정한 경로외 다른 경로가 들어오면 루트로 보내버림
   {
     path: '*',
     redirect : '/'
   }
 ]
})