import Home from '../pages/home/index.vue'
import List from '../pages/list/index.vue'

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home, label:'首页'},
    {path: '/list', component: List, label: '列表'},
]

export default routes
