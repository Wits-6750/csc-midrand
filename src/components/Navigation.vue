<template>
    <div id="navigation">
        <nav
          :class="route==='home' ? 'is-transparent':''"
           class="navbar pl-6 pr-2">
            <div class="navbar-brand">
                <a class="navbar-item logo-wrapper" href="/">
                    <img src="@/assets/img/Logo.svg" alt="" >
                </a>
                <div class="navbar-burger" data-target="navbar-mini">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <div id="navbar-mini" class="navbar-menu">
                <div class="navbar-end link-item">
                    <router-link 
                        to="focus_areas"
                        class="navbar-item"
                        :class="route=== 'home'? 'has-text-white':''"  >
                        focus areas
                    </router-link >
                    <router-link 
                        to="focus_areas"
                        class="navbar-item"
                        :class="route=== 'home'? 'has-text-white':''"  >
                        get involved
                    </router-link >                   
                     <router-link 
                        to="focus_areas"
                        class="navbar-item"
                        :class="route=== 'home'? 'has-text-white':''"  >
                        about us
                    </router-link >                  
                      <router-link 
                        to="focus_areas"
                        class="navbar-item"
                        :class="route=== 'home'? 'has-text-white':''"  >
                        contact us
                    </router-link >
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a 
                                    :class="route=== 'home'? 'has-text-white':''" 
                                    target="_blank" 
                                    href="https://www.facebook.com/CSC-Midrand-Caring-for-Families-and-Children-111990237190793/">
                                    <i class="fa fa-facebook-f"></i>
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

</style>