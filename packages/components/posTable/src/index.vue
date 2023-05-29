<template>
  <div class="posTable">
    <Table
      :row-class-name="rowClassName"
      :columns="columns"
      border
      :data="data"
    ></Table>
  </div>
</template>
<script lang="ts">
import { Component,Prop,Mixins,Watch } from "vue-property-decorator";
// import { Table } from "@syman/ark-ui";
import TabeMixin from "./tabeMixin";
import EditTableMixin from "./editTabeMixin";
@Component({
  name: "PosTable",
  // components: {
  //   Table
  // },
})
export default class PosTable extends Mixins(TabeMixin,EditTableMixin) {
  @Prop({ default: false }) public editStatus!: boolean
  @Watch("dataList", { immediate: true, deep: true })
  onDataChanged(val: any, oldVal: any):void {
    if(this.editStatus) (this as any).editTable()
    else (this as any).init()
  }
  @Watch("editStatus", { immediate: true, deep: true })
  onEditStatusChanged(val: any, oldVal: any):void {
    if(val) (this as any).editTable()
    else (this as any).init()
  }
   rowClassName(row: any): string {
    let className = "";
    switch (row.status) {
      case -2: //总计
        className = "pos-table-zj";
        break;
      case -1: //本页小计
        className = "pos-table-byxj";
        break;
      case 0: //0提交状态
        className = "pos-table-submit";
        break;
      case 1: //1出库状态
        className = "pos-table-out";
        break;
      case 2: //入库状态
        className = "pos-table-enter";
        break;
      default:
        break;
    }
    return className;
  }
}
</script>
<style lang="less">
  @import url(./index.less);
</style>