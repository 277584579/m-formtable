import { Button, Icon } from "@syman/ark-ui";
import ButtonsBlock from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
(ButtonsBlock as any).install =  (Vue:any)=> {
 Vue.component('Button', Button)
 Vue.component('Icon', Icon)
 Vue.component('ButtonsBlock', ButtonsBlock)
}
// 默认导出组件
export default ButtonsBlock