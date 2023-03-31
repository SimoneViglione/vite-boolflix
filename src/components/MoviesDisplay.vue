<script>
  import { shows } from '../store';

  export default {
        name: 'MoviesDisplay',
        data() {
            return {
                shows
            }
        }
    }
</script>

<template>
    <div>
        <ul>
            <li v-for="(show, index) in shows.movieList" :key="index">
                <h1>ciao</h1>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>