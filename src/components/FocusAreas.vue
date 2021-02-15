<template>
    <div id="focus_areas">
        <Navigation :route="'focus_areas'" />
        <br>
        <section class="section p-0 pt-6">
            <div class="columns">
                <div class="column is-6 pt-6">
                    <div class="left-header pl-6">
                        <div class="circle-count">1</div> 
                        <h1 class="title has-text-weight-medium ml-3 mt-2"> Child Protection</h1>
                        <br>
                    </div>
                    <div>
                         <div class="pl-6 ml-6 mt-6 ">
                            <p class="statement">All children should grow up in a loving and safe environment, but the sad reality is that it does not always happen. Babies and children are often exposed to abuse and neglect by not receiving the love, food and safe care that they need to thrive and ultimately become a balanced adults who can deal with daily challenges. Violence, poverty and family disintegration are impacting negatively on the lives of thousands of babies and children.</p>
                            <br>
                            <p class="statement">We are dependent on community members to report when a child and family needs help. An investigation will be carried out and steps taken depending on the circumstances. The main focus is to prevent further abuse and neglect of a person who cannot protect or look after themselves. Children are more exposed and we therefore have several holiday projects in place to empower children and youth, and also to keep them safe. </p>
                        </div>  
                    </div>
                </div>
                <div class="column is-6 m-2">
                    <img class="focus_areas_img_height " src="@/assets/img/image_2.jpg">
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
.left-header{
    display: inline-flex;
}

.circle-count{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 5px;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    font-size: 25px 
}

.statement {
    letter-spacing: 0.03rem;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
    line-height: 30px;
}
.focus_areas_img_height {
    height: 40rem;
}

@media only screen and (max-width: 769px) {
.focus_areas_img_height {
    margin: 20px;
    height: 30rem;

}

}
</style>