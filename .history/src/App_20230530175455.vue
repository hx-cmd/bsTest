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
    <div class="process">
      <div class="num">
        <span>{{ processVal }}</span
        >%
      </div>
      <a-progress
        type="circle"
        :strokeColor="{ '0%': '#9970f8', '100%': '#b499f9' }"
        :strokeWidth="10"
        :width="200"
        :percent="processVal"
        :format="() => '异常分数'"
      />
      <div class="detail">
        <div class="l-wrap">
          <img src="@/assets/bj.png" alt="" v-if="processVal > 50" />
          <img src="@/assets/wz.png" alt="" v-else-if="processVal == 0" />
          <img src="@/assets/zc.png" alt="" v-else />
        </div>
        <div class="r-wrap">
          <div class="text">检测状态</div>
          <div class="status" :class="[processCom]">
            {{
              processVal == 0
                ? "未知"
                : processVal <= 50 && processVal > 0
                ? "正常"
                : "报警"
            }}
          </div>
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
/deep/.ant-progress-text {
  font-size: 16px;
  color: #48497f !important;
  top: 65% !important;
}
.process {
  width: 200px;
  margin: 0 auto;
  position: relative;
  .num {
    color: #7865ff;
    font-size: 16px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    span {
      font-weight: bold;
      font-size: 30px;
    }
  }
}
.detail {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .l-wrap {
    margin-right: 10px;
    img {
      width: 80px;
      height: 80px;
    }
  }
  .r-wrap {
    font-size: 16px;
    text-align: left;
    color: #9191b3;
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
