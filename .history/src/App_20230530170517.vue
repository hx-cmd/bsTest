<template>
  <div id="app">
    <a-progress
      type="circle"
      :strokeColor="{ '0%': '#9970f9', 50%': '#b69cf9', '100': '#9970f9' }"
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
