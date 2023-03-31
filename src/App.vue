<script>
  import TheHeader from './components/TheHeader.vue';
  import MoviesDisplay from './components/MoviesDisplay.vue'

  export default {
    components: {TheHeader,MoviesDisplay}
  }
</script>

<template>  
  <header>
    <TheHeader/>
  </header>

  <main>
  
  </main>
</template>

<style lang="scss">
  @use "./styles/general.scss";
</style>
