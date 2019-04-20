<template>
  <div @click="on">
    <div class="title">
      <span>编号:</span>
      <span class="underline"></span>
      <span>时间:</span>
      <span class="underline"></span>
    </div>
    <div class="txt">
      <div>
        <span>客户</span>
        <span class="underline"></span>
      </div>
      <div>
        <span>电话</span>
        <span class="underline"></span>
      </div>
      <div>
        <span>销售人</span>
        <span class="underline"></span>
      </div>
      <div>
        <span>金额</span>
        <span class="underline"></span>
      </div>
      <div>
        <span>状态</span>
        <span class="underline"></span>
      </div>
      <div>
        <span>地址</span>
        <span class="underline"></span>
      </div>
      <div>
        <span>发货时间</span>
        <span class="underline"></span>
      </div>
      <div>
        <span>数量</span>
        <span class="underline">{{xxx}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "./eventBus.js";
export default {
  data() {
    return {
      xxx: undefined
    };
  },
  created() {
    Bus.$on("getTarget", target => {
      this.xxx = target;
      console.log(this.xxx);
    });
  },
  methods: {
    on() {
      

    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 50px 0;
  font-size: 16px;
}
.underline {
  text-decoration: underline;
}
</style>
