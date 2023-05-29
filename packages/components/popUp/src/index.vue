<template>
  <div class="pop" v-if="controlShow" @click="hideModal">
    <div
      class="popUp"
      @click.stop
      :class="[size ? size : '', { fullScreen: fullScreen }]"
    >
      <div>
        <div class="popUpHead">
          <span class="popUp-title">{{ title }}</span>
          <div v-show="showIcon" @click="retract">
            <i
              class="icon iconfont iconicon-fangda"
              v-if="fullScreen == false"
            ></i>
            <i class="icon iconfont icona-icon-fangdabeifen2" v-else></i>
          </div>
          <i class="icon iconfont iconicon-chahao" @click="hideModal"></i>
        </div>
        <div class="popUp-main" :class="fullScreen ? 'fullScreen-main' : ''">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop,Watch, Vue } from "vue-property-decorator";
// import { Button, Icon } from "@syman/ark-ui";
@Component({
  name: "PopUp",
  components: {},
})
export default class PopUp extends Vue {
   fullScreen = false;
  @Prop()  title!: string;
  @Prop()  size!: string;
  @Prop({ default: true }) showIcon!: boolean;
  @Prop({ default: false }) show!: boolean;
   controlShow = true;
  @Watch("show", { immediate: true, deep: true })
  onShowChanged(val: any, oldVal: any):void {
    this.controlShow = this.show
  }
  @Watch("controlShow", { immediate: true, deep: true })
  oncontrolShowChanged(val: any, oldVal: any):void {
    this.$emit('editShowStatus',val)
  }
   hideModal():void {
    this.controlShow = false;
    this.fullScreen = false
  }
   retract():void {
    this.fullScreen = !this.fullScreen;
  }
}
</script>
<style lang="less" scoped>
@import url(./index.less);
</style>