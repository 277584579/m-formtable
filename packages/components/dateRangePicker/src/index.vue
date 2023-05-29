<template>
  <div class="DateRangePicker">
    <DatePicker
      type="date"
      :placeholder="placeholder"
      :value="updataValueStart"
      :options="options1"
      @on-change="onChange1"
    ></DatePicker>
    <span class="interval">—</span>
    <DatePicker
      type="date"
      :placeholder="placeholder"
      :value="updataValueEnd"
      :options="options2"
      @on-change="onChange2"
    ></DatePicker>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { DatePicker } from "@syman/ark-ui";
let that: any = {};
@Component({
  name: "DateRangePicker",
  // components: {
  //   DatePicker,
  // },
})
export default class DateRangePicker extends Vue {
  @Prop()  value!: string | number;
  @Prop()  placeholder!: string;
  @Prop()  index!: number;
   updataValueStart = "";
   updataValueEnd = "";
   options1 = {
    shortcuts: [
      {
        text: "清空",
        value() {
          return "";
        },
      },
      {
        text: "今天",
        value() {
          return new Date();
        },
      },
      {
        text: "确定",
        value() {
          return that.updataValueStart;
        },
      },
    ],
  };
   options2 = {
    shortcuts: [
      {
        text: "清空",
        value() {
          return "";
        },
      },
      {
        text: "今天",
        value() {
          return new Date();
        },
      },
      {
        text: "确定",
        value() {
          return that.updataValueStart;
        },
      },
    ],
  };
   onChange1(v:any):void {
    this.updataValueStart = v;
    type IType = {
      data: string;
      index: number;
    };
    const data: IType = {
      data: `${v}~${this.updataValueEnd}`,
      index: this.index,
    };
    this.$emit("updataData", data);
  }
   onChange2(v:any):void {
    this.updataValueEnd = v;
    type IType = {
      data: string;
      index: number;
    };
    const data: IType = {
      data: `${this.updataValueStart}~${v}`,
      index: this.index,
    };
    this.$emit("updataData", data);
  }
   created():void {
    that = this;
    this.updataValueStart =(this.value as string).split('~')[0]
    this.updataValueEnd =(this.value as string).split('~')[1]
  }
}
</script>
<style lang="less" scoped>
.DateRangePicker {
  display: flex;
  align-items: center;
  .interval {
    margin: 0 5px;
  }
  .ark-date-picker {
    width: 41%;
    /deep/ input {
      width: 100%;
    }
    /deep/ .ark-input-innerWrap {
      width: 30px;
      position: absolute;
      left:initial;
      right: 0;
    }
  }
}
</style>
