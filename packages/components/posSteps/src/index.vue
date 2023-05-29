<template>
    <div class="posSteps">
        <div class="stepItems" v-for="(item,index) of dataSource" :key="index">
            <div
                class="line"
                :class="{cur: item.checked}"
                v-if="index !==dataSource.length -1"
                >

            </div>
            <i class="icon iconfont icona-bianzubeifen2" ></i>
            <div class="name" :class="{cur1: item.checked}">
                {{item.name}}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { Button, Icon } from "@syman/ark-ui";
@Component({
    name: "posSteps",
    // components: {
    //   Button,
    //   Icon,
    // },
})
export default class posSteps extends Vue {
    // @Prop({ default: [] }) dataSource!: any;
     dataSource = [
        {
            checked:true,
            name:'已发货'
        },
        {
            checked:false,
            name:'配送中'
        },
        {
            checked:false,
            name:'已签收'
        },
    ];
}
</script>
<style lang="less" scoped>
@import url(../../../style/variable.less);
.posSteps{
    display: flex;
    .stepItems{
        width: 180px;
        position: relative;
        display: flex;
        // justify-content: space-around;
        // text-align: center;
        flex: 1;
        align-items: center;
        flex-direction: column;
        i {
            width: 30px;
            height: 30px;
            vertical-align: middle;
            text-align: center;
        }
        .line {
            position: absolute;
            top: 11px;
            left: 99px;
            width: 162px;
            border-bottom: 2px solid #DCDEE2;
        }
        .name{
            font-size: 14px;
            font-weight: 400;
            color: #212A3D;
            line-height: 20px;
        }
        .cur{
            border-bottom: 2px solid @primary-color;
        }
        .cur1{
            color:@primary-color;
        }
    }
}
</style>
