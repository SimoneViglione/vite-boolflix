<script>

  import axios from 'axios';

  import { shows } from './store.js';

  import TheHeader from './components/TheHeader.vue';
  import MoviesDisplay from './components/MoviesDisplay.vue'

  export default {
    components: {TheHeader,MoviesDisplay},

    data() {
    return {
      shows,
    }
  },
  methods: {

    searchMovies() {
      let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=a91336465eb3fe5bd14a421736bbed22'

      if (shows.search.length > 0) {
          urlApi += `?name=${shows.search}`;
        }

        axios.get(urlApi)
        .then(response => {
        this.shows.movieList = response.data.results;
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
