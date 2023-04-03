<script>
import { store } from '../store';

export default {
    name: 'MoviesDisplay',
    data() {
        return {
            store
        }
    },
    props: {
        getLanguageFlag: {
        type: Function,
        },
        getImageUrl: {
        type: Function,
        }
    }
}
</script>

<template>
    <div class="window">
        <h1 style="color: red;">Movies</h1>
        <ul>
            <li v-for="(movie, index) in store.movies" :key="index">
                <div>
                    <img :src="getImageUrl(movie.poster_path)" alt="Movie poster" class="poster"/>
                </div>
                <h4>Titolo: {{ movie.title }}</h4>
                <h4>Titolo originale: {{ movie.original_title }}</h4>
                <div>
                    Lingua originale: <img :src="getLanguageFlag(movie.original_language)" alt="Language Flag" class="flag" />
                </div>
                <div>
                   Voto: <i v-for="n in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star"></i> 
                </div>
                
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>