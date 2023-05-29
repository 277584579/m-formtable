import {
  Icon,
  DatePicker,
  Button,
  Input,
  Page,
  FormLayout,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  Options,
  Table,
  // RadioGroup,
  // Radio
} from "@syman/ark-ui";
// 导入组件
import Formtable from "../packages/components/formtable" //formTable业务组件
import posInput from "./components/input" //业务组件
import posFormLayout from "./components/posFormLayout" //form业务组件
import buttonsBlock from "./components/buttonsBlock" //折叠button
import SingDatePicker from "./components/singDatePicker" //单选日期
import DateRangePicker from "./components/dateRangePicker" //单选日期
import PosTable from "./components/posTable" //单选日期
import FooterStatus from "./components/footerStatus" //底部状态
import CheckTable from "./components/checkTable" //切换table组件
import PopUp from "./components/popUp" //弹窗组件
import FoldingPanel from "./components/foldingPanel" //折叠组件
import PosSteps from "./components/posSteps" //步骤条组件

// 组件列表
const components = [
  SingDatePicker,
  Formtable,
  posInput,
  posFormLayout,
  buttonsBlock,
  DateRangePicker,
  PosTable,
  FooterStatus,
  CheckTable,
  PopUp,
  FoldingPanel,
  PosSteps
]
const install: any = function (Vue: any) {
  if (install.installed) return
  //需要全局注册push的时候需要注释
  Vue.component('Icon', Icon)
  Vue.component('DatePicker', DatePicker)
  Vue.component('Button', Button)
  Vue.component('Input', Input)
  Vue.component('Page', Page)
  Vue.component('FormLayout', FormLayout)
  Vue.component('Checkbox', Checkbox)
  Vue.component('CheckboxGroup', CheckboxGroup)
  Vue.component('Select', Select)
  Vue.component('Option', Option)
  Vue.component('Options', Options)
  Vue.component('Table', Table)
  // Vue.component('RadioGroup ', RadioGroup)
  // Vue.component('Radio', Radio)
  components.map(component => Vue.component((component as any).extendOptions.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Formtable,
  posInput,
  posFormLayout,
  buttonsBlock,
  SingDatePicker,
  DateRangePicker,
  PosTable,
  FooterStatus,
  CheckTable,
  PopUp,
  FoldingPanel,
  PosSteps
}