<template>
  <div>
    <div class="title">
      <div>
        <span>编号:</span>
        <span class="underline">{{printData.id}}</span>
      </div>
      <div>
        <span>时间:</span>
        <span class="underline">{{printData.date}}</span>
      </div>
    </div>
    <div class="txt">
      <div>
        <span>客户:</span>
        <span class="line">{{printData.client}}</span>
      </div>
      <div>
        <span>电话:</span>
        <span class="line">{{printData.phone}}</span>
      </div>
      <div>
        <span>销售人:</span>
        <span class="line">{{printData.salesperson}}</span>
      </div>
      <div>
        <span>金额:</span>
        <span class="line">{{printData.amount}}</span>
      </div>
      <div>
        <span>状态:</span>
        <span class="line">{{printData.status}}</span>
      </div>
      <div>
        <span>地址:</span>
        <span class="line">{{printData.map}}</span>
      </div>
      <div>
        <span>发货时间:</span>
        <span class="line">{{printData.period}}</span>
      </div>
      <div>
        <span>数量:</span>
        <span class="line">{{printData.quantity}}</span>
      </div>
    </div>
    <div class="parameter">
      <h1>title:</h1>
      <div>固定参数</div>
    </div>
    <div class="img">
      <div class="titleImg">img</div>
      <div class="titleImg">img</div>
      <div>
        <div class="itemImg">img</div>
      </div>
    </div>
    <div class="footer">
      <Button size="large" @click="print">打印</Button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
  data() {
    return {
      printData: undefined
    };
  },
  created() {
    this.printData = this.$route.params;
  },
  methods: {
    print() {}
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 50px 0;
  font-size: 24px;
}
.title >div{
  display: inline-block;
  margin: 10px 50px
}
.underline {
  text-decoration: underline;
}
.txt > div {
  font-size: 18px;
  display: inline-block;
  margin: 20px;
}
.txt .line {
  width: 80px;
  /* border-bottom: solid 1px; */
  text-decoration: underline;
  display: inline-block;
  text-align: center;
}
.parameter {
  margin: 20px 0;
}
.parameter > div {
  background: #eee;
  padding: 80px 0;
}
.img {
  text-align: center;
  width: 794px;
  margin: auto;
  border: solid 1px;
  height: 1123px;
}
.img > .titleImg,
.img > div .itemImg {
  display: inline-block;
  border: solid 1px;
  margin:10px
}
.img > div {
  text-align: left;
}
.titleImg {
  width: 278px;
  height: 278px;
}
.itemImg {
  width: 139px;
  height: 139px;
}
.footer {
  text-align: center;
  margin: 50px 0;
}
</style>
