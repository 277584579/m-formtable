// src/index.js
// 导入组件，组件必须声明 name
import PosTable from './src/index.vue'
 
// 为组件提供 install 安装方法，供按需引入
(PosTable as any).install =  (Vue:any)=> {
 Vue.component('PosTable', PosTable)
}
// 默认导出组件
export default PosTable