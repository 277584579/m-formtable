<template>
  <div class="formtablePlugin">
    <FormLayout
      :defaultColumn="defaultColumn"
      ref="FormLayout"
      :defaultconfig="dataList"
    >
      <div slot-scope="options" slot="content" class="formlayout-item" style="display: flex;align-items: center;width: 100%;">
        <!-- 组件label -->
        <!-- <slot name="label" :item="options.item"> -->
          <div ref="label" :style="options.item.style" :class="['label-name',options.item.required ? 'icon-required':'']">
            <span v-if="options.item.required" class="icon-tip">*</span>
            <span class="label-desc">
              <span :style="options.item.style">{{ options.item.label }}:</span>
            </span>
          </div>
        <!-- </slot> -->
        <component
          :is="options.item.type"
          v-show="options.item.show != false"
          v-model="options.item.props.value"
          v-bind="options.item.props"
          @updataData="updataData"
          v-on="options.item.event"
        >
          <template  v-if="options.item.type === 'Select'">
              <template slot="icon">
                <i class="icon iconfont icona-juxingbeifen22"></i>
              </template>
              <Option
                v-for="item in options.item.props.options"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
          </template>
          <template v-if="options.item.type === 'RadioGroup'">
            <Radio
              v-for="item in options.item.props.options"
              :key="item.value"
              :label="item.value"
              :disabled="options.item.disabled == true"
            >
              {{ item.label }}
            </Radio>
          </template>
          <template v-if="options.item.type === 'CheckboxGroup'">
            <Checkbox
              v-for="item in options.item.props.options"
              :key="item.value"
              :label="item.label"
              :disabled="options.item.disabled == true"
            >
            </Checkbox>
          </template>
          <slot v-if="options.item.type === 'Button'">
            {{ options.item.props.value }}
          </slot>
        </component>
        <!-- 动态插槽 -->
          <!-- <div :slot="options.item.soltName">
            {{options.item.s8
        </div> -->
      </div>
      <!-- 卡槽 -->
      <div slot="operation" class="operation">
        <Button
          v-for="(oper, index) in operation"
          :key="index"
          v-on="oper.event"
          v-bind="oper.props"
          :style="oper.style"
          >{{oper.props.value}}</Button>
      </div>
    </FormLayout>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import SingDatePicker from "../../singDatePicker/src/index.vue";
import DateRangePicker from "../../dateRangePicker/src/index.vue";
import PosInput from "../../input/src/index.vue";

// import {
//   Button,
//   FormLayout,
//   Checkbox,
//   CheckboxGroup,
//   Input,
//   Select,
//   Option,
//   DatePicker,
//   Options,
// } from "@syman/ark-ui";
@Component({
  name: "PosFormLayout",
  components: {
    // Button,
    // FormLayout,
    // Checkbox,
    // CheckboxGroup,
    // Input,
    // Select,
    // Option,
    // DatePicker,
    SingDatePicker,
    DateRangePicker,
    // Options,
    PosInput
  },
})
export default class PosFormLayout extends Vue {
  @Prop()  defaultColumn!: string | number;
  @Prop()  operation!: string[] | number[];
  @Prop({ default: [] })  data!: string[] | number[]
  
  @Watch("data", { immediate: true, deep: true })
  onDataChanged(val: any, oldVal: any) {
    let arr:any[] =[]
    val.map((o:any,i:number)=>{
      o.item.props.index = i
    })
    arr = [...val]
    const addOperation ={
      col: 8,
      item: {
        soltName: "operation"
      },
    }
    arr.push(addOperation)
    this.dataList = arr
  }
   dataList:any[] = []
   reset(): void {
    (this.$refs.FormLayout as any).reset();
  }
   submit(cb:any): void {
    const verifyMessage = (this.$refs.FormLayout as any).verifyMessage();
    // if (verifyMessage.length) {
    //   //校验错误
    // } else {
    //   // 提交
    //   console.log("提交的数据", (this.$refs.FormLayout as any).formData);
    // }
    cb(verifyMessage,(this.$refs.FormLayout as any).formData)
  }
   onblur(): undefined {
    return;
  }
   updataData(v:any):void { //手动更新数据
  let ls = this.dataList[v.index]
    ls.item.props.value = v.data
    this.$set(this.dataList,v.index,ls)
    console.log( (this.$refs.FormLayout as any))
  }
}
</script>
<style lang="less">
.formtablePlugin{
@import url(../../../style/variable.less);
.formlayout-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.operation{
  margin-top: 16px;
  Button{
    height: 30px;
    font-size: @smallPrint;
    font-weight: 400;
    padding: 0px 13px;
    // line-height: 30px;
  }
}
}
</style>
