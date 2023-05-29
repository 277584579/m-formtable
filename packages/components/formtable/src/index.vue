<template>
  <div class="formtablePluginCompent">
    <FoldingPanel ref="FoldingPanel" :data="dataList"
                  :defaultColumn="defaultColumn"
                  :operation="operation">
    </FoldingPanel>
    <div class="line"></div>
    <div class="chooseBlock">
      <div class="chooseBlock-left">
      <Page :total="100" @on-change="changePage" @on-page-size-change="pageSizeChange" show-sizer />
      <CheckTable :list="checkList" @control ='control'></CheckTable>
      </div>
      <!-- <ButtonsBlock :buttonList="buttonList" @clkCallBk="listenCall"></ButtonsBlock> -->
    </div>
    <PosTable :dataList="list" :columnList="columnList" :editStatus='checkEditStatus'></PosTable>
    <!-- <FooterStatus :statusList="statusList"></FooterStatus> -->
  </div>
</template>
<script lang="ts">
import { Component,Prop,Watch,Vue} from "vue-property-decorator";
import PosFormLayout from "../../posFormLayout/src/index.vue";
import ButtonsBlock from "../../buttonsBlock/src/index.vue";
import PosTable from "../../posTable/src/index.vue";
import FooterStatus from "../../footerStatus/src/index.vue";
import CheckTable from "../../checkTable/src/index.vue";
import FoldingPanel from "../../foldingPanel/src/index.vue";
import {randImg3} from "../../../api/index";
// import { Page } from "@syman/ark-ui";
import {buttonListArr,statusListArr,columnListArr,columnListArr1,checkListArr,checkListArr1} from "./mock.js"
let that: any = {};
@Component({
  name: "Formtable",
  components: {
    PosFormLayout,
    PosTable,
    ButtonsBlock,
    FooterStatus,
    // Page,
    CheckTable,
    FoldingPanel
  },
})
export default class formtable extends Vue {
  // @Prop()  datalistTable!: Array<any>;
  @Prop({ default: () => [] })  datalistTable!: Array<any>
  @Prop({ default: () => [] })  dataListArr!: Array<any>
  @Prop({ default: () => [] })  columnListArr!: Array<any>
  @Prop({ default: () => [] })  operationArr!: Array<any>
  @Prop({ default: () => false }) editStatus!: boolean
   initDatalistTable = [];
  @Watch("datalistTable", { immediate: true, deep: true })
  onDataChanged(val: any, oldVal: any) {
    this.initDatalistTable = val
    this.list = val
  }
  @Watch("dataListArr", { immediate: true, deep: true })
  onDataListArrChanged(val: any, oldVal: any) {
    this.dataList = val
  }
  @Watch("columnListArr", { immediate: true, deep: true })
  onColumnListArrChanged(val: any, oldVal: any) {
    this.columnList = val
  }
  @Watch("operationArr", { immediate: true, deep: true })
  onOperationArrChanged(val: any, oldVal: any) {
    this.operation = val
  }
  @Watch("editStatus")
  onDditStatusChanged(val: any, oldVal: any) {
    this.checkEditStatus = val
  }
   checkEditStatus = false
   defaultColumn = 4;
   checkList = checkListArr
   PosFormLayoutName =''
   operation:Array<any> = []
   dataList:Array<any> = []
   columnList:Array<any> = []
   buttonList:Array<any> = buttonListArr;
   statusList:Array<any> = statusListArr;
   list:Array<any> = this.initDatalistTable
   reset(): void {
    (this.$refs.FormLayout as any).reset();
  }
   submit(): void {
    (this.PosFormLayoutName as any).submit((verifyMessage:any, data:any) => {
      console.log("verifyMessage", data);
    });
  }
   changePage(v:number):void{
      console.log('切换',v)
  }
   pageSizeChange(num:number):void{
    console.log(num)
    this.list = this.initDatalistTable
  }
   created():void {
    // console.log(this.datalistTable)
    // this.dataList = this.datalistTable
    that = this;
    randImg3()
  }
   listenCall(methodsWords:string):void {
    // console.log('methodsWords', methodsWords)
    // this[methodsWords]()
  }
   control(name:string):void{
    this.$emit('controlRest',name)
    switch (name) { //编辑状态
      case '切换到修改界面':
        this.checkList = checkListArr1
        this.checkEditStatus = true
        // this.list = this.initDatalistTable
        break;
      case '切换到查看界面':
        this.checkList = checkListArr
        this.checkEditStatus = false
        // this.list = this.initDatalistTable
        break;
      default:
        break;
    }
  }
}
</script>
<style lang="less" scoped>
@import url(./index.less);
</style>