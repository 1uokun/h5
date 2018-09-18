export default class Pagelife {
    constructor(param){
        this.options = {
            el : param.el,
            DOMContentLoaded : param.DOMContentLoaded,
            onload : param.onload,
            defaultLoading : param.defaultLoading
        }
        this.bindEvent()
    }
    DOMContentLoaded(){
        this.options.DOMContentLoaded&&this.options.DOMContentLoaded()

    }
    onload(){
        this.options.onload&&this.options.onload()
        this.options.defaultLoading&&this.cleanLoading()
    }

    bindEvent(){
        document.addEventListener('DOMContentLoaded', this.DOMContentLoaded.bind(this))
        window.onload = this.onload.bind(this)
        this.options.defaultLoading&&this.defaultLoading()
    }


    //默认一个加载样式
    defaultLoading(){
        document.body.style.overflow = 'hidden'
        let footer = document.createElement('div')
        footer.className='lds-default-footer'
        footer.innerHTML =
            '   <div class="lds-default">' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '        <div></div>' +
            '    </div>'
        document.body.appendChild(footer)
    }

    cleanLoading(){
        document.querySelector('.lds-default-footer').style.display = 'none'
        document.body.style.overflow = 'auto'
    }
}