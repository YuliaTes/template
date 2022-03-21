<template>
  <div>
    <v-main></v-main>

        <router-view></router-view>
  </div>
</template>


<script>
import vMain from './components/v-main'

export default {
  name: 'app',
  components: {
    vMain
  }
}

</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
html {
  height: 100%;
  box-sizing: border-box;

  body {
    margin: 0;
    background-color: #00a889;
    font-family: "Roboto Condensed", sans-serif;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  color: #ffffff;
}

.v-wrapper {
  margin: 0 auto;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
