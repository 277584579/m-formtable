// src/index.js
// 导入组件，组件必须声明 name
import PopUp from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
(PopUp as any).install =  (Vue:any)=> {
 Vue.component('PopUp', PopUp)
}
// 默认导出组件
export default PopUp