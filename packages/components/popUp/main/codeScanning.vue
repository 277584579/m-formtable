<template>
    <div class="codeScanning">
        <div class="topText">
            <div>急速扫描将仅支持商品的条码输入，扫描时可以使用特殊条码进行动作控制。如使用00000条码（管理员可自定义）确认商品输入一次。</div>
            <div>
                <span style="color:#F23030">*注意*</span>
                <span>急速扫描模式下不对单据头更新，务必在扫描完成后点击“结束扫描”按钮来关闭窗口并刷新单据头统计数。</span>
            </div>
        </div>
        <div class="formClass">
            <component
                ref="PosFormLayout"
                :is="PosFormLayout"
                :data="formList"
                :defaultColumn="defaultColumn"
            >
            </component>
        </div>
        <div class="imgBlock">
            <div class="scanningImg"></div>
            <!-- <img class="scanningImg" src="" alt=""/> -->
            <div>
                <div class="scanningTotal">
                    <span>本次扫描合计：</span>
                    <span style="color:#F23030 ">0</span>
                </div>
                <Button 
                    type="posdefault"
                    style="margin-left:43px"
                    >结束扫描
                </Button>
            </div>
        </div>
        <div class="describe">本次扫描记录（最近30条）</div>
    </div>
</template>
<script lang="ts">
import { Component, Prop,Watch, Vue } from "vue-property-decorator";
// import { Step,Tabs,TabPane } from "@syman/ark-ui";
@Component({
    name: "codeScanning",
    components: {},
})
export default class codeScanning extends Vue {
     PosFormLayout:any = {};
     formList = [
        {
            item: {
            type: "posInput", // 组件类型
            required: true, // 是否必填
            field: "store",
            label: "商品",
            props: {
                // disabled:true,
                placeholder: "",
                value:""
            },
            },
        },
        {
            item: {
            type: "Input", // 组件类型
            required: true, // 是否必填
            field: "allocationNum",
            label: "调拨数量",
            props: {
                // disabled:'disabled',
                placeholder: "",
                value: "",
            },
            },
        },
    ];
     defaultColumn = 4;
     beforeMount():void{
        this.PosFormLayout=() => import("../../posFormLayout/src/index.vue");
    }
}
</script>
<style lang="less">
@import url(../../../style/variable.less);
.codeScanning{
    .formtablePlugin .formlayout-item{
        justify-content: start;
    }
    .formlayout-item .label-name{
        width: auto;
        .label-desc{
            color: @text-main;
        }
    }
}
</style>
<style lang="less" scoped>
@import url(../../../style/variable.less);
.codeScanning{
    .topText{
        padding: 8px 0 17px 0;
        font-size: 12px;
        font-weight: 400;
        color: @text-main;
        line-height: 17px;
    }
    .imgBlock{
        margin: 10px 0 17px 0;
        display: flex;
        align-items: flex-end;
        .scanningImg{
            width: 156px;
            height: 156px;
            background: #D8D8D8;
        }
        .scanningTotal{
            font-size: 14px;
            font-weight: 600;
            color: @text-main;
            margin-bottom: 17px;
            margin-left: 31px;
        }
    }
    .describe{
        font-size: 12px;
        font-weight: 600;
        color: @text-main;
        padding-bottom: 48px;
    }
}
</style>
