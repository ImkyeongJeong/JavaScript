let template = `
 <div>
  <form id="info" onsubmit="return false">
    <template v-for="info in infos">
    <div>
      <label v-bind:for="info" v-bind:name="info" v-model:"empInfo[info]">
    </div>
    </template>
  </form>
  <div>
    <button v-on:click="updateMode ? updateContent() : uploadContent()">저장</button>
    <router-link tag="button" v-bind:to="{ name : 'empList' }">취소</router-link>

  </div>
 </div>
`

export default {
  template: template,
  props: ['empId'],
  data: function () { 
    return {
      infos: ['employee_id', 'first_name', 'last_name', 'email', 'job_id'],
      //등록시 필요한 정보
      empInfo: {
        employee_id: 0,
        first_name: '',
        last_name: '',
        email: '',
        job_id : 0
      },
      //수정시 추가로 필요한 정보
      updateInfo: {},
      //모드 전환용 정보
      updateMode: ''
    }
  },
  created: function () { 
    if (this.empId > 0) {
      this.empId = Number(this.empId);

      const component = this;

      $.ajax({
        url: 'http://192.168.0.29/myserver/empFind',
        type: 'get',
        data: { employee_id: component.component.empId },
        success: function (data) {
          if (data != null) {
            component.updateInfo = data;
            component.empInfo = component.updateInfo;
            component.updateMode = true;
          }
        }, error: function (reject) {
          console.log(reject);
        }
      });
    }
  },
  methods: {
    uploadContent: function () { 
      $.ajax({
        url: 'http://192.168.0.29/myserver/empUpdate',
        type: 'post',
        data: component.empInfo,
        dataType: 'json',
        success: function (data) {
          if (data != null) {
            component.$router.push({ name: 'empList ' });
          }
        },
        error: function (reject) {
          console.log(reject);
        }
      });
    }
  }
}