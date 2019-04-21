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
        <cascaderMulti v-model="code" :data="codes" placeholder="切换点"></cascaderMulti>
      </div>
      <div>
        <Button type="primary">搜索</Button>
      </div>
    </div>
    <div class="dimensional">
      <div class="item" v-for="(item,index) in items" :key="index">
        {{item.name}}
        <span>
          <Input style="width: 60px"/>
        </span>X
        <span>
          <Input style="width: 60px"/>
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
      items: [
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" },
        { name: "name", x: "12", y: "122" }
      ],
      ipt_data: {
        id: 20020032300,
        date: "2019-04-20",
        client: "",
        phone: "",
        salesperson: "",
        amount: "",
        status: "",
        map: "",
        period: "",
        quantity: "",
        code: "",
        item: {}
      },
      code: [],
      codes: db.switch_list
    };
  },
  methods: {
    save() {
      this.$Modal.success({
        title: '消息',
        content: '保存成功！'
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
