<template>
  <div id="app">
    <div id="nav">
      
      <Formtable :operationArr="operation" :datalistTable="datalists" :dataListArr="dataListArrs"
        :columnListArr="columnListArr" @controlRest="controlRest"></Formtable>
        <div class="right">
          <json-viewer :value="jsonData" :expand-depth=5 copyable boxed sort></json-viewer>
        </div>
        
    </div>
  </div>
</template>
<script>
import { datalistTable, datalistTable1, dataListArr, buttonListArr, statusListArr, columnListArr, columnListArr1, checkListArr, checkListArr1 } from "./mock.js"
import JsonViewer from 'vue-json-viewer'
export default {
  data() {
    return {
      datalists: datalistTable,
      dataListArrs: dataListArr,
      columnListArr: columnListArr,
      PosFormLayoutName: '',
      operation: [
        {
          style: "",
          props: {
            type: "default",
            value: "查找F",
            icon: "iconsousuo",
          },
          event: {
            click: () => {
              this.PosFormLayoutName = this.$children[0].$refs.FoldingPanel.componentRef()
              this.submit();
            },
          },
        },
        // {
        //   style: "margin:0 24px",
        //   props: {
        //     value: "收藏夹",
        //     type: "default",
        //     icon: "iconbaocun",
        //   },
        //   event: {
        //     click: (e) => {
        //       console.log("提交回调", e);
        //       this.$refs.FormLayout.reset()
        //     },
        //   },
        // },
        // {
        //   style: "",
        //   props: {
        //     value: "明细查询",
        //     type: "default",
        //     icon: "iconicon-chakan",
        //   },
        //   event: {
        //     click: (e) => {
        //       console.log("提交回调", e);
        //       this.$refs.FormLayout.reset();
        //     },
        //   },
        // },
      ],
      jsonData: {
        operation: [
          {
            style: "",
            props: {
              type: "default",
              value: "查找F",
              icon: "iconsousuo",
            },
            event: {
              click: () => {
                this.PosFormLayoutName = this.$children[0].$refs.FoldingPanel.componentRef()
                this.submit();
              },
            },
          }
        ],
        datalistTable:datalistTable,
        dataListArr,
      }
    };
  },
  computed: {
  },
  components: {
    JsonViewer
  },
  // mounted() {
  // },
  // beforeDestroy() {
  // },
  methods: {
    submit() {
      this.PosFormLayoutName.submit((data) => {
        console.log("verifyMessage", data);
        // this.$message(o.tip);
        if (data.length > 0) {
          data.map(o => { //需要引入第三方弹窗提示--备注
            setTimeout(() => {
              this.$message(o.tip)
            }, 100);
          })
        }
      });
    },
    controlRest(name) {
      switch (name) { //编辑状态
        case '切换到修改界面':
          this.columnListArr = columnListArr1
          break;
        case '切换到查看界面':
          this.columnListArr = columnListArr
          break;
        default:
          break;
      }
    }
  },
};
</script>
<style lang="less">
#nav{
  display: flex;
  .right{
    height: 100vh;
    overflow-y: scroll;
    .boxed {
      min-height: 610px;
    }
  }
}
</style>
