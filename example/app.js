import myHeader from "./components/myHeader.js";
import router from "./router.js";

let template = `
<div>
<my-header></my-header>
<router-view></router-view>
</div>
`
new Vue({
  el: '#app',
  router,
  template: template,
  components: {
    myHeader
  },


  data: {
    employee: []
  },

  created: function () {
    fetch('http://192.168.0.29/myserver/empSelect')
      .then(res => res.json())
      .then(data => {
        this.employee = data
      }).catch(err => (console.log(err)))
  },
  methods: {
    getData: function () {
      return {
        employee: this.employee
      }
    }
  }
})

