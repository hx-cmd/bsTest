<template>
  <div id="app">
   
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

<style>
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
}
.detail .l-wrap {
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
