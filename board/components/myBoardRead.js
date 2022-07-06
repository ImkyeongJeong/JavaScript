import commentList from './commentList.js'

let template = `
  <div>
    <div>
      <!-- 게시글 -->
      <div>
        <span> {{post.content_id}} </span>
        <span> {{post.title}} </span>
        <span>글쓴이 : {{post.user_name}} </span>
        <span>작성일 : {{post.created_at}} </span>
      </div>
      <div> {{ post.context }} </div>
    </div>
    
    <div>
      <!-- 버튼(수정, 삭제) -->
      <router-link tag="button" v-bind:to="{ name : 'boardWrite', params : {contentId : post.content_id}}">
        수정
      </router-link>
      <button v-on:click="deleteData">삭제</button>
    </div>

    <div>
      <!-- 해당 게시글 댓글 -->
      <comment-list v-bind:contentId="post.content_id"></comment-list>
    </div>
  </div>`

export default {
  template: template,
  components: {
    commentList
  },
  // router에 정의된 path 값이랑 동일한 이름으로 적어줌
  props: ['post'],
  methods : {
    deleteData: function () { 
      //삭제, 추가는 app에 있는 contentData 이용
      //post는 출력하기 위한 용도
      let contentData = this.$parent.getData().contentData;
      for (let i = 0; i < contentData.length; i++){
        if (contentData[i].content_id == this.post.content_id) {
          contentData.splice(i, 1);
        }
      }

      this.$parent.setContentData(contentData);
      this.$router.push({ name: 'boardList' });
    }
  }
}