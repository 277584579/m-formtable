<template>
  <div class="singDatePicker">
    <DatePicker
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :options="options"
      @on-change="onChange"
    ></DatePicker>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { DatePicker } from "@syman/ark-ui";
let that: any = {};
@Component({
  name: "SingDatePicker",
  // components: {
  //   DatePicker,
  // },
})
export default class SingDatePicker extends Vue {
  @Prop()  value!: string | number;
  @Prop()  index!: number;
  @Prop()  placeholder!: string;
  @Prop({ default: 'date' }) readonly type!: string
  // @Watch("index", { immediate: true, deep: true })
  // onDataChanged(val: any, oldVal: any) {
  //   // this.i = val
  // }
   i = ''
   updataValue = ''
   options = {
    shortcuts: [
      {
        text: "清空",
        value() {
          return "";
        }
      },
      {
        text: "今天",
        value() {
          return new Date();
        }
      },
      {
        text: "确定",
        value() {
          return that.updataValue;
        }
      },
    ],
  };
   onChange(v:any) {
    this.updataValue = v
    type IType = {
      data: string,
      index: number,
    }
    const data: IType = {
      data: v,
      index: this.index
    }
    this.$emit('updataData',data)
  }
   created() {
    that = this;
  }
}
</script>
<style lang="less" scoped>
.singDatePicker {
  .ark-date-picker {
    /deep/ .ark-input-innerWrap {
      width: 30px;
      position: absolute;
      right:40%;
    }
  }
}
</style>