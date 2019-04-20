<template>
  <div class="container">
    <div class="search_inpt">
      时间:
      <Input class="int" v-model="time" placeholder="请输入时间"/>
    </div>
    <div class="search_inpt">
      客户:
      <Input class="int" v-model="client" placeholder="请输入客户"/>
    </div>
    <div class="search_inpt">
      销售人:
      <Input class="int" v-model="salesperson" placeholder="请输入销售人"/>
    </div>
    <Button type="primary">搜索</Button>
    <div class="add_btn">
      <Button type="primary" @click="modal1 = true">添加</Button>
    </div>
    <Table :columns="columns1" :data="data1"></Table>
    <div class="page">
      <Page :total="100"/>
    </div>
    <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok">
      <Row class="line">
        <Col span="12">
          <div class="i">编号:</div>
          <Input class="modal_ipt"/>
        </Col>
        <Col span="12">
          <div class="i">日期:</div>
          <Input class="modal_ipt"/>
        </Col>
      </Row>
      <Row class="line">
        <Col span="12">
          <div class="i">客户:</div>
          <Input class="modal_ipt"/>
        </Col>
        <Col span="12">
          <div class="i">电话:</div>
          <Input class="modal_ipt"/>
        </Col>
      </Row>
      <Row class="line">
        <Col span="12">
          <div class="i">销售人:</div>
          <Input class="modal_ipt"/>
        </Col>
        <Col span="12">
          <div class="i">金额:</div>
          <Input class="modal_ipt"/>
        </Col>
      </Row>
    </Modal>
  </div>
</template>

<script>
export default {
  methods: {
    ok() {}
  },
  data() {
    return {
      modal1: false,
      time: "",
      client: "",
      salesperson: "",
      columns1: [
        {
          title: "编号",
          key: "id"
        },
        {
          title: "日期",
          key: "date"
        },
        {
          title: "客户",
          key: "client"
        },
        {
          title: "电话",
          key: "phone"
        },
        {
          title: "销售人",
          key: "salesperson"
        },
        {
          title: "金额",
          key: "amount"
        },
        {
          title: "操作",
          key: "operating",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      console.log(params.row)
                    }
                  }
                },
                "详情订单"
              ),
            ]);
          }
        }
      ],
      data1: [
        {
          id: "12",
          date: 18,
          client: "name",
          date: "2016-10-03",
          phone: "12132"
        },
        {
          id: "34",
          date: 24,
          client: "name",
          date: "2016-10-01",
          phone: "12132"
        },
        {
          id: "43",
          date: 30,
          client: "name",
          date: "2016-10-02",
          phone: "12132"
        },
        {
          id: "2",
          date: 26,
          client: "name",
          date: "2016-10-04",
          phone: "12132"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
.container > .search_inpt {
  display: inline-block;
  margin: 60px 10px;
  width: 200px;
}
.container > .search_inpt .int {
  width: 150px;
}
.container > .add_btn {
  margin: 5px 60px;
  text-align: right;
}
.page {
  margin: 20px;
}

.modal_ipt {
  width: 150px;
}
.line {
  margin-top: 10px;
}
.i {
  width: 40px;
  display: inline-block;
}
</style>
