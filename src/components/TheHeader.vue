<script>
    import { store } from '../store';

    export default {
        name: 'TheHeader',
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">
       <h1>Boolflix</h1> 

        <input @keyup.enter="$emit('doSearch')" type="text" class="searchbar" placeholder="cerca un film" v-model="store.search">
        <button @click="$emit('doSearch')">cerca</button>
 
    </div>
    
</template>

<style lang="scss" scoped>
    .container {
        height: 100px;
        background-color: rgb(12, 0, 124);
        color: rgb(0, 223, 107);
        align-items: center;
        display: flex;

            h1 {
                margin-left: 30px;
                font-family: 'Bebas Neue', cursive;
                font-size: 3rem;
            }
    }

    .searchbar {
        margin-left: 1000px;
        padding: 2px;
        font-family: 'Bebas Neue', cursive;
    }

    button {
        padding: 4px 8px;
        margin-left: 5px;
        font-family: 'Bebas Neue', cursive;
        background-color: rgb(0, 223, 107);
        border: none;
        border-radius: 5px;
    }
</style>