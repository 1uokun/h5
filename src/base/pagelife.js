export default class Pagelife {
    constructor(param){
        this.options = {
            el : param.el,
            DOMContentLoaded : param.willMount,
            onload : param.didMount
        }
        this.bindEvent()
    }

    bindEvent(){
        var opt = this.options
        document.addEventListener('DOMContentLoaded', opt.DOMContentLoaded)
        window.onload = opt.onload
    }
}