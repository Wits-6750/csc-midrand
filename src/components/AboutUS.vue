<template>
    <div id="About-us">
        <Navigation :route="'about_us'"/>
        <div class="header mb-5">
            <h1 class="title has-text-centered"> Our Mission</h1>
            <p class="statement has-text-centered mt-6">To empower children and families by being the  most effective (do things right) and efficient (doing the right things) Social Service provider in the Midrand area (Ivory Park, Ebony Park and Kaalfontein) in the Johannesburg Metro Municipality.</p>
        </div>
        <div class="header mb-5">
            <h1 class="title has-text-centered"> Why choose US?</h1>
            <h2 class="subtitle has-text-centered mt-6 secondary-color"> experience</h2>
            <p class="statement has-text-centered mt-3">The CSC Midrand is a child and family welfare organisation which has been making a difference in people’s lives. CSC is providing support for more than 35 years to the community</p>
        
            <h2 class="subtitle has-text-centered mt-6 secondary-color">Social Service</h2>
            <p class="statement has-text-centered mt-3">This Non-Profit Organisation renders a comprehensive social service to all communities in order to empower them socially, emotionally and economically.</p>
          
            <h2 class="subtitle has-text-centered mt-6 secondary-color">All walks of life</h2>
            <p class="statement has-text-centered mt-3">We render these services to all communities on all levels, irrespective of race, age, gender or association..</p>
        </div>
        <div class="image-wrapper m-6">
            <figure class="image image is-2by1">
                <img src="@/assets/img/image_10.jpg">
            </figure>
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
<style scoped>
    .title {
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: bold;

    }
    .statement {
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        padding: 0px 180px

    }
    @media only screen and (max-width: 769px) {
        .statement {
            padding: 0 0px;
        }
        .header {
            padding: 0 20px !important;
        }
      }
</style>