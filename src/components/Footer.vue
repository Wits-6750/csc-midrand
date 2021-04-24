<template>
    <div id="footer">
        <footer class="footer">
            <div class="content has-text-centered">
                <div class="columns is-mobile">
                    <div class="column">
                        <h4 class="m-5 has-text-left">Contact us</h4>
                        <p class="m-5 has-text-left">
                            midrand@cmroos.co.za
                        </p>
                            <p class="m-5  has-text-left">
                            ivorypark@cmroos.co.za
                        </p>
                            <p class="m-5  has-text-left">
                            ebonypark@cmroos.co.za
                        </p>
                            <p class="m-5 has-text-left">
                            URC Church, 1605 Acacia Street, Ebony Park Ext 4, Midrand
                        </p>
          
                    </div>
                    <div class="column left-border">
                        <ul class="mt-2 mb-5">
                            <router-link 
                                to="focus_areas"
                                class="navbar-item has-text-black" tag="li">
                                Focus Area
                            </router-link>
                            <router-link 
                                to="get_involved"
                                class="navbar-item has-text-black" tag="li">
                                Get Involved
                            </router-link>
                            <router-link 
                                to="about_us"
                                class="navbar-item has-text-black" tag="li">
                                About Us
                            </router-link>
                            <router-link 
                                to="contact_us"
                                class="navbar-item has-text-black" tag="li">
                                Contact Us
                            </router-link>
                            <li style="padding: 0.5rem 0.75rem;">
                                <a 
                                    class="has-text-black"
                                    target="_blank" 
                                    href="https://www.facebook.com/CSC-Midrand-Caring-for-Families-and-Children-111990237190793/">
                                    <i class="fa fa-facebook-square" style="font-size:30px"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
         </footer>
    </div>
</template>


<style scoped>

   .left-border {
       border-left: black dashed 1px;  
    }

    ul {
        list-style: none;
        float: left;
        text-align: left;
    }
    li {
        margin: 20px;
        cursor: pointer;
        list-style: none;

    }

    li:hover {
        color:blue !important;
    }

    footer {
        background-color: #fafafa;
        padding: 3rem 1.5rem 2rem;
    }
</style>