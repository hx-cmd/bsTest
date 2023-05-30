<template>
  <div id="app">
    <a-row>
      <a-col :span="12">
        <a-slider v-model="processVal" :min="0" :max="100" />
      </a-col>
      <a-col :span="4">
        <a-input-number
          v-model="processVal"
          :min="0"
          :max="100"
          style="marginleft: 16px"
        />
      </a-col>
    </a-row>

    <a-progress
      type="circle"
      :strokeColor="{ '0%': '#9970f8', '100%': '#b499f9' }"
      :strokeWidth="10"
      :width="200"
      :percent="processVal"
      :format="(percent) => `${percent} Days`"
    />
    <div class="detail">
      <div class="l-wrap">
        <img src="@/assets/bj.png" alt="" />
      </div>
      <div class="r-wrap">
        <div class="text">检测状态</div>
        <div class="status" :class="[]">
          {{
            processVal == 0
              ? "未知"
              : processVal < 50 && processVal > 0
              ? "正常"
              : "报警"
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      processVal: 0,
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
