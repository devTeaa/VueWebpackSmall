<template>
  <div id="app">
    <masterlink></masterlink>
    <list></list>
  </div>
</template>

<script>
import Masterlink from "./components/MasterLink";
import List from "./components/List";

export default {
  name: "App",
  components: {
    Masterlink,
    List
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
