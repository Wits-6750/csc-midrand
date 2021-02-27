<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,900&display=swap');
  #app {
      font-family: "Roboto", sans-serif !important;

    }

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

  .secondary-color {
    color: #B75451 !important

  }

    .statement {
        letter-spacing: 0.03rem;
        text-transform: capitalize;
        color: rgba(0, 0, 0, 0.6);
        font-size: 13px;
        line-height: 30px;
    }
</style>
