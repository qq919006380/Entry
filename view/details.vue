<template>
  <div class="container">
    <div class="title">
      编号：
      <span class="underline">{{ipt_data.id}}</span>
      时间：
      <span class="underline">{{ipt_data.date}}</span>
    </div>
    <div class="entry">
      <div>
        <span>客户：</span>
        <Input class="ipt" v-model="ipt_data.client"/>
      </div>
      <div>
        <span>电话：</span>
        <Input class="ipt" v-model="ipt_data.phone"/>
      </div>
      <div>
        <span>销售人：</span>
        <Input class="ipt" v-model="ipt_data.salesperson"/>
      </div>
      <div>
        <span>金额：</span>
        <Input class="ipt" v-model="ipt_data.amount"/>
      </div>
    </div>
    <div class="entry">
      <div>
        <span>状态：</span>
        <Input class="ipt" v-model="ipt_data.status"/>
      </div>
      <div>
        <span>地址：</span>
        <Input class="ipt" v-model="ipt_data.map"/>
      </div>
      <div>
        <span>发货期：</span>
        <Input class="ipt" v-model="ipt_data.period"/>
      </div>
      <div>
        <span>数量：</span>
        <Input class="ipt" v-model="ipt_data.quantity"/>
      </div>
    </div>
    <div class="switching">
      <div class="point">
        <cascaderMulti v-model="ipt_data.code" :data="codes" placeholder="切换点"></cascaderMulti>
      </div>
      <div>
        <Button @click="search" type="primary">搜索</Button>
      </div>
    </div>
    <div class="dimensional">
      <div class="item" v-for="(item,index) in ipt_data.items" :key="index">
        {{item.name}}
        <span>
          <Input style="width: 60px" v-model="item.x"/>
        </span>X
        <span>
          <Input style="width: 60px" v-model="item.y"/>
        </span>
      </div>
      <br>
    </div>
    <div>
      <div class="img">
        <h1>imgData</h1>
      </div>
    </div>
    <div class="footer">
      <Button @click="save" type="primary">保存</Button>
      <Button @click="print">打印</Button>
    </div>
  </div>
</template>

<script>
import db from "./db.json";
export default {
  data() {
    return {
      ipt_data: {
        id: 20020032300, //编号
        date: "2019-04-20", //日期
        client: "", //客户
        phone: "", //电话
        salesperson: "", //销售人
        amount: "", //金额
        status: "", //状态
        map: "", //地址
        period: "", //发货期
        quantity: "", //数量
        code: [],
        items: [
          { name: "as", x: "12", y: "1226" },
          { name: "ds", x: "1321", y: "1225" },
          { name: "fs", x: "2132", y: "1242" },
          { name: "sc", x: "22", y: "1223" },
          { name: "re", x: "36", y: "1222" },
          { name: "hg", x: "123", y: "1221" },
          { name: "ui", x: "19", y: "12223" },
          { name: "hj", x: "22", y: "1222" },
          { name: "mh", x: "132", y: "1222" },
          { name: "kh", x: "12", y: "1212" },
          { name: "sg", x: "112", y: "922" },
          { name: "dv", x: "142", y: "1228" }
        ]
      },
      codes: db.switch_list
    };
  },
  mounted() {
    for (var x in this.$route.params) {
      this.ipt_data[x] = this.$route.params[x];
    }
  },
  methods: {
    search() {
      console.log(this.ipt_data.code);
    },
    save() {
      this.$Modal.success({
        title: "消息",
        content: "保存成功！"
      });
    },
    print() {
      this.$router.push({
        name: "print",
        params: this.ipt_data
      });
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
.title {
  font-size: 18px;
  margin: 60px 0;
}
.title .underline {
  text-decoration: underline;
  padding: 0 3px;
}
.entry {
  margin: 60px;
}
.entry > div {
  display: inline-block;
  margin: 10px;
}
.entry .ipt {
  width: 200px;
}
.switching > div {
  display: inline-block;
}
.switching > .point {
  width: 600px;
}
.dimensional {
  margin: 55px 0;
  text-align: left;
}
.dimensional > .item {
  display: inline-block;
  margin: 10px 20px;
}
.img {
  background: #eee;
  padding: 50px;
}
.footer {
  margin: 60px 0;
}
</style>

