<template>
    <div class="query">
        <div class="chooseResults">
            <span>多选结果</span>
            <div class="chooseBlock">
                <!-- <div class="list" v-for="(item,index) in chooseDataList" :key="index">
                    <Checkbox label="item.label">
                        <span class="chooseText">包含{{item.text}}</span>
                    </Checkbox>
                </div> -->
                <div class="list" v-for="(itemName,indexName) in storeNameList" :key="indexName">
                    <Checkbox label="itemName.label">
                        <span class="chooseText">包含({{itemName.text}})</span>
                    </Checkbox>
                </div>
            </div>
            <div class="buttons">
                <Button 
                    type="posdefault"
                    >移除选中行
                </Button>
                <Button 
                    type="posdefault"
                    >移除全部
                </Button>
            </div>
        </div>
        <div class="queryCriteria">
            <span>查询条件</span>
            <div class="formClass">
                <component
                    ref="PosFormLayout"
                    :is="PosFormLayout"
                    :data="dataList"
                    :defaultColumn="defaultColumn"
                >
                </component>
            </div> 
            <div class="clickBox">
                <div class="leftBox">
                    <Button 
                        type="posdefault"
                        style="margin-right:12px"
                        @click="see"
                        >查看
                    </Button>
                    <Button 
                        v-if="exclude == false"
                        type="default"
                        style="margin-right:21px"
                        >添加全部
                    </Button>
                    <Button 
                        v-else
                        type="default"
                        style="margin-right:21px"
                        >排除全部
                    </Button>
                    <Checkbox v-model="exclude">排除</Checkbox>
                </div>
                <div class="rightBox">
                    <Button 
                        type="posdefault"
                        style="margin-right:12px"
                        @click="sureChoose"
                        >确定
                    </Button>
                    <Button 
                        type="default"
                        >取消
                    </Button>
                </div>
            </div>
            <div class="operatingInstructions" v-if="isShowTable == false">
                <div class="title">操作说明</div>
                <div class="textMian">
                    1.填上查找条件，也可以不填，点击[查询]按钮。<br>
                    2.在查找结果中选中相应行,这样所选的行就动态地被添加到多选结果栏中;当去除选中行时,这条记录也会从多选栏目去除。<br>
                    3.也可以点击[增加全部]按钮，即将符合查询条件的所有行作为一个集合添加到多选结果栏中，可以添加多个结果集合。<br> 
                    4.当排除选项被选中时,添加全部被改为排除全部。<br>
                    5.当排除选项被选中时，在查询结果中将选中的行排除在外。<br> 
                    6.排除全部：将整个查询的结果排除在外。<br> 
                    7.移除选中行：在多选结果栏将要移除的结果选中，点击[移除选中行]按钮，要移除的结果就从多选栏中移除。<br> 
                    8.移除全部：将多选结果栏中的结果清空。
                </div>
            </div>
            <div class="tableDetal" v-else>
                <PosTable class="PosTable" :dataList="list" :columnList="columnList" :editStatus='editStatus'></PosTable>
                <div class="tableFoot">
                    <div class="footLeft">
                        <Page :total="100" @on-change="changePage" @on-page-size-change="pageSizeChange" show-sizer :pager-count="4"/>
                        <span class="flesh">【刷新】</span>
                    </div>
                    <div class="setting"><span>*</span>当前过滤设置: (( (单据日期: 20210831~20210907) 并且(提交状态=未提交) ) 并且 (可用 = 是) )</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop,Watch, Vue } from "vue-property-decorator";
import {dataListQuery,datalistTable,columnListArr} from "./mock.js";
import FoldingPanel from "../../foldingPanel/src/index.vue";
import PosTable from "../../posTable/src/index.vue";
@Component({
  name: "query",
  components: {FoldingPanel,PosTable},
})
export default class query extends Vue {
     PosFormLayout:any = {};
     dataList:Array<any> = dataListQuery;
     defaultColumn = 3;
     exclude = false;
     isShowTable = false;
     chooseDataList:any[] = [];
     storeNameList:any[] = [];
     list:Array<any> = datalistTable;
     columnList:Array<any> = columnListArr;
     editStatus = false;
     beforeMount():void{
        this.PosFormLayout=() => import("../../posFormLayout/src/index.vue");
    }
     see(): void {
        // console.log(777,(this.$refs.PosFormLayout as any).data)
        const list = (this.$refs.PosFormLayout as any).data.map(item =>{
            // type dataObj ={
            //     field:any
            //     label:any
            //     text:any
            // }
            // const dataQuery:dataObj = {
            //         field:item.item.field,
            //         label:item.item.label,
            //         text:item.item.props.value
            // }
            // this.chooseDataList.push(dataQuery);
            // console.log(item.item.label)
            if(item.item.label == '仓店名称'){
                type dataNameObj ={
                    field:any
                    label:any
                    text:any
                }
                const dataNameQuery:dataNameObj = {
                        field:item.item.field,
                        label:item.item.label,
                        text:item.item.props.value
                }
                this.storeNameList.push(dataNameQuery);
            }
        })   
    }
     sureChoose(): void {
        this.isShowTable = true;
    }
     changePage(v:number):void{
        console.log('切换',v)
    }
     pageSizeChange(num:number):void{
        console.log(num)

    }
}
</script>
<style lang="less">
.query{
    .ark-checkbox{
            line-height: 1.5;
    }
}
</style>
<style lang="less" scoped>
@import url(../../../style/variable.less);
.query{
    padding: 10px 20px 20px 20px;
    display: flex;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    .chooseResults{
        height: 100%;
        width: 232px;
        .chooseBlock{
            padding: 12px;
            margin-top: 10px;
            width: 100%;
            height: calc(~"100% - 76px");
            min-height: 415px;
            border-radius: 2px;
            border: 1px solid #E8E8E8;
            .list{
                .chooseText{
                    font-size: 14px;
                    font-weight: 400;
                    color: @text-main;
                    line-height: 20px;
                }
            }
        }
        .buttons{
            margin: 10px 8px 0 8px;
            display: flex;
            justify-content: space-between;
            Button{
                width: 102px;
                height: 30px;
                border-radius: 2px;
            }
        }
    }
    .queryCriteria{
        width: calc(~"100% - 232px");
        height: 100%;
        margin-left: 10px;
        .formClass{
            margin-top: 10px;
            border: 1px solid #E8E8E8;
        }
        .clickBox{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            .leftBox{

            }
            .rightBox{

            }
        }
        .operatingInstructions{
            .title{
                text-align: center;
                font-size: 24px;
                font-weight: 600;
                color: @text-middle;
                padding: 16px 0 28px 0;
            }
            .textMain{
                font-size: 16px;
                font-weight: 400;
                color: @text-middle;
                line-height: 22px;
            }
        }
        .tableDetal{
            padding: 12px 0 0 0;
            .PosTable{
                width: 100%;
                max-height: 260px;
                overflow:auto;
                
            }
            .tableFoot{
                margin: 10px 0 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .footLeft{
                    display: flex;
                    align-items: center;
                    .flesh{
                        font-size: 12px;
                        font-weight: 400;
                        color: @primary-color;
                        margin-left: 10px;
                        cursor: pointer;
                        white-space:nowrap;
                    }
                }
                .setting{
                    span{
                        color: #FF0000 ;  
                    }
                    div{
                        font-size: 14px;
                        font-weight: 400;
                        color: @text-middle;
                    }
                }
            }
        }
    }
    span{
        font-size: 16px;
        font-weight: 500;
        color: @primary-color;
    }
}
</style>
