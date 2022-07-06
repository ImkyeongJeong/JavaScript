import myHeader from './components/myHeader.js'
import router from './router/router.js'
import originalData from './data/index.js'

//router와 component를 연결해서 vue instance를 만드는 역할
let template = `
 <div>
  <my-header></my-header>
  <router-view></router-view>
 </div>`

new Vue({
 el : '#app',
 router,
 template : template,
 components : {
  myHeader
 },
 data : {
  userData : [],
  contentData : [],
  commentData: [],
  loginUser: {}
 },
 computed : {
  postData : function(){
   return this.contentData.map(content =>{
     let selectUserName = this.userData.filter(user =>{
     return (user.user_id == content.user_id);
     })[0].name;
    return {
     ...content,
     user_name : selectUserName
    }
   })
  }
 },
 created : function() {
  this.userData = originalData['User'];
  this.contentData = originalData['Content'];
   this.commentData = originalData['Comment'];
   //로그인 됐다는 것을 확인하기 위한 용도로 아무거나 꺼내오면 됨
   this.loginUser = this.userData[0]; 
  },
  methods: {
    getData: function () { 
      return {
        userData : this.userData,
        contentData : this.contentData,
        commentData : this.commentData,
        postData : this.postData
      }
    },
    //정보 넘겨주기위한 용도
    getLoginInfo : function(){
      return this.loginUser;
    },
    setContentData : function (contentData) {
      this.contentData = contentData;
    },
    setCommentData : function (commentData) {
      this.commentData = commentData;
    }
 }
})