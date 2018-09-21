export default class Pagelife {
    constructor(param){
        this.options = {
            el : param.el?param.el:document.body,
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
    }

    bindEvent(){
        let self = this.options;
        document.addEventListener('DOMContentLoaded', this.DOMContentLoaded.bind(this))
        window.onload = function(){
            self.defaultLoading&&this.cleanLoading(self.el);
            this.onload()
        }.bind(this);

        this.options.defaultLoading&&this.defaultLoading()
    }


    //默认一个加载样式
    defaultLoading(){
        this.options.el.style.overflow = 'hidden'
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
        this.options.el.appendChild(footer)
    }

    cleanLoading(el){
        document.querySelector('.lds-default-footer').style.display = 'none'
        el.style.overflow = 'auto'
    }
}