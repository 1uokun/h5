export default class Pagelife {
    constructor(param){
        this.options = {
            el : param.el,
            DOMContentLoaded : param.DOMContentLoaded,
            onload : param.onload
        }
        this.bindEvent()
    }
    DOMContentLoaded(){
        this.options.DOMContentLoaded&&this.options.DOMContentLoaded()

    }
    onload(){
        this.options.onload&&this.options.onload()
    }


    bindEvent(){
        document.addEventListener('DOMContentLoaded', this.DOMContentLoaded.bind(this))
        window.onload = this.onload.bind(this)
    }
}