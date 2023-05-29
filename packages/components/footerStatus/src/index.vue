<template>
  <div class="footerStatus">
    <div class="FilterSettings">
      <span>*</span>当前过滤设置: (( (单据日期: 20210831~20210907) 并且
      (提交状态=未提交) ) 并且 (可用 = 是) )
    </div>
    <div class="statusTips">
      <div class="status">提交状态</div>
      <span
        v-for="(sitem, sindex) in statusList"
        :key="sindex"
        :class="sitem.class"
      >
        {{ sitem.text }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "FooterStatus",
})
export default class FooterStatus extends Vue {
  @Prop()  statusList!: Array<any>;
}
</script>
<style lang="less" scoped>
@import url(../../../style/variable.less);
  .FilterSettings {
    margin: 10px 0 11px 0;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    // color: #515a6e;
    color: @text-middle;
    span {
      color: #ff0000;
    }
  }
  .statusTips {
    display: flex;
    align-items: center;
    span {
      padding: 0 8px;
      height: 18px;
      border: 1px solid @line-form;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      margin-left: 10px;
    }
    .status {
      font-size: 12px;
      font-weight: 400;
      color: @text-middle;
    }
    .commit {
      background: #ffffff;
      color: @pos-commit;
    }
    .wait {
      background: #ffffff;
      color: @pos-wait;
    }
    .cancle {
      background: #fef3f3;
      color: @pos-cancle;
    }
  }
</style>
