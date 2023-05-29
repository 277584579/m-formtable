
export const datalistTable=[
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
    count: 1,
    status: 1,
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    count: 1,
    status: 0,
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
    count: 1,
    status: 2,
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    count: 1,
    status: 0,
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    count: 1,
    status: 0,
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
    count: 1,
    status: 2,
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    count: 1,
    status: 0,
  },
]
export const datalistTable1=[
  {
    name: "3333333",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
    count: 1,
    status: 1,
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    count: 1,
    status: 0,
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
    count: 1,
    status: 2,
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    count: 1,
    status: 0,
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    count: 1,
    status: 0,
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
    count: 1,
    status: 2,
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    count: 1,
    status: 0,
  },
]
export const dataListArr=[
  {
    item: {
      type: "Input", // 组件类型
      required: true, // 是否必填
      field: "billNo",
      label: "单据编号",
      props: {
        disabled:'disabled',
        placeholder: "",
        value: "",
      },
    },
  },
  {
    show: true, // 是否显示隐藏
    item: {
      type: "singDatePicker", // 组件类型
      required: false, // 是否必填
      field: "order-Date",
      label: "单据日期",
      props: {
        type: "date",
        value: "2021-10-09",
      },
    },
  },
  {
    show: true, // 是否显示隐藏
    item: {
      type: "DateRangePicker", // 组件类型
      required: false, // 是否必填
      field: "order-Date1",
      label: "日期选择",
      props: {
        value: "2020-10-01~2020-10-08",
      },
    },
  },
  {
    show: true, // 是否显示隐藏
    item: {
      type: "DateRangePicker", // 组件类型
      required: false, // 是否必填
      field: "order-Date2",
      label: "日期选择2",
      props: {
        value: "",
      },
    },
  },
  // {

  //   item: {
  //     type: "DatePicker", // 组件类型
  //     required: false, // 是否必填
  //     field: "order-Date",
  //     label: "单据日期",
  //     props: {
  //       type:'date',
  //       options:"options",
  //       placeholder: "",
  //       value: "",
  //       event: {
  //         click: (e) => {
  //           console.log("提交回调", e);
  //           (this.$refs.FormLayout as any).reset();
  //         },
  //       },
  //     },
  //   },
  // },
  {
    item: {
      type: "Input", // 组件类型
      required: false, // 是否必填
      field: "VIPNo",
      label: "VIP卡号",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "posInput", // 组件类型
      required: true, // 是否必填
      field: "VIPactive",
      label: "VIP充值活动定义",
      props: {
        disabled:false,
        placeholder: "",
        value:""
      },
    },
  },
  {
    item: {
      type: "Select", // 组件类型
      required: false, // 是否必填
      field: "VIPactive",
      label: "充值方式",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: false, // 是否必填
      field: "desc",
      label: "备注",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Select", // 组件类型
      required: false, // 是否必填
      field: "commitStatus",
      label: "提交状态",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Select", // 组件类型
      required: false, // 是否必填
      field: "available",
      label: "可用",
      props: {
        placeholder: "",
        value: "New York",
        options: [
          {
            value: "New York",
            label: "New York",
          },
          {
            value: "London",
            label: "London",
          },
        ],
      },
    },
  },
  // {
  //   show: true, // 是否显示隐藏
  //   row: 1, // 行高
  //   col: 1, // 列宽
  //   item: {
  //     type: "Checkbox", // 组件类型
  //     required: true, // 是否必填
  //     label: "116666",
  //     field: "key4",
  //     props: {
  //       circle: true,
  //       value: false,
  //     },
  //   },
  // },
  // {
  //   show: true, // 是否显示隐藏
  //   row: 1, // 行高
  //   col: 1, // 列宽
  //   item: {
  //     type: "CheckboxGroup", // 组件类型
  //     required: true, // 是否必填
  //     label: "116666",
  //     field: "key5",
  //     props: {
  //       value: ["Female1"],
  //       options: [
  //         {
  //           value: "0",
  //           label: "Male0",
  //         },
  //         {
  //           value: "1",
  //           label: "Female1",
  //         },
  //       ],
  //     },
  //   },
  // },
  // {
  //   show: true, // 是否显示隐藏
  //   row: 1, // 行高
  //   col: 2, // 列宽
  //   item: {
  //     type: "Select", // 组件类型
  //     required: true,
  //     field: "key3",
  //     label: "下拉框组件",
  //     props: {
  //       placeholder: "后台字段",
  //       options: [
  //         {
  //           value: "New York",
  //           label: "New York",
  //         },
  //         {
  //           value: "London",
  //           label: "London",
  //         },
  //       ],
  //     },
  //     event: {
  //       "on-change": (e) => {
  //         console.log(e);
  //       },
  //     },
  //   },
  // }
  // ,{
  //   show: true, // 是否显示隐藏
  //   col: 2, // 列宽
  //   item: {
  //     soltName: "test", // 组件类型
  //   },
  // }
];

export const buttonListArr = [
  {
    icon:'md-add',
    text:'新增',
    click: 'addItem',
  },
  {
    icon:'iconicon-baocun',
    text:'保存',
    click: 'saveItem'
  },
  {
    icon:'iconicon-shanchu',
    text:'作废',
    click: 'deleteItem'
  },
  {
    icon:'iconicon-tijiao',
    text:'提交',
    click: 'commitItem'
  },
  {
    icon:'md-refresh',
    text:'刷新',
    click: 'refreshItem'
  },
  {
    icon:'iconicon-daochubeifen',
    text:'导出',
    click: 'exportItem'
  },
  {
    icon:'icona-icon-daochubeifen2',
    text:'套打',
    click: 'taodaItem'
  },
  {
    icon:'icona-icon-daochubeifen3',
    text:'导入',
    click: 'importItem'
  },
  {
    icon:'icona-icon-daochubeifen4',
    text:'复制',
    click: 'copyItem'
  },
  {
    icon:'icona-icon-daochubeifen5',
    text:'修改选中行',
    click: 'modifyChosedItem'
  },
  {
    icon:'icona-icon-daochubeifen6',
    text:'修改结果集',
    click: 'modifyResultItem'
  },
]


export const statusListArr = [
  { 
    statusId:"1",
    text:"提交",
    class:"commit",
  },
  { 
    statusId:"4",
    text:"出库状态",
    class:"outboundStatus",
  },
  {
    statusId:"2",
    text:"待批",
    class:"wait",
  },
  {
    statusId:"3",
    text:"待取消",
    class:"cancle",
  },
  { 
    statusId:"5",
    text:"入库状态",
    class:"inboundStatus",
  },
]
export const columnListArr =[
  {
    title: "订单名称",
    key: "name",
  },
  {
    title: "年龄",
    key: "age",
    sortable: true,
  },
  {
    title: "单据日期",
    key: "date",
  },
  {
    title: "总数",
    key: "count",
  },
  {
    title: "地址",
    key: "address",
  },
]
export const columnListArr1 =[
  {
    title: "订单名称",
    key: "name",
  },
  {
    title: "年龄",
    key: "age",
    sortable: true,
  },
  {
    title: "单据日期",
    key: "date",
  },
  {
    title: "总数",
    edit:true,
    type:'input',
    key: "count",
  },
  {
    title: "地址",
    key: "address",
  },
]
export const checkListArr = [
  {name:'切换到修改界面'},
  {name:'刷新'},
]
export const checkListArr1 = [
  {name:'切换到查看界面'},
  {name:'刷新'},
]