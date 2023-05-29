// src/index.js
import PosInput from './src/index.vue'
import { Input } from '@syman/ark-ui';
// 为组件提供 install 安装方法，供按需引入
(PosInput as any).install = (Vue:any)=> {
 Vue.component('Input', Input)
 Vue.component('PosInput', PosInput)
}
// 默认导出组件
export default PosInput