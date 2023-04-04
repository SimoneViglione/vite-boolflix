<script>
    import { store } from '../store';

    export default {
        name: 'TvSeriesDisplay',
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
        <h1 style="color: red;">TV Series</h1>
        <ul>
            <li v-for="(series, index) in store.tvSeries" :key="index">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img :src="getImageUrl(series.poster_path)" alt="Series poster" class="poster"/>
                        </div>

                        <div class="flip-card-back">
                            <h4>Titolo: {{ series.name }}</h4>
                            <h4>Titolo originale :{{ series.original_name }}</h4>
                            <div>
                                Lingua originale: <img :src="getLanguageFlag(series.original_language)" alt="Language Flag" class="flag" />
                            </div>

                            <div>
                                Voto: <i v-for="n in Math.ceil(series.vote_average / 2)" class="fa-solid fa-star"></i>
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
    }

</style>