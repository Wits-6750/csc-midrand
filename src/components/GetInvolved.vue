<template>
   <div id="get_involved">
       <Navigation :route="'get_involved'" />
       <section class="section mt-4 p-0">
           <div class="hero-wrapper">
               <div class="columns mt-6">
                   <div class="column mt-6">
                        <div class="left-header pl-6 pr-6">
                            <div class="circle-count">1</div> 
                            <h1 class="title has-text-weight-medium ml-3 mt-2">DONATIONS</h1>
                        </div>
                        <h2 class="is-size-4 secondary-color secondary-title pl-6 pr-6">Goods</h2>
                        <div class="pl-6 pr-5 mt-4">
                            <p class="statement">Whether it is blankets, canned goods, clothing, toys or vehicles you have to give. We are always in dire need of any extra goods to help others where we can</p>
                        </div>

                        <h2 class="is-size-4 secondary-color secondary-title pl-6 pr-6">Prayer</h2>
                        <div class="pl-6 pr-5 mt-4">
                            <p class="statement">Prayer is at the center of everything we do at CSC Midrand. Join us in uplifting of our children, staff, workers, volunteers around the district.</p>
                        </div> 
                   </div>
                   <div class="column">
                       <figure class="image is-4by5">
                           <img class="img-height" src="@/assets/img/image_6.jpg">
                       </figure>
                   </div>
               </div>
           </div>
           <div class="volunteering">
               <div class="columns is-align-items-center">
                    <div class="column">
                        <div class="left-header pl-6 pr-6 mt-4">
                            <div class="circle-count white-border">2</div> 
                            <h1 class="title has-text-weight-medium ml-3 mt-2 has-text-white">VOLUNTEERING</h1>
                        </div>
                         <figure class="image v-position">
                           <img class="img-height" src="@/assets/img/image_7.jpg">
                       </figure>
                    </div>
                    <div class="column">
                        <div class="left-header pl-6 pr-6 mt-4">
                            <h1 class="is-size-5 has-text-white has-text-weight-normal">Any Volunteers? We can’t do the work without our volunteers whom have been supporting us for many years.</h1>
                        </div>
                        <h2 class="is-size-6  pl-6 pr-6 mt-6 has-text-white has-text-weight-normal is-relative">You may be a social worker or psychologist whom can invest in making a difference in the life of others.</h2>
                     </div>
               </div>
            </div>
            <div class="partnership">
                <div class="columns is-align-items-center mb-3">
                   <div class="column mt-6">
                        <div class="left-header pl-6 pr-6">
                            <div class="circle-count">3</div> 
                            <h1 class="title has-text-weight-medium ml-3 mt-2">PARTNERSHIP</h1>
                        </div>
                        <div class="pl-6 pr-6 mt-6 pt-6">
                            <p class="statement">We believe that dynamic partnerships with the private sector are essential to solving complex social welfare challenges. Together, CSC Midrand and our corporate partners can help build a world where all children live with dignity and security.</p>
                        </div>
                         <div class="pl-6 mt-6">
                            <a href="mailto:info@gmail.com" class="partner mr-4">Become a partner</a>
                        </div>
                   </div>
                   <div class="column is-hidden-mobile">
                       <figure class="image is-1by1">
                           <img class="img-height" src="@/assets/img/image_8.jpg">
                       </figure>
                   </div>
               </div>   
            </div>
            <div class="skilled-help">
                <h1 class="is-size-2 is-size-5-mobile has-text-centered has-text-white pt-5 pl-3 pr-3 has-text-weight-bold is-uppercase">Professional People are needed<br> to help manage the organisation </h1>
                <h2 class="has-text-weight-light has-text-white has-text-centered pt-5 pr-4 pl-4">you can volunteer your time and share skills such as<br> financial, human resources, marketing or fundraising<br> knowledge or experience  </h2>
                <div class="m-6 skill-list">
                    <div class="circle-count white-border">4</div> 
                    <h1 class="title has-text-weight-medium ml-3 mt-2 has-text-white is-uppercase">Skilled Helped</h1>
                </div>
                <div class="skill-list">
                    <ul class="a mt-6 mb-2">
                        <li>Docters</li>
                        <li>Therapist</li>
                        <li>accountants</li>
                        <li>social workers</li>
                        <li>care takers</li>
                    </ul>
                </div>
                <div class="skill-list">
                    <ul class="mt-2 mb-5">
                        <li>Nurses</li>
                        <li>Counsellors</li>
                        <li>Accountants</li>
                        <li>Drivers</li>
                        <li>Psychologists</li>
                    </ul>
                </div>
            </div>
           
       </section>
        <Footer />

   </div>
</template>



<script>
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
export default {
    components:{
        Navigation,
        Footer
    }
    
}
</script>


<style scoped>

    .secondary-title {

        margin-top: 70px !important;
        font-style: normal;
        font-weight: 900;
        line-height: 190%;
        letter-spacing: 0.07em;
    }
    img { 
        object-fit: cover;
    }
    .volunteering {
        background-color: #B75451;
    }

    .skilled-help {
        background-color: #2F4858;
        height: inherit;

    }
   
    .white-border {
        border: 1px solid #fff;
        color: #fff;
    }


    .v-position{
    
        margin-top: 50px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .partner {
        
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color:#3E4E6C;
        border-radius:5px;
        cursor:pointer;
        color:#fff;
        font-size:12px;
        padding:10px 15px;
    }
    .skill-list {
        display: flex;
        justify-content: center;
        color: white;
    }
    ul {
        display: flex;
    }
    .skill-list li{
        list-style: disc;
        margin: 20px;
        width: 125px
    }

    @media only screen and (max-width: 769px) {
        ul {
            display: grid;
        }
        .skilled-help  p {
            font-size: 0.7rem;
        }
    }
</style>
