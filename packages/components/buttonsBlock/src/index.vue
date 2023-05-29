<template>
  <div class="buttonsBlock">
    <div class="buttons">
      <Button
        v-for="(bItem, bIndex) in buttonListBefore"
        :key="bIndex"
        style="margin-left: 12px"
        type="default"
        :icon="bItem.icon"
        @click="clkCall(bItem.click)"
      >
        {{ bItem.text }}
      </Button>
      <Button
        v-if="buttonList.length > 4"
        icon="md-menu"
        type="default"
        style="margin-left: 12px"
        @mouseenter.native="moreMore"
        >更多</Button
      >
    </div>

    <div class="drawer" v-if="valueOpen">
      <div
        v-for="(item, index) in buttonListAfter"
        :key="index"
        @click="clkCall(item.click)"
      >
        <Icon :type="item.icon" />
        <span style="margin-left: 5px">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { Button, Icon } from "@syman/ark-ui";
@Component({
  name: "ButtonsBlock",
  // components: {
  //   Button,
  //   Icon,
  // },
})
export default class ButtonsBlock extends Vue {
   valueOpen = false;
   buttonListBefore: any = [];
   buttonListAfter: any = [];
  @Prop({ default: [] }) buttonList!: any;
  moreMore() {
    this.valueOpen = true;
    if (this.valueOpen) {
      document.addEventListener("mousemove", this.clickHandler);
    } else {
      document.removeEventListener("mousemove", this.clickHandler);
    }
  }
  clickHandler(e:any) {
    var drawer = document.querySelector(".drawer");
    var moreButton = document.querySelectorAll(".buttons>button")[4];
    if (drawer) {
      if (!drawer.contains(e.target)) {
        if (!moreButton.contains(e.target)){
          this.valueOpen = false
        }
      }
    }
  }
  created() {
    let buttonListBefore = this.buttonList.slice(0, 4);
    let buttonListAfter = this.buttonList.slice(4);
    this.buttonListBefore = buttonListBefore;
    this.buttonListAfter = buttonListAfter;
  }
  clkCall(methodsWords: any) {
    // this.$emit("clkCallBk", methodsWords);
  }
}
</script>
