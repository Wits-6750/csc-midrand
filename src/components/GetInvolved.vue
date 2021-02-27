<template>
   <div id="get_involved">
       <Navigation :route="'get_involved'" />
       <section class="section mt-4">
           <div class="wrapper">
               <div class="columns">
                   <div class="column">
                        <div class="left-header pl-6 pr-6">
                            <div class="circle-count">1</div> 
                            <h1 class="title has-text-weight-medium ml-3 mt-2">DONATIONS</h1>
                        </div>
                        <h2 class="is-size-4 secondary-color secondary-title pl-6 pr-6">Goods</h2>
                        <div class="pl-6 pr-6 mt-6 ">
                            <p class="statement">Whether it is blankets, canned goods, clothing, toys or vehicles you have to give. We are always in dire need of any extra goods to help others where we can</p>
                        </div>

                        <h2 class="is-size-4 secondary-color secondary-title pl-6 pr-6">Prayer</h2>
                        <div class="pl-6 pr-6 mt-6 ">
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


       </section>

   </div>
</template>



<script>
import Navigation from './Navigation.vue'

export default {
    components:{
        Navigation
    }
}
</script>


<style scoped>

.secondary-title {

    margin-top: 80px !important;
    font-style: normal;
    font-weight: 900;
    line-height: 190%;
    letter-spacing: 0.07em;
}
</style>
