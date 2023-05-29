<template>
    <div class="addNew">
        <div class="buttonBlock">
            <Button 
                icon="iconicon-baocun"
                type="default"
                style="margin-left: 12px"
                >保存
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
        <FoldingPanel :data="dataList"
                        :defaultColumn="defaultColumn">
        </FoldingPanel>

    </div>
</template>
<script lang="ts">
import { Component, Prop,Watch, Vue } from "vue-property-decorator";
// import { Button, Icon } from "@syman/ark-ui";
import FoldingPanel from "../../foldingPanel/src/index.vue";
import {dataListAddnew} from "./mock.js"
@Component({
  name: "addNew",
  components: {FoldingPanel},
})
export default class addNew extends Vue {
     openFormLayout = true;
     defaultColumn = 4;
     posFormLayout:any = {}
     dataList:Array<any> = dataListAddnew
}
</script>
<style lang="less" scoped>
.buttonBlock{
    padding-top: 10px;
    Button{
        width: 66px;
        font-size: 12px;
        padding: 0;
    }
}
</style>
