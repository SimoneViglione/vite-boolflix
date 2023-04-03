<script>
    import { store } from '../store';

    export default {
        name: 'TvSeriesDisplay',
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
            } else if (language === 'ko') {
                return '/ko.svg';
            } else {
                return '{{ series.original_language }}';
            }
        }
    }
}

</script>

<template>
    <div class="window">
        <h1>TV Series</h1>
        <ul>
            <li v-for="(series, index) in store.tvSeries" :key="index">
                <div>
                    <img />
                </div>
                <h4>{{ series.name }}</h4>
                <h4>{{ series.original_name }}</h4>
                <div>
                    <img :src="getLanguageFlag(series.original_language)" alt="Language Flag" class="flag" />
                </div>
                <h4>{{ Math.ceil(series.vote_average) }}</h4>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .flag {
        width: 20px;
    }
</style>