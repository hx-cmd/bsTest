<template>
  <div id="app">
    <a-progress
      type="circle"
      :strokeColor="{ '0%': '#f00', '100%': '#b69cf9', '100': '#f00' }"
      :strokeWidth="10"
      :width="200"
      :percent="100"
      :format="(percent) => `${percent} Days`"
    />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
