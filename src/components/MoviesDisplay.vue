<script>
import { store } from '../store';

export default {
    name: 'MoviesDisplay',
    data() {
        return {
            store
        }
    },
    methods: {
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
            } else {
                return '{{ movie.original_language }}';
            }
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
                <div>
                    <img :src="getLanguageFlag(movie.original_language)" alt="Language Flag" class="flag" />
                </div>
                <h4>{{ movie.vote_average }}</h4>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    
    .flag {
        width: 20px;
    }

</style>