<template>
  <div class="foldingPanelBlock">
    <div class="foldingPanel" @click="isFolding">
        <i class="icon iconfont iconicon-zhankai" v-if="openFormLayout"></i>
        <i class="icon iconfont iconicon-shouqi" v-else></i>
    </div>
    <div class="formClass" :class="openFormLayout?'open':'close'">
        <component
            ref="PosFormLayout"
            :is="PosFormLayout"
            :data="data"
            :defaultColumn="defaultColumn"
            :operation="operation"
        >
        </component>
    </div> 
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue,Watch } from "vue-property-decorator";
@Component({
    name: "FoldingPanel",
  components: {
  }, 
})
export default class FoldingPanel extends Vue {
     openFormLayout = true;
    @Prop()  data!: any;
    @Prop()  operation!: any;
    @Prop({ default: 4 }) defaultColumn!: number;
     PosFormLayout:any = {}
    isFolding(openFormLayout:any){
      this.openFormLayout = !this.openFormLayout;
    }
     beforeMount():void{
        this.PosFormLayout=() => import("../../posFormLayout/src/index.vue")
    }
     componentRef():any{
      return this.$refs.PosFormLayout
    }
}
</script>
<style lang="less" scoped>
@import url(../../../style/variable.less);
.foldingPanel{
    position: relative;
    // margin-top: 16px;
    width: 100%;
    height: 14px;
    border-radius: 2px;
    border: 1px solid @line-form;
    i{
      position: absolute;
      left: 50%;
      top: 50%;
    }
    .iconicon-zhankai{
      transform: translate(-50%,-65%);
    }
    .iconicon-shouqi{
      transform: translate(-50%,-35%);
    }
  }
  .formClass{
    transition: 2s all;
  }
  .open{
    // height: 150px;
    // position: absolute;
    
  }
  .close{
    height: 0px;
    // transition: 0.5s linear;
    overflow: hidden;
    // display: none;
    
  }
</style>

