<script>
  import { store } from '../store';

  export default {
        name: 'MoviesDisplay',
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div>
        <ul>
            <li v-for="(movie, index) in store.movies" :key="index">
                <h4>{{ movie.title }}</h4>
                <h4>{{ movie.original_title }}</h4>
                <h4>{{ movie.original_language }}</h4>
                <h4>{{ movie.vote_average }}</h4>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>