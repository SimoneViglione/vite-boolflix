<script>
    import { shows } from '../store';

    export default {
        name: 'TheHeader',
        data() {
            return {
                shows
            }
        }
    }
</script>

<template>
    <div class="container">
       <h1>Boolflix</h1> 

        <input type="text" class="searchbar" placeholder="cerca un film" v-model="shows.search">
        <button @click="$emit('doSearch')">cerca</button>
 
    </div>
    
</template>

<style lang="scss" scoped>
    .container {
        height: 100px;
        background-color: black;
        color: red;
        align-items: center;
        display: flex;

            h1 {
                margin-left: 30px;
            }
    }

    .searchbar {
        margin-left: 1000px;
    }
</style>