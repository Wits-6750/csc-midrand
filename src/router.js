import Vue from 'vue'
import Router from 'vue-router'

// Home
import Home from './components/Home.vue'
// Focus Areas
import FocusAreas from "./components/FocusAreas.vue"

// Get Involved
import GetInvolved from "./components/GetInvolved.vue"

// Contact US
import ContactUS from "./components/ContactUS.vue"

// About US
import AboutUS from "./components/AboutUS.vue"
Vue.use(Router)
const router = new Router(
    {
        routes: [
            {
                path:'/',
                name: 'home',
                component: Home

            },
            {
                path:'/focus_areas/',
                name: 'focus_areas',
                component: FocusAreas
            },
            {
                path:'/get_involved/',
                name: 'get_involved',
                component: GetInvolved
            },
            {
                path:'/contact_us',
                name: 'contact_us',
                component: ContactUS        
            },
            {
                path:'/about_us',
                name: 'about_us',
                component: AboutUS        
            }
        ]
    }
)


export default router