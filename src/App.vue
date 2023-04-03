<script>

  import axios from 'axios';

  import { store } from './store.js';

  import TheHeader from './components/TheHeader.vue';
  import MoviesDisplay from './components/MoviesDisplay.vue';
  import TvSeriesDisplay from './components/TvSeriesDisplay.vue';

  export default {
    components: {TheHeader, MoviesDisplay, TvSeriesDisplay},

    data() {
    return {
      store,
    }
  },
  methods: {

    searchMovies() {
      let urlMovieApi = 'https://api.themoviedb.org/3/search/movie?api_key=a91336465eb3fe5bd14a421736bbed22'
      let urlSeriesApi = 'https://api.themoviedb.org/3/search/tv?api_key=a91336465eb3fe5bd14a421736bbed22'

      if (store.search.length > 0) {
          urlMovieApi += `&query=${store.search}&language=it-IT`;
          urlSeriesApi += `&query=${store.search}&language=it-IT`;
        }

        axios.get(urlMovieApi)
        .then(response => {
        this.store.movies = response.data.results;
        console.log(response.data.results);
      });

        axios.get(urlSeriesApi)
          .then(response => {
          this.store.tvSeries = response.data.results;
          console.log(response.data.results);
      });
    },
    getLanguageFlag(language) {
        if (language === 'en') {
            return '/en.svg';
        } else if (language === 'it') {
            return '/it.svg';
        } else if (language === 'fr') {
            return '/fr.svg';
        } else if (language === 'ja') {
            return '/ja.svg';
        } else if (language === 'de') {
            return '/de.svg';
        } else if (language === 'es') {
            return '/es.svg';
        } else if (language === 'pt') {
            return '/pt.svg'; 
        } else if (language === 'zh') {
            return '/zh.svg';
        } else if (language === 'ch') {
            return '/ch.svg';
        } else if (language === 'ru') {
            return '/ru.svg'; 
        } else if (language === 'ko') {
            return '/ko.svg'; 
        } else {
            return '{{ movie.original_language }}';
        }
    },
    getImageUrl(posterPath) {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }
  }
}
</script>

<template>  
  <header>
    <TheHeader @doSearch="searchMovies"/>
  </header>

  <main>
    <MoviesDisplay :getLanguageFlag="getLanguageFlag" :getImageUrl="getImageUrl"/>

    <TvSeriesDisplay :getLanguageFlag="getLanguageFlag" :getImageUrl="getImageUrl" />
  </main>
</template>

<style lang="scss">
  @use "./styles/general.scss";
</style>
