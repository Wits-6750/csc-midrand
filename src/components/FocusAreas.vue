<template>
    <div id="focus_areas">
        <Navigation :route="'focus_areas'" />
        <br>
        <section class="section p-0 pt-6">
            <div class="columns">
                <div class="column is-6 pt-6">
                    <div class="left-header pl-6 pr-6">
                        <div class="circle-count">1</div> 
                        <h1 class="title has-text-weight-medium ml-3 mt-2">CHILD PROTECTION</h1>
                        <br>
                    </div>
                    <div class="pl-6 pr-6 mt-6 ">
                        <p class="statement">All children should grow up in a loving and safe environment, but the sad reality is that it does not always happen. Babies and children are often exposed to abuse and neglect by not receiving the love, food and safe care that they need to thrive and ultimately become a balanced adults who can deal with daily challenges. Violence, poverty and family disintegration are impacting negatively on the lives of thousands of babies and children.</p>
                        <br>
                        <p class="statement">We are dependent on community members to report when a child and family needs help. An investigation will be carried out and steps taken depending on the circumstances. The main focus is to prevent further abuse and neglect of a person who cannot protect or look after themselves. Children are more exposed and we therefore have several holiday projects in place to empower children and youth, and also to keep them safe. </p>
                    </div>  
                </div>
                <div class="column is-6">
                    <img class="focus_areas_img_height " src="@/assets/img/image_2.jpg">
                </div>
            </div>
            <div class="columns reverse">
                <div class="column is-6 pt-6">
                    <div class="left-header pl-6 pr-6">
                        <div class="circle-count">2</div> 
                        <h1 class="title has-text-weight-medium mt-2 ml-3">FAMILY PRESERVATION</h1>
                        <br>
                    </div>
                    <div class="pl-6 pr-6 mt-6" >
                        <p class="statement">Family preservation is described as the strengthening of families in order to keep them together as far as possible. Children or vulnerable persons need the loving support of their families members for best developments. We believe in respecting each family member’s dignity and worth and will afford them the opportunity to talk and to receive therapy and counselling. Any further steps to be taken or assistance to be offered are discussed with family members in order to achieve the best possible outcomes.</p>
                    </div>  
                </div>
                                <div class="column is-6">
                    <img class="focus_areas_img_height " src="@/assets/img/image_3.jpg">
                </div>
            </div>
            <div class="columns">
                <div class="column is-6 pt-6">
                    <div class="left-header pl-6 pr-6">
                        <div class="circle-count">3</div> 
                        <h1 class="title has-text-weight-medium ml-3 mt-2"> POVERTY RELIEF</h1>
                        <br>
                    </div>
                    <div class="pl-6 pr-6 mt-6 ">
                        <p class="statement">Food Parcels, blankets and clothes are always needed to alleviate the needs of the poor. The CMR assists people to free themselves from the grip of poverty and to become part of the main stream economy. We encourage people to join our needlework, gardening and other projects in order to enable them to become self sufficient.</p>
                        <br>
                        <p class="statement">The CMR and congregations work together to evaluate material needs and assist when possible. In certain cases a person or family’s circumstances are intensively investigated and referred to the church’s alimentation committee. </p>
                    </div>  
                </div>
                <div class="column is-6">
                    <img class="focus_areas_img_height " src="@/assets/img/image_4.jpg">
                </div>
            </div>
            <div class="columns reverse">
                <div class="column is-6 pt-6">
                    <div class="left-header pl-6 pr-6">
                        <div class="circle-count">4</div> 
                        <h1 class="title has-text-weight-medium mt-2 ml-3">COMMUNITY INITIATIVES</h1>
                        <br>
                    </div>
                    <div class="pl-6 pr-6 mt-6" >
                        <p class="statement">The aim is to promote the social functioning of the community as a whole by empowering them with the knowledge and ability to address their social needs and  problems.</p>
                        <br>
                        <p class="statement">Community work projects are based on data of a community, such as origin and development, demographic data and tendencies, nature of social institutions, availability and accessibility of resources, incidence and range of social problems as well as the potential of people. This data is used for developing and implementing social welfare programmes, community projects and programmes for community development. </p>
                    </div>  
                </div>
                <div class="column is-6">
                    <img class="focus_areas_img_height " src="@/assets/img/image_5.jpg">
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
    height: 35rem;
    display:block;
    margin:auto;
}
    .reverse {
        flex-direction: row-reverse !important
    }
@media only screen and (max-width: 769px) {
    .focus_areas_img_height {
        display:block;
        margin:auto;

    }



}
</style>