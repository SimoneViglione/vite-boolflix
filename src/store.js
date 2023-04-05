import { reactive } from "vue";

export const store = reactive (
    {
        movies: [],
        tvSeries: [],
        search: '',
        show: true,
        popular: [],
        popularTV: []
    }
);