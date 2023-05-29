
export const dataListAddnew=[

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
  
];

export const dataListQuery=[

  {
    item: {
      type: "Input", // 组件类型
      required: false, // 是否必填
      field: "billNo",
      label: "编号",
      props: {
        // disabled:'disabled',
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: false, // 是否必填
      field: "storeName",
      label: "仓店名称",
      props: {
        // disabled:'disabled',
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "posInput", // 组件类型
      required: false, // 是否必填
      field: "storeNature",
      label: "仓店性质",
      props: {
        // disabled:true,
        placeholder: "",
        value:""
      },
    },
  },
  // {
  //   item: {
  //     type: "posInput", // 组件类型
  //     required: false, // 是否必填
  //     field: "sendStore",
  //     label: "发货店仓",
  //     props: {
  //       // disabled:true,
  //       placeholder: "",
  //       value:""
  //     },
  //   },
  // },
  // {
  //   item: {
  //     type: "posInput", // 组件类型
  //     required: false, // 是否必填
  //     field: "storeCategory",
  //     label: "店仓类别",
  //     props: {
  //       // disabled:true,
  //       placeholder: "",
  //       value:""
  //     },
  //   },
  // },
  // {
  //   item: {
  //     type: "posInput", // 组件类型
  //     required: false, // 是否必填
  //     field: "province",
  //     label: "省份",
  //     props: {
  //       // disabled:true,
  //       placeholder: "",
  //       value:""
  //     },
  //   },
  // },
  // {
  //   item: {
  //     type: "posInput", // 组件类型
  //     required: false, // 是否必填
  //     field: "city",
  //     label: "城市",
  //     props: {
  //       // disabled:true,
  //       placeholder: "",
  //       value:""
  //     },
  //   },
  // },
  // {
  //   item: {
  //     type: "posInput", // 组件类型
  //     required: false, // 是否必填
  //     field: "cityTwo",
  //     label: "城市",
  //     props: {
  //       // disabled:true,
  //       placeholder: "",
  //       value:""
  //     },
  //   },
  // },
  {
    item: {
      type: "Select", // 组件类型
      required: false, // 是否必填
      field: "isUse",
      label: "可用",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
 
];

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
];

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

export const dataListTransfer=[
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
      type: "posInput", // 组件类型
      required: true, // 是否必填
      field: "VIPactive2",
      label: "VIP充值活动定义2",
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
];

export const tableColumnList =[
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

export const tableList=[
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

export const formList=[
  {
    item: {
      type: "Input", // 组件类型
      required: false, // 是否必填
      field: "totalLine",
      label: "总行数",
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
      field: "totalNum",
      label: "总数量",
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
      field: "totalOutNum",
      label: "总出库数量",
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
      field: "totalInNum",
      label: "总入库数量",
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
      field: "totalMoney",
      label: "总标准金额",
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
      field: "totalOutMoney",
      label: "总出库金额",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: true, // 是否必填
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
      type: "Input", // 组件类型
      required: true, // 是否必填
      field: "outStatus",
      label: "出库状态",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
]

export const journalFormList =[
  {
    item: {
      type: "Input", // 组件类型
      required: false, // 是否必填
      field: "creator",
      label: "创建人",
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
      field: "createTime",
      label: "创建时间",
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
      field: "Modifier",
      label: "修改人",
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
      field: "ModifiedTime",
      label: "修改时间",
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
      field: "committer",
      label: "提交人",
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
      field: "commitTime",
      label: "提交时间",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: true, // 是否必填
      field: "outPerson",
      label: "出库人",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: true, // 是否必填
      field: "outTime",
      label: "出库时间",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: true, // 是否必填
      field: "inPerson",
      label: "入库人",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: true, // 是否必填
      field: "inTime",
      label: "入库时间",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
  {
    item: {
      type: "Input", // 组件类型
      required: true, // 是否必填
      field: "canUse",
      label: "可用",
      props: {
        placeholder: "",
        value: "",
      },
    },
  },
]