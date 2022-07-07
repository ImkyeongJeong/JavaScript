let template = `

<div>
<router-link tag="button" v-bind:to="{name:'empCreate', params:{emp : emp}}">직원등록</router-link>
<table id="list" border="1">
  <tr>
    <th>employee_id</th>
    <th>first_name</th>
    <th>last_name</th>
    <th>email</th>
    <th>job_id</th>
  </tr>
  <tbody>
    <tr v-for="emp in currentData" v-bind:key="emp.employee_id">
    <td>{{emp.employee_id}}</td>
    <td>{{emp.first_name}}</td>
    <td>{{emp.last_name}}</td>
    <td>{{emp.email}}</td>
    <td>{{emp.job_id}}</td>
    </tr>
  </tbody>
</table>
<!-- 페이지네이션 -->
<ul style="text-align: center;">
<li v-for="page in PagingInfo.totalPage" v-on:click="currentPage = page" class='page'>{{page}}</li>
</ul>
</div>
`

export default {
  name: 'emp-list',
  template: template,
  data: function () {
    return {
      empList: [],
      currentPage: 1
    }
  },
  computed: {
    //data 속성을 필요에 따라서 산출해서 또 다른 프로퍼티가 되도록하는 거 -> 읽기 전용
    //연동된 data속성에 값이 변경될 때만 실행된다.

    // 페이징 관련 totalPage
    PagingInfo: function () {
      let perData = 10;  //한 페이지에 보여줄 데이터 수
      let totalPage = Math.ceil(this.empList.length / perData) //totalPage는 오림으로 정의

      let totalPageArray = []; //for돌리기 때문에 배열로 만들어 준다
      for (let i = 1; i <= totalPage; i++) {
        totalPageArray.push(i);
      }

      return {
        perData: perData,
        totalPage: totalPageArray
      }
    },

    //현재 페이지에 따라 출력될 데이터를 갖고 와야한다.
    currentData: function () {
      let firstIndex = (this.currentPage - 1) * this.PagingInfo.perData;
      let lastIndex = firstIndex + this.PagingInfo.perData - 1;

      return this.empList.filter((empList, index) => {
        return index >= firstIndex ? (index <= lastIndex ? true : false) : false;
      })
    }


  },
  created: function () {
    const component = this;
    fetch('http://192.168.0.29/myserver/empSelect')
      .then(res => res.json())
      .then(data => {
        if(data != null){
          this.empList = data
        }
      }).catch(err => (console.log(err)))
  },
  methods: {
    reloadList: function () {
      fetch('http://192.168.0.29/myserver/empSelect')
        .then(res => res.json())
        .then(data => {
          this.empList = data
        }).catch(err => (console.log(err)))
    }
  }
}