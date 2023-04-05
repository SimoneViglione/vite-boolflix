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
        <h1>Movies</h1>
        <ul>
            <li v-for="(movie, index) in store.movies" :key="index">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img :src="getImageUrl(movie.poster_path)" alt="Movie poster" class="poster"/>
                        </div>

                        <div class="flip-card-back">
                            <h4>Titolo: {{ movie.title }}</h4>
                            <h4>Titolo originale: {{ movie.original_title }}</h4>
                            <div>
                               <h4>Lingua originale</h4>: 
                               <img v-if="getLanguageFlag(movie.original_language)" :src="getLanguageFlag(movie.original_language)" alt="Language Flag" class="flag" />
                               <h4 v-else>{{ movie.original_language }}</h4>
                            </div>
                            <div>
                                <h4>Voto</h4>: 
                                <span v-for="i in 5" :key="i">
                                    <i v-if="i <= Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star"></i>
                                    <i v-else class="fa-regular fa-star"></i>
                                </span> 
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

    h1 {
        margin-bottom: 1rem;
        color: rgb(0, 223, 107);
        font-family: 'Bebas Neue', cursive;
    }

    h4 {
        display: inline-block;
        margin-bottom: 5px;
    }

</style>