<template>
  <div id="app">
  </div>
</template>

<script>
// import utils from "./index";
export default {
  name: 'app',
  mounted() {
    console.log(utils);
    // console.log(utils.url.getFormatUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=vue%20init%20webpack-simple%20my-project&oq=webpack%25E5%25BC%2580%25E5%258F%2591%25E6%25A8%25A1%25E6%259D%25BF&rsv_pq=f27f4cc90001c4f6&rsv_t=1ddcgy0yIJPMDZR2i5wmViDH1cmEyacTEFHrRx2GsTVfAZkR0jZ79Sogj%2Fg&rqlang=cn&rsv_enter=1&rsv_dl=tb&inputT=656&rsv_sug3=130&rsv_sug1=63&rsv_sug7=000&rsv_sug2=0&rsv_sug4=657&rsv_sug=1'));
    
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
