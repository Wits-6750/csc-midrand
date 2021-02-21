import Vue from 'vue'
import Router from 'vue-router'

// Home
import Home from './components/Home.vue'
// Focus Areas
import FocusAreas from "./components/FocusAreas.vue"
Vue.use(Router)
const router = new Router(
    {
        routes: [
            {
                path:`/`,
                name: 'home',
                component: Home

            },
            {
                path:`/focus_areas/`,
                name: 'focus_areas',
                component: FocusAreas
            }
        ]
    }
)


export default router