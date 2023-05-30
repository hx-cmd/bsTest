<template>
  <div id="app">
    <a-row>
      <a-col :span="12">
        <a-slider v-model="inputValue1" :min="1" :max="100" />
      </a-col>
      <a-col :span="4">
        <a-input-number
          v-model="inputValue1"
          :min="1"
          :max="20"
          style="marginleft: 16px"
        />
      </a-col>
    </a-row>

    <a-progress
      type="circle"
      :strokeColor="{ '0%': '#9970f8', '100%': '#b499f9' }"
      :strokeWidth="10"
      :width="200"
      :percent="60"
      :format="(percent) => `${percent} Days`"
    />
    <div class="detail">
      <img src="@/assets/ima" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      inputValue1: 0,
    };
  },
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
