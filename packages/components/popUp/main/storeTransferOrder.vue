<template>
    <div class="storeTransferOrder">
        <div class="buttonBlock">
            <Button 
                icon="iconicon-dayin1"
                type="default"
                >打印
            </Button>
            <Button 
                icon="iconicon-daochu1"
                type="default"
                style="margin-left: 12px"
                >刷新
            </Button>
            <Button
                icon="md-menu"
                type="default"
                style="margin-left: 12px"
                
                >更多
            </Button>
            <Button 
                icon="iconicon-guanbi2"
                type="default"
                style="margin-left: 12px"
                >关闭
            </Button>
        </div>
        <FoldingPanel :data="dataList" :defaultColumn="defaultColumn"></FoldingPanel>
        <div class="logisticsQuery">
            <span>物流查询：</span>
            <img src="./box.png" />
            <!-- <Steps :current="0" class="stepsClass">
                <Step title="已发货" icon="md-radio-button-off"></Step>
                <Step title="配送中" icon="md-radio-button-off"></Step>
                <Step title="已签收" icon="md-radio-button-off"></Step>
            </Steps> -->
            <PosSteps></PosSteps>
        </div>
        <Tabs value="tab1" class="tabsClass">
            <TabPane label="明细" name="tab1">
                <div class="detailTabTop">
                    <div class="tabLeft">
                        <Page :total="100" @on-change="changePage" @on-page-size-change="pageSizeChange" show-sizer :pager-count="4"/>
                        <span class="flesh">【导出】</span>
                        <span class="flesh">【刷新】</span>
                    </div>
                    <div class="tabRight">
                        <div class="labelNmae">条件：</div>
                        <Select v-model="condition" style="width:129px;margin-right:12px">
                            <template v-slot:icon>
                            <i class="icon iconfont icona-juxingbeifen22"></i>
                            </template>
                            <Option v-for="item in conditionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>  
                        <div class="labelNmae">满足：</div>
                        <Input v-model="inputValue" style="width: 157px;margin-right:12px" />
                        <Button 
                            type="posdefault"
                            style="margin-right:12px"

                            >查找
                        </Button>
                    </div>
                </div>
                <div class="tableClass">
                    <PosTable :dataList="list" :columnList="columnList"></PosTable>
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
                <div class="journal">
                    <div class="top">
                        <i class="icon iconfont iconxingzhuang"></i>
                        <div>日志</div>
                    </div>
                    <div class="formClass">
                        <component
                            ref="PosFormLayout"
                            :is="PosFormLayout"
                            :data="journalFormList"
                            :defaultColumn="defaultColumn"
                        >
                        </component>
                    </div>
                </div> 
            </TabPane>
            <TabPane label="按款明细" name="tab2">标签二的内容</TabPane>
        </Tabs>
    </div>
</template>
<script lang="ts">
import { Component, Prop,Watch, Vue } from "vue-property-decorator";
import { Step,Tabs,TabPane } from "@syman/ark-ui";
import FoldingPanel from "../../foldingPanel/src/index.vue";
import PosSteps from "../../posSteps/src/index.vue";
import {dataListTransfer,tableList,tableColumnList,formList,journalFormList} from "./mock.js"
@Component({
    name: "storeTransferOrder",
    components: {FoldingPanel,Step,Tabs,TabPane,PosSteps},
})
export default class storeTransferOrder extends Vue {
     openFormLayout = true;
     defaultColumn = 4;
     PosFormLayout:any = {}
     dataList:Array<any> = dataListTransfer; 
     list:Array<any> = tableList;
     columnList:Array<any> = tableColumnList;
     formList:Array<any> = formList;
     journalFormList:Array<any> = journalFormList;
     inputValue = '';
     condition = '条码';
     conditionList = [
        {
            label:'条码',
            value:'条码'
        }
    ];
     beforeMount():void{
        this.PosFormLayout=() => import("../../posFormLayout/src/index.vue");
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
.storeTransferOrder{
    .tabsClass{
        .detailTabTop{
            .ark-input-default{
                width: 100%;
            }
            .ark-select-single .ark-select-selection{
                width: 100%;
            }
        }
    }
}
</style>
<style lang="less" scoped>
@import url(../../../style/variable.less);
.storeTransferOrder{
    height: 80vh;
    overflow: scroll;
    .buttonBlock{
        padding-top: 10px;
        Button{
            width: 66px;
            font-size: 12px;
            padding: 0;
        }
    }
    .logisticsQuery{
        display: flex;
        align-items: center;
        span{
            white-space:nowrap
        }
        img{
            width: 60px;
            margin: 0 0 0 21px;
        }
        .stepsClass{
            width: 341px;
        }
    }
    .tabsClass{
        margin:40px 0 20px 0;
        .detailTabTop{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .tabLeft{
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
            .tabRight{
                display: flex;
                align-items: center;
                .labelNmae{
                    font-size: 14px;
                    font-weight: 400;
                    color: @text-main;
                    margin-right: 8px;
                }
            }
        }
        .tableClass{
            // height: 160px;
            width: 100%;
            overflow-x: scroll;
            margin: 12px 0;
        }
        .journal{
            .top{
                display: flex;
                align-items: center;
                i{
                    color: #FF9F27;
                    width: 16px;
                }
            }
            div{
                font-size: 16px;
                margin-left: 10px;
                font-weight: 500;
                color: @primary-color;
            }
        }
    }
}

</style>
