<template>
<div class="posInput">
  <Input v-model="dataValue" :placeholder="placeholder" :disabled="disabled" @on-blur="onBlur" />
   <div class="icon" @click="checkEdit" :class="disabled?'disabled':''">
     <i class="iconfont iconshaixuan1"></i>
   </div>
    <PopUp ref="popUp"  :show="showStatus" :title="title" :size="'large'" @editShowStatus="editShowStatus"> 
      <!-- <AddNew></AddNew> -->
      <!-- <Query></Query> -->
      <!-- <ExportDirectory></ExportDirectory> -->
      <!-- <StoreTransferOrder></StoreTransferOrder> -->
      <!-- <ImportPop></ImportPop> -->
      <!-- <CodeScanning></CodeScanning> -->
      <Formtable :columnListArr="columnListArr" :operationArr="operationArr" :datalistTable="datalistTable" :dataListArr="dataListArr" @controlRest="controlRest"></Formtable>
      <!-- <FoldingPanel ref="FoldingPanel" :data="dataListArr"
                  :defaultColumn="4"
                  :operation="[]">
    </FoldingPanel>       -->
    </PopUp>
</div>
</template>
<script lang="ts">
import { Component,Watch, Prop, Vue } from 'vue-property-decorator';
// import { Input } from '@syman/ark-ui';
import PopUp from "../../popUp/src/index.vue";
import AddNew from "../../popUp/main/addNew.vue";
import Query from "../../popUp/main/query.vue";
import ExportDirectory from "../../popUp/main/exportDirectory.vue";
import StoreTransferOrder from "../../popUp/main/storeTransferOrder.vue";
import ImportPop from "../../popUp/main/importPop.vue";
import CodeScanning from "../../popUp/main/codeScanning.vue";
import Formtable from "../../formtable/src/index.vue";
@Component({
  name: "PosInput",
    components: {
    // Input,
    PopUp,
    AddNew,
    Query,
    ExportDirectory,
    StoreTransferOrder,
    ImportPop,
    CodeScanning
  },
})
export default class PosInput extends Vue {
  @Prop()  value!: string | number;
  @Prop()  index!: number;
  @Prop()  placeholder!: string;
  @Prop({ default: '' }) title!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: () => [] }) operationArr: any[];
  @Prop({ default: () => [] }) dataListArr: any[];
  @Prop({ default: () => [] }) datalistTable: any[];
  @Prop({ default: () => [] }) columnListArr: any[];
  @Watch("value", { immediate: true, deep: true })
  onShowChanged(val: any, oldVal: any):void {
    this.dataValue = val
  }
   dataValue: string | number = ''
   showStatus = false
   checkEdit():void{ //查看编辑
    this.$emit('openAlert')
    this.showStatus = true
  }
   editShowStatus(status:boolean):void{
    this.showStatus = status
  }
  controlRest(name:string):void{
    this.$emit('controlRest',name)
  }
   onBlur(v:any) {
    type UpData = {
      data: string | number,
      index: number,
    }
    const data: UpData = {
      data: this.dataValue,
      index: this.index
    }
    this.$emit('updataData',data)
  }
}
</script>
<style lang="less" scoped>
.posInput{
  width: 157px;
  position: relative;
  .icon{
    cursor: pointer;
    width: 10%;
    padding-right: 8px;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    right: 40%;
    top: 0;
    >i{
      font-size: 12px;
    }
  }
  .disabled{
    height: 30px;
    width: 30px;
    background: #FFFFFF;
    border-radius: 0px 4px 4px 0px;
    padding: 8px;
    // position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // right: 0px;
    // top: 0;
    border: 1px solid rgba(204,204,204,1);
    pointer-events: auto;
    opacity: 1;
  }
}
</style>
