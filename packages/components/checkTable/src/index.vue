<template>
    <div class="checkTable">
        <a href="javascript:;" v-for="(item,index) in list" :key="index" @click="backEvent(item.name)">【{{item.name}}】</a>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: "CheckTable",
})
export default class CheckTable extends Vue {
  @Prop()  list!: Array<any>;
  backEvent(name:string):void{
    this.$emit('control',name)
  }
}
</script>
<style lang="less" scoped>
@import url(../../../style/variable.less);
.checkTable{
  a{
    color: @primary-color;
  }
}
</style>