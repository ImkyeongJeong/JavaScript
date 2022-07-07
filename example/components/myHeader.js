export default {
  template: `
    <div>
      <router-link v-bind:to="{name:'empList'}">{{sitename}}></router-link>
    </div>`,

  data: function () {
    return {
      sitename: '사원관리 시스템'
    }
  }
}