<template>
  <div id="app">
    <a-progress
      type="circle"
      :strokeColor="{ '0%': '#f00', '50%': '#fff', '100%': '#f0' }"
      :strokeWidth="10"
      :width="200"
      :percent="50"
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
