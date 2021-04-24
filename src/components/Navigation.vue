<template>
    <div id="navigation">
        <nav
          :class="route==='home' ? 'is-transparent':''"
           class="navbar pl-6 pr-2">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item logo-wrapper">
                <img src="@/assets/img/Logo.svg" alt="" >
                </router-link>
                <div 
                    class="navbar-burger"
                    :class="{'is-active':is_menu_active}"
                    @click="is_menu_active=!is_menu_active"
                    data-target="navbar-mini">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbar-mini" class="navbar-menu" :class="{'is-active':is_menu_active}">
                <div class="navbar-end link-item">
                    <router-link 
                        to="focus_areas"
                        class="navbar-item has-text-black">
                        <span :class="route=== 'focus_areas' ? 'active-nav':''">focus areas</span>
                    </router-link >
                    <router-link 
                        to="get_involved"
                        class="navbar-item has-text-black">
                        <span :class="route=== 'get_involved' ? 'active-nav':''">get involved</span>
                    </router-link >                   
                     <router-link 
                        to="about_us"
                        class="navbar-item has-text-black">
                        <span :class="route=== 'about_us' ? 'active-nav':''">about us</span>
                    </router-link >                  
                      <router-link 
                        to="contact_us"
                        class="navbar-item has-text-black">
                        <span :class="route=== 'contact_us' ? 'active-nav':''">contact us</span>
                    </router-link >
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a 
                                    class="has-text-black"
                                    target="_blank" 
                                    href="https://www.facebook.com/CSC-Midrand-Caring-for-Families-and-Children-111990237190793/">
                                    <i class="fa fa-facebook-square"></i>
                               </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        route: String
    },
    data (){
        return {
          is_menu_active: false
        }
    }
}
</script>
<style scoped>

.logo-wrapper img {
    max-height: 4rem  !important;
}

.link-item {
    font-style: normal;
    font-weight: 500;
    font-style: normal; 
    font-size: 12px !important;
    text-transform: uppercase;
}

.is-transparent {
    background-color: rgba(255, 255, 255, 0);
}

.active-nav {
    border-bottom: black solid 1px;
    width: 90px;
}

</style>