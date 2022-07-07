import empList from './components/empList.js'
import empCreate from './components/empCreate.js'
import empRead from './components/empRead.js'
import empWrite from './components/empWrite.js'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'empList',
      component: empList
    },
    {
      path: '/empCreate/:employeeId',
      name: 'empCreate',
      component: empCreate
    },
    {
      path: '/empRead/:empId',
      name: 'empRead',
      component: empRead,
      props : true
    },
    {
      path: '/empWrite/:empId',
      name: 'empWrite',
      component: empWrite,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})