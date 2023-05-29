<template>
    <div class="importPop">
        <div class="chooseFormat block">
            <div class="title">选择格式</div>
            <RadioGroup v-model="radio" vertical>
                <Radio label="tableTop">
                    <span>是否显示表头</span>
                </Radio> 
                <div class="tips">
                    <span style="color:#F23030">注意：</span>
                    <span>不要放置宏或图表，不要更改列的顺序，数据中不要使用公式。</span>
                </div>
                <Radio label="textFile">
                    <span>文本文件</span>
                </Radio>
            </RadioGroup>
        </div>
        <div class="setParameters block">
            <div class="title">设置参数</div>
            <div>
                <div class="tips">选择至少2列导入字段，注意第一列内容必须选择并上传，系统以此定位要修改的记录。选择的列按顺序排放在上传文件里， 未选择的列不允许出现在上传文件中。</div>
                <div class="checkboxClass">
                    <CheckboxGroup v-model="parameters" v-for="(item,index) in checkBoxList" :key="index">
                        <Checkbox label="item.label">
                            <span>{{item.text}}</span>
                            <span v-if="item.required" style="color:#F23030 ">*</span>
                        </Checkbox>
                    </CheckboxGroup>
                </div>
                <div class="startNum">
                    <span>有效数据起始行：</span>
                    <Input v-model="startLine" placeholder="" style="width: 45px" />
                    <span>起始列：</span>
                    <Input v-model="startColumn" placeholder="" style="width: 45px" />
                </div>
                <CheckboxGroup v-model="backstage">
                        <Checkbox label="backstage">
                            <span>在后台运行</span>
                        </Checkbox>
                </CheckboxGroup>
            </div>
            
        </div>
        <div class="chooseFiles block">
            <div class="title">选择文件</div>
            <div class="files">
                <Button 
                    type="default"
                    style="margin-right:14px"
                    >选取文件
                </Button>
                <span>未选择文件</span>
                <span style="color:#F23030">（最大：20MB）</span>
            </div>
        </div>
        <div class="buttons">
            <Button 
                type="posdefault"
                style="margin-right:10px"
                >开始上传并导入
            </Button>
            <Button 
                type="posdefault"
                >打印
            </Button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop,Watch, Vue } from "vue-property-decorator";
import { RadioGroup, Radio,CheckboxGroup,Checkbox} from "@syman/ark-ui";
@Component({
    name: "importPop",
    components: {RadioGroup,Radio,CheckboxGroup,Checkbox},
})
export default class importPop extends Vue {
     radio = '';
     startLine = '';
     startColumn = '';
     backstage = '';
     parameters = [];
     checkBoxList = [
        {
            label:'documentNo',
            text:'单据编号',
            required:true,
        },
        {
            label:'warehouseInByCase',
            text:'是否按箱入库',
            required:true,
        },
        {
            label:'actualArrivalDate',
            text:'实际到货日期',
            required:false,
        },
        {
            label:'warehousingDate',
            text:'入库日期',
            required:false,
        },
        {
            label:'defaultCargoAreaType',
            text:'默认货区类型',
            required:false,
        },
        {
            label:'storagePosition',
            text:'储位',
            required:false,
        },
        {
            label:'servicesCompany',
            text:'快递公司',
            required:false,
        },
        {
            label:'waybillNo',
            text:'运货单号',
            required:false,
        },
        {
            label:'desc',
            text:'备注',
            required:false,
        },
        {
            label:'causeOfDifference',
            text:'差异原因',
            required:false,
        },
    ];
}
</script>
<style lang="less">
@import url(../../../style/variable.less);
.importPop{
    .font{
        font-size: 14px;
        font-weight: 400;
        color: @text-main;
    }
    .ark-radio-wrapper{
        .font();
    }
    .setParameters{
        .ark-checkbox-wrapper + span, .ark-checkbox + span{
            .font();
        }
    }
    .ark-input{
        border: none;
    }
    .ark-input-wrapper .ark-input{
        border: none;
        border-bottom: 1px solid @text-main;
        border-radius: 0;
        height: 20px;
        &:focus{
            border-radius: 4px;
        }
    }
}
</style>
<style lang="less" scoped>
@import url(../../../style/variable.less);
.font{
    font-size: 14px;
    font-weight: 400;
    color: @text-main;
}
.importPop{
    padding-top: 10px;
    .block{
        margin-bottom: 22px;
        display: flex;
    }
    .title{
        font-size: 16px;
        font-weight: 500;
        color: @text-main;
        margin-right: 32px;
    }
    .chooseFormat{
        .tips{
            .font();
            margin: 10px 0;
        }
    }
    .setParameters{
        .tips{
            .font();
            margin-bottom: 10px;
        }
        .checkboxClass{
            display: flex;
            flex-wrap:wrap;
        }
        .startNum{
            .font();
            margin: 12px 0 10px 0;
        }
    }
    .chooseFiles{
        .files{
            .font();
        }
    }
    .buttons{
        padding: 24px 0 29px 0;
    }
}
</style>
