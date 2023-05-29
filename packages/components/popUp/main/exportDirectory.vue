<template>
    <div class="exportDirectory">
        <div class="buttonBlock">
            <Button 
                type="default"
                style="margin-left: 12px"
                >删除
            </Button>
            <Button 
                type="default"
                style="margin-left: 12px"
                >刷新
            </Button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop,Watch, Vue } from "vue-property-decorator";
import {} from "./mock.js"
@Component({
  name: "exportDirectory",
  components: {},
})
export default class exportDirectory extends Vue {
    
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
