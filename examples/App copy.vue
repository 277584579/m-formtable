<template>
  <div id="app">
    <div id="nav">
      <Formtable :datalistTable="datalists" :dataListArr="dataListArrs" :columnListArr="columnListArr" @controlssss="controlssss"></Formtable>
    </div>
  </div>
</template>
<script lang="ts">
import { Component,Prop,Watch,Vue} from "vue-property-decorator";
import {datalistTable,datalistTable1,dataListArr,buttonListArr,statusListArr,columnListArr,columnListArr1,checkListArr,checkListArr1} from "./mock.js"
let that: any = {};
// @Component({
//   name: "Formtable",
// })
export default class testApp extends Vue {
   datalists = datalistTable
   dataListArrs = dataListArr
   columnListArr = columnListArr
  public controlRest(name:any):void{
    let aa:Array<any>=[]
    switch (name) { //编辑状态
      case '切换到修改界面':
      aa = columnListArr1
        break;
      case '切换到查看界面':
      aa = columnListArr
        break;    
      default:
        break;
    }
    that.columnListArr = aa
  }
   mounted():void {
    that = this;
  }
}
</script>

