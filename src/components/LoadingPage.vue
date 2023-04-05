<script>
  export default {
    name: 'LoadingPage',
    data() {
      return {
        loading: true
      };
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  };
  </script>

  <template>
    <div v-if="loading" class="loading">
      <h1>Boolflix</h1>
    </div>
  </template>

  <style>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .loading h1 {
    color: rgb(0, 223, 107);
    font-size: 24px;
    font-family: 'Bebas Neue', cursive;
    font-size: 10rem;
  }
  </style>
  