import { Component, Vue } from 'vue-property-decorator';
@Component
export default class EditTableMixin extends Vue {
   editTable():void{
    const _this = (this as any)
    _this.data =[]
    _this.columns =[]

    _this.init()
}
}