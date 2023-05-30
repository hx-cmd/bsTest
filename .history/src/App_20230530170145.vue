<template>
  <div id="app">
    <a-progress
      type="circle"
      :strokeColor="{'0%': '#9970f8','100%': '#b69cf9'}"
      :percent="75"
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
