<script>

  import axios from 'axios';

  import { store } from './store.js';

  import TheHeader from './components/TheHeader.vue';
  import MoviesDisplay from './components/MoviesDisplay.vue'

  export default {
    components: {TheHeader,MoviesDisplay},

    data() {
    return {
      store,
    }
  },
  methods: {

    searchMovies() {
      let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=a91336465eb3fe5bd14a421736bbed22'

      if (store.search.length > 0) {
          urlApi += `&query=${store.search}&language=it-IT`;
        }

        axios.get(urlApi)
        .then(response => {
        this.store.movies = response.data.results;
        console.log(response.data.results);
      });
    }
  }
}
</script>

<template>  
  <header>
    <TheHeader @doSearch="searchMovies"/>
  </header>

  <main>
    <MoviesDisplay/>
  </main>
</template>

<style lang="scss">
  @use "./styles/general.scss";
</style>
