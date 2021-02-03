<template>
    <div id="home">
        <section class="section home-wrapper p-0">
            <Navigation :route="'home'"/>
            <div class="hero-wrapper">
                <div class="columns is-height-100 is-align-items-center m-0 mobile-background-img">
                    <div class="column ">
                        <h1 class="header pl-6 mt-6 pb-6 is-size-2-mobile ">
                            Providing <br>
                            Services to the<br>
                            <span>Community</span>
                        </h1>
                        <h2 class="subtitle is-size-6 pl-6 pb-4">
                            To empower children and families by being the  most effective and efficient Social Service provider in the Midrand area (<span>Ivory Park, Ebony Park and Kaalfontein</span>) in the Johannesburg Metro Municipality.
                        </h2>
                        <div class="pl-6 mt-6">
                            <a href="mailto:info@gmail.com" class="get-involved mr-4">GET INVOLVED</a>
                            <a href="" class="donate mr-4" >DONATE</a>
                        </div>
                    </div>
                    <div class="column p-0 is-hidden-mobile">
                        <figure class="image">
                            <img class="is-height-100" src="@/assets/img/image_1.jpg">
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
    components: {
        Navigation
    }
    
}
</script>


<style scoped>
    .home-wrapper {
        height: 100vh;
    }
    .hero-wrapper {
        position: absolute;
        top: 0;
        height: 50vh;
        width: 100% ;
    }
    .is-height-100 {
        height: 100vh;
        display:flex
    }

    .header {
        font-size: 40px;
        font-weight: 500;
        font-style: normal;
        line-height: 150%;
        letter-spacing: 0.3rem;
        color:black;
        text-transform: uppercase;

    }
    .header span{
        color: #B75451;
        font-size: 50px;
        font-weight: 900;
    }

@media only screen and (max-width: 769px) {
.header{ 
        color:white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .subtitle {
        color:white !important;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .header span{
        font-size: 40px;
    }
    .mobile-background-img{
        background-image: linear-gradient(rgba(0, 0, 0, 0.4),
                       rgba(0, 0, 0, 0.4)), url('../assets/img/image_1.jpg');
        background-repeat: repeat;
        background-size: cover;
    }

}
    .subtitle {
        color:#746f6e;
        font-style: normal;
        font-weight: normal;
        line-height: 150%;
        text-transform: capitalize;
    }

    .subtitle span {
        color: #B75451;
    }

    .get-involved {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color:#3E4E6C;
        border-radius:5px;
        cursor:pointer;
        color:#fff;
        font-size:12px;
        padding:10px 15px;

    }

    .donate {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color:#fff;
        border: #3E4E6C solid 1px;
        border-radius:5px;
        cursor:pointer;
        color:#3E4E6C;
        font-size:12px;
        padding:10px 15px;
    }

</style>