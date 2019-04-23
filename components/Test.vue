<template>
  <div>
    <div class="select-list">
      <div class="select-item" v-for="(sw,index) in switch_list" :key="sw.id">
        <span>{{sw.title}}</span>
        <Select
          v-model="selected[index]"
          @change="changeData(index)"
          @input="inputData"
          style="width:400px;"
        >
          <Option
            v-for="option in sw.option_list"
            :key="option.id"
            v-if="option.active"
            :label="option.title"
            :value="option.id"
          ></Option>
        </Select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      switch_list: [
        {
          id: 26,
          option_list: [
            {
              big_img: "",
              id: 3,
              option_id: null,
              small_img: "",
              title: "彩钢门"
            },
            {
              big_img: "",
              id: 4,
              option_id: null,
              small_img: "",
              title: "防爆门"
            }
          ],
          switch_id: null,
          title: "风格"
        },
        {
          id: 28,
          option_list: [
            {
              big_img: "",
              id: 5,
              option_id: 3,
              small_img: "",
              title: "单门"
            },
            {
              big_img: "",
              id: 6,
              option_id: 3,
              small_img: "",
              title: "双门"
            },
            {
              big_img: "",
              id: 7,
              option_id: 3,
              small_img: "",
              title: "子母门"
            },
            {
              big_img: "",
              id: 8,
              option_id: 3,
              small_img: "",
              title: "四门平开"
            },
            {
              big_img: "",
              id: 9,
              option_id: 3,
              small_img: "",
              title: "四门子母"
            },
            {
              big_img: "",
              id: 14,
              option_id: 4,
              small_img: "",
              title: "单门"
            },
            {
              big_img: "",
              id: 15,
              option_id: 4,
              small_img: "",
              title: "双门"
            },
            {
              big_img: "",
              id: 16,
              option_id: 4,
              small_img: "",
              title: "子母门"
            },
            {
              big_img: "",
              id: 17,
              option_id: 4,
              small_img: "",
              title: "四门平开"
            },
            {
              big_img: "",
              id: 18,
              option_id: 4,
              small_img: "",
              title: "四门子母"
            }
          ],
          switch_id: 26,
          title: "类型"
        },
        {
          id: 29,
          option_list: [
            {
              big_img: "",
              id: 10,
              option_id: 3,
              small_img: "",
              title: "内开"
            },
            {
              big_img: "",
              id: 11,
              option_id: 3,
              small_img: "",
              title: "外开"
            },
            {
              big_img: "",
              id: 19,
              option_id: 4,
              small_img: "",
              title: "内开"
            },
            {
              big_img: "",
              id: 20,
              option_id: 4,
              small_img: "",
              title: "外开"
            }
          ],
          switch_id: 26,
          title: "开向"
        },
        {
          id: 33,
          option_list: [
            {
              big_img: "",
              id: 31,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "门扇款式"
        },
        {
          id: 34,
          option_list: [
            {
              big_img: "",
              id: 39,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "门头花款式"
        },
        {
          id: 35,
          option_list: [
            {
              big_img: "",
              id: 32,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "皇冠头款式"
        },
        {
          id: 36,
          option_list: [
            {
              big_img: "",
              id: 33,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "罗马柱款式"
        },
        {
          id: 41,
          option_list: [
            {
              big_img: "",
              id: 34,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "饰边"
        },
        {
          id: 47,
          option_list: [
            {
              big_img: "",
              id: 35,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "上板款式"
        },
        {
          id: 48,
          option_list: [
            {
              big_img: "",
              id: 36,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "中板款式"
        },
        {
          id: 49,
          option_list: [
            {
              big_img: "",
              id: 37,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "下板款式"
        },
        {
          id: 50,
          option_list: [
            {
              big_img: "",
              id: 38,
              option_id: 4,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 26,
          title: "门花款式"
        },
        {
          id: 51,
          option_list: [
            {
              big_img: "",
              id: 12,
              option_id: 10,
              small_img: "",
              title: "60"
            },
            {
              big_img: "",
              id: 13,
              option_id: 10,
              small_img: "",
              title: "80"
            },
            {
              big_img: "",
              id: 21,
              option_id: 19,
              small_img: "",
              title: "无"
            },
            {
              big_img: "",
              id: 22,
              option_id: 20,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 29,
          title: "门扇工艺"
        },
        {
          id: 52,
          option_list: [
            {
              big_img: "",
              id: 23,
              option_id: 21,
              small_img: "",
              title: "无"
            },
            {
              big_img: "",
              id: 24,
              option_id: 22,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 51,
          title: "企料工艺"
        },
        {
          id: 54,
          option_list: [
            {
              big_img: "",
              id: 26,
              option_id: 24,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 52,
          title: "留位"
        },
        {
          id: 55,
          option_list: [
            {
              big_img: "",
              id: 27,
              option_id: 26,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 54,
          title: "锁边"
        },
        {
          id: 56,
          option_list: [
            {
              big_img: "",
              id: 28,
              option_id: 26,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 54,
          title: "铰边"
        },
        {
          id: 57,
          option_list: [
            {
              big_img: "",
              id: 29,
              option_id: 27,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 55,
          title: "锁框"
        },
        {
          id: 58,
          option_list: [
            {
              big_img: "",
              id: 30,
              option_id: 28,
              small_img: "",
              title: "无"
            }
          ],
          switch_id: 56,
          title: "铰框"
        },
        {
          id: 59,
          option_list: [
            {
              big_img: "",
              id: 40,
              option_id: 4,
              small_img: "",
              title: "C1"
            }
          ],
          switch_id: 26,
          title: "框型"
        }
      ],
      selectedCopy: []
    };
  },
  created() {
    this.initData(null);
    this.inputData();
    this.selectedCopy = this.selected.slice(0);
  },
  methods: {
    inputData() {
      this.$emit("listendata", this.selected);
    },
    initData(id) {
      let index2 = 0;
      for (let item of this.switch_list) {
        let index = 0;
        for (let item1 of item.option_list) {
          if (item1.option_id == id) {
            index++;
            if (index == 1) {
              this.selected[index2] = item1.id;
              this.initData(item1.id);
            }
            this.$set(item1, "active", true);
          }
        }
        index2++;
      }
    },
    removeData(oldValue) {
      for (let item of this.switch_list) {
        for (let item1 of item.option_list) {
          if (item1.option_id == oldValue) {
            let index = this.selected.indexOf(item1.id);
            if (index > -1) {
              this.selected[index] = undefined;
            }
            this.removeData(item1.id);

            this.$set(item1, "active", false);
          }
        }
      }
    },
    changeData(index) {
      let l = this.selected.length;
      if (this.selectedCopy[index] != this.selected[index]) {
        this.removeData(this.selectedCopy[index]);
        this.initData(this.selected[index]);
      }
      this.selectedCopy = this.selected.slice(0);
    }
  }
};
</script>

<style>
.select-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.select-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
}
.font {
  font-size: 12px;
  -webkit-text-size-adjust: none;
  transition: scale(2);
}
</style>
