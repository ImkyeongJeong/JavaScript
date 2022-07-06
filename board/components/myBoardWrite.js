let template = `
  <div>
    <input type="text" v-model="title" placeholder="제목을 입력해주세요."><br>
    <textarea v-model="context"
              placeholder="내용을 입력해 주세요."
              row="5"
              max-row="10">
    </textarea>
    <button v-on:click="updateMode ? updateContent() : uploadContent()">저장</button>
    <router-link tag="button" v-bind:to="{ name : 'boardList' }">취소</router-link>
  </div>`

export default {
  template: template,
  props: ['contentId'],
  data: function () { 
    return {
      //게시글 등록시 필요한 정보
      title: '',
      context: '',
      user_id: '',
      created_at: '',
      
      //게시글 수정시 필요한 정보
      updated_at: '',
      updateObject: '',

      //모드 전환용 정보
      updateMode: ''
    }
  },
  created: function () { 
    if (this.contentId > 0) {
      //값이 있을 땐 수정모드
      this.contentId = Number(this.contentId);

      //컴포넌트 출력모드를 변경하고 원본 데이터를 가져옴
      this.updateMode = true;
      this.updateObject = this.$parent.getData().postData.filter(post => {
        return post.content_id == this.contentId
      })[0];

      //원본 데이터에서 필요한 정보를 렌더링
      this.title = this.updateObject.title;
      this.context = this.updateObject.context;

      //수정일자를 셋팅
      this.update_at = this.getData();
    } else {
      //값이 없을 땐 새글모드
      this.updateMode = false;
      this.user_id = this.$parent.getLoginInfo().user_id;
      this.created_at = this.getData();
    }
  },
  methods: {
    //오늘 날짜 가져오기
    getData: function() { 
      let today = new Date();

      let year = today.getFullYear();
      let month = ('0' + (today.getMonth() + 1)).slice(-2);
      let day = ('0' + today.getDate()).slice(-2);

      return year + '-' + month + '-' + day;
    },
    uploadContent: function () { 
      let contentData = this.$parent.getData().contentData;
      let newContentId = 1;
      //출력하고 있는 데이터의 길이가 0보다 클 때
      //오름차순으로 하려면 리턴되는 값이 -1, 내림차순 +1
      if (contentData.length > 0) {
        contentData.sort((a, b) => {
          return a.content_id - b.content_id
        });
        //마지막 데이터의 content_id에 1을 증가
        newContentId = contentData[contentData.length - 1].content_id + 1;
      }

      contentData.push({
        content_id: newContentId,
        user_id: this.user_id,
        title: this.title,
        context: this.context,
        created_at: this.create_at,
        updated_at: this.update_at
      });

      this.$parent.setContentData(contentData);
      this.$router.push({ name: 'boardList' });
    },
    updateContent: function() { 
      let contentData = this.$parent.getData().contentData;
      for (let i = 0; i < contentData.length; i++){
        if (contentData[i].content_id == this.updateObject.content_id) {
          contentData[i].title = this.title;
          contentData[i].context = this.context;
        }
      }

      this.$parent.setContentData(contentData);
      this.$router.push({ name: 'boardList' });
    }
  }
}