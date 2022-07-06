let template = `
 <div>
  <table id="list">
   <!-- 테이블 헤더 -->
   <tr>
    <th>글번호</th>
    <th>제목</th>
    <th>글쓴이</th>
    <th>작성일</th>
   </tr>

   <!-- 테이블 바디 -->
   <tr v-for="post in currentData" v-bind:key="post.content_id">
   <td>{{post.content_id}}</td>
   <router-link tag="td" v-bind:to="{ name : 'boardRead', params : { post : post }}">
    {{post.title}}</router-link>
   <td>{{post.user_name}}</td>
   <td>{{post.created_at}}</td>
   </tr>
  </table>
  <!-- 페이지네이션 -->
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <template  v-for="page in pagingInfo.totalPage">
        <li class="page-item">
          <a class="page-link" href="#" v-on:click.prevent="currentPage = page">{{ page }}</a>
        </li>
      </template>
    </ul>
  </nav>
  <router-link tag="button" v-bind:to="{name : 'boardWrite'}">글쓰기</router-link>
 </div>`

export default {
  template: template,
  //값을 넣고 빼고
  data: function () { 
    return {
      posts: [],
      currentPage: 1
    }
  },
  computed: { 
    //data 속성을 필요에 따라 산출해서 또 다른 프로퍼티가 되도록 하는 것 -> 읽기전용(값으로 취급)

    //페이징관련 totlaPage
    pagingInfo: function () { 
      let perData = 10;
      let totalPage = Math.ceil(this.posts.length / perData);

      let totalPageArray = [];
      for (let i = 1; i <= totalPage; i++){
        totalPageArray.push(i);
      }

      return {
        perData: perData,
        totalPage : totalPageArray
      }
    },

    //현재 페이지에따라 출력될 데이터
    currentData: function () { 
      //1페이지는 0~9까지
      let firstIndex = (this.currentPage - 1) * this.pagingInfo.perData;
      let lastIndex = firstIndex + this.pagingInfo.perData - 1; //한 페이지에 보여줄 수 만큼 더한다.

      return this.posts.filter((post, index) => { 
        return index >= firstIndex ? ( index <= lastIndex ? true : false): false;
      });
    }
  },
  watch: {
    //data, computed속성의 프로퍼티 변화를 감지해서 진행해야 하는 일련과정을 정의
    //값이아닌 동작 (알람을 전달할 때 사용)
    
  },
  //vue인스턴스 생성 후 초기값을 줄 때 사용 || 업데이트할 때 사용
  //인스턴스 라이프사이클 중에서 어느 시점에 진행해야 하는 프로세스 정의
  created: function () { 
    this.posts = this.$parent.getData().postData;
  }
 }