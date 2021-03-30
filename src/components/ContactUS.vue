<template>
    <div id="contact_us" >
       <Navigation :route="'contact_us'" />
       <div class="columns is-align-self-center">
           <div class="column is-6">
               <h1 class="header is-size-2 is-size-4-mobile">Together We Create Change in our community</h1>
               <p class="mt-6 subtext"> <span class="" >Prisca Mathabatha</span> (Social Work Manager)<br> 076-699-2630</p>
               <p class="mt-5 subtext"> <span class="" >Brenda Nkomo</span> (Secretary) <br>064-886-4031</p>
               <p class="mt-6 subtext">
                   midrand@cmroos.co.za
               </p>
                <p class="mt-3 subtext">
                   ivorypark@cmroos.co.za
               </p>
                <p class="mt-3 subtext">
                   ebonypark@cmroos.co.za
               </p>
                <p class="mt-4 subtext">
                   URC Church, 1605 Acacia Street, Ebony Park Ext 4, Midrand
               </p>

                <p class="mt-6 subtext">
                   Here is our details for any <span><b>Donations</b></span>
               </p>
                <div class="box"> 
                   <p class="payment-details"><b>Banking Details</b> :  CMR Gauteng East; ABSA Lynwood Ridge
                   Account No: 405 963 5688; Branch Code: 333-845; 
                   Reference: Choice of focus area and your name
                   </p>
                </div>
           </div>
           <div class="column is-6">
                <img class="" src="@/assets/img/image_9.jpg">
           </div>
       </div>

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

<style scope>

.header {
 text-align: left;
 padding: 0 60px;
 margin-top: 60px;
 font-weight: 500;
 line-height: 150%;
 letter-spacing: 3px;
 font-style: normal;
 color: black;
 text-transform: uppercase;
}
.subtext {
    letter-spacing: 2px;
    line-height: 140%;
    font-style: normal;
    padding: 0 60px;
    font-size: 14px;
}
 .subtext span {
    color: #B75451;
    font-weight: 500;
}
.box {
    margin: 40px 55px;
}
.payment-details{
    font-weight: 200;
    line-height: 150%;
    letter-spacing: 2.5px;
    font-style: normal;
    font-size: 13px;
    color: black;
}

</style>