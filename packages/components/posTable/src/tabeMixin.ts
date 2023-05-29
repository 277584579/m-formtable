import { Component, Prop,Watch, Vue } from 'vue-property-decorator';
// import { Checkbox,Input } from "@syman/ark-ui";
@Component({
  // components: {
  //   Checkbox,
  //   Input
  // }
})

export default class TabeMixin extends Vue {
  @Prop({ default: [] }) public dataList!: any
  @Prop({ default: [] }) public columnList!: any
  // @Watch("dataList", { immediate: true, deep: true })
  // onDataChanged(val: any, oldVal: any):void {
  //   this.init()
  // }
   pageSize:number|string = 0;
  public HeaderCheckboxValue = false
   columns: Array<any> = [];
   data: any[] = []
   arrs: Array<any> = []
   renderView = (h: any, params: { index: number; row: { selectStatus: any; status: number; }; }, that: any): any => {
    const _this = that
    const size = that.pageSize
    const nameIndex: number = params.index + 1;
    if (nameIndex <= size) {
      return h(
        "div",
        {
          class: {
            "params-selection": true,
          },
        },
        [
          h("Checkbox", {
            props: {
              value: params.row.selectStatus,
            },
            on: {
              "on-change": (v:boolean) => {
                _this.data[params.index].selectStatus = v
                
                _this.arrs = _this.data.filter((o: { selectStatus: boolean; status: number; }) => {
                  return (o.selectStatus === true && o.status>=0)
                })
                if (_this.arrs.length == size && !_this.HeaderCheckboxValue) { //重绘标头
                  _this.HeaderCheckboxValue = true
                  _this.columns[0].renderHeader = (h: any): any => {
                    // setTimeout(()=>{
                    //   this.querySelectorElement('.pos-table-byxj')
                    //   this.querySelectorElement('.pos-table-zj')
                    // })
                    return _this.renderHeaderView(h,_this)
                  }
                }else if (_this.arrs.length+1 === size) {
                  _this.HeaderCheckboxValue = false
                  _this.columns[0].renderHeader = (h: any): any => {
                    // setTimeout(()=>{
                    //   this.querySelectorElement('.pos-table-byxj')
                    //   this.querySelectorElement('.pos-table-zj')
                    // })
                    return _this.renderHeaderView(h,_this)
                  }
                }else{
                  _this.HeaderCheckboxValue = false
                }

              },
            },
          }),
          h("span", nameIndex),
        ]
      );
    }else{
      this.querySelectorElement('.pos-table-byxj')
      if(params.row.status == -2) {
        setTimeout(()=>{
          this.querySelectorElement('.pos-table-zj')
        })
      }
    }
  };
  // 表头重绘
   renderHeaderView = (h: any, that: any): any => {
    return h(
      "div",
      {
        class: {
          "params-selection-header": true,
        },
      },
      [
        h("Checkbox", {
          props: {
            value: that.HeaderCheckboxValue,
          },
          on: {
            "on-change": (v:boolean) => {
              that.HeaderCheckboxValue = v
              that.data.map((k: any) => {
                if(k.status>=0) k.selectStatus = v
              })
              that.arrs = that.data.filter((o:any) => {
                return (o.selectStatus === true && o.status>=0)
              })
              that.columns[0].render = (h: any, params: any): any => {
                return that.renderView(h, params, that)
              };
            },
          },
        }),
        h("span", "序号"),
      ]
    );
  };
  public renderTable():void {
    const _this:any = this
    const firstObj = {
      title: "序号",
      key: "index",
      width: 66,
      align: "center",
      className: "params-index",
      renderHeader: (h: any, params: any): any => {
        return this.renderHeaderView(h,_this);
      },
      render: (h: any, params: any): any => {
        return this.renderView(h, params, _this);
      },
    }
    if (this.columns[0].title !== '序号') this.columns.unshift(firstObj)
  }
   querySelectorElement(className:string):void{ //合并单元格
    const selectAllElement: any = document.querySelectorAll(
      `${className}>td>div>span`
    );
    selectAllElement.forEach((k: any, i: number): void => {
      if (k.innerHTML) {
        const selectElement: any =
          document.querySelectorAll(`${className}>td`)[i + 1];
        selectElement.setAttribute("class", "pos-count");
      }
    });
  }
   mounted():void {
    this.querySelectorElement('.pos-table-byxj')
    setTimeout(()=>{
      this.querySelectorElement('.pos-table-zj')
    })
  }
   init():void {
    this.data = this.dataList
    this.columnList.map((j:any,k:number)=>{
      if(j.sortable){
        delete j.sortable
        j.defaultSort = true
        j.renderHeader = (h:any, params:any) => {
          return h('span', {
            style: {
              cursor: 'pointer'
            },
            class: {
              'renderSortable': true,
            },
            on: {
              click: () => {
                params.column.defaultSort = !params.column.defaultSort
              }
            }
          }, [
            h('span', params.column.title),
            h('span', {
              class:{
                'handle':true
              }
            },
            [
              h('i', {
                class: {
                  'iconfont iconicon-shouqi': true,
                  'selectShow': params.column.defaultSort,
                }
              }),
              h('i', {
                class: {
                  'iconfont iconicon-zhankai': true,
                  'selectShow': !params.column.defaultSort
                }
              })                
            ]

            ),

          ])          
        }
      }
      if(j.edit){ //可编辑
        j.render = (h:any, params:any) => {
          if(params.row.status>-1){
            const key = params.column.key
            const keyValue = params.row[key]
            return h(
              'Input', {
                attrs: {
                  value: keyValue,
                },
              }
            )
          }else{
            const key = Object.keys(params.row)[k-2]
            const keyValue = params.row[key]
            return h(
              'span', keyValue
            )
          }
        }
      }
    })
    this.columns = this.columnList
    this.renderTable()
    if (this.data.length) {
      this.pageSize = this.data.length
      const pushArr = [
        {
          name: "本页小计",
          address: "Ottawa No. 2 Lake Park",
          count: 5,
          status: -1,
        },
        {
          name: "合计",
          address: "3243242",
          count: 5,
          status: -2,
        }
      ]
      this.data.map((k: any) => {
        k.selectStatus = false
      })
      this.data = this.data.concat(pushArr)
    }
  }
}