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
  computed: {
    processCom() {
      if (this.processVal == 0) {
        return "normal";
      } else if (this.processVal > 0 && this.processVal <= 50) {
        return "blue";
      } else {
        return "red";
      }
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.detail {
  display: flex;
  .l-wrap {
    margin-right: 10px;
    img {
      width: 80px;
      height: 80px;
    }
  }
  .r-wrap {
    font-size: 16px;
    .status {
      font-weight: bold;
    }
  }
}
.status {
  &.normal {
    color: #9191b3;
  }
  &.blue {
    color: #88d4ff;
  }
  &.red {
    color: #f45a59;
  }
}
</style>
