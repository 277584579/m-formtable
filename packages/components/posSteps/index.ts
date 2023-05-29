import PosSteps from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
(PosSteps as any).install =  (Vue:any)=> {
 Vue.component('PosSteps', PosSteps)
}
// 默认导出组件
export default PosSteps