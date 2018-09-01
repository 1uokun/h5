export default class Scroll {
    constructor(param){
        this.options = {
            content_elems : param.content_elems,
            scroll_elem : param.scroll_elem,
            whenVisible : param.whenVisible,
            whenState : true,
            scrollToTop : param.scrollToTop,
            scrollToBottom : param.scrollToBottom,
            offset:param.offset?param.offset:[0,0,0,0]
        };
        this.state = {
            topState:FSM.off,
            bottomState:FSM.off
        };

        this.bindEvent();
        this.init()
    }

    // 指定content_elems_item滚动到可视区域时
    isVisible(event,content_elems_item){
        //element坐标
        let coords = content_elems_item.getBoundingClientRect();
        //当前窗口高度
        let windowHeight = Math.min(this.options.scroll_elem.clientHeight,document.documentElement.clientHeight);
        //判断element是否在当前窗口的可视区域
        let topVisible = coords.top > 0 && coords.top < windowHeight;
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

        if(Boolean(topVisible || bottomVisible) && this.options.whenVisible){
            return this.options.whenVisible(event,content_elems_item)
        }
    }

    getScrollTop() {
        return Math.max(document.body.scrollTop,document.documentElement.scrollTop,this.options.scroll_elem.scrollTop)
    }

    getScrollHeight(){
        return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,this.options.scroll_elem.scrollHeight)
    }

    getWindowHeight(){
        return document.compatMode === "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
    }


    // 派发滚动事件
    dispatchEvent(type,event){
        // console.log('getScrollTop',this.getScrollTop())
        // console.log('getScrollHeight',this.getScrollHeight())
        // console.log('getWindowHeight',this.getWindowHeight())
        // console.log(this.options.scroll_elem.clientHeight)
        /**
         * @param type
         *
         * 判断当前监听的滚动element是指定el
         * 还是window即document.body
         *
         *
         * @model FSM
         *
         * state & FSM 状态模式
         * finite-state machine 有限状态机缩写
         * 摘自 曾探.JavaScript设计模式与开发实践[M] p.224
         *
         *
         * @warn 未完成
         * webapp模式下无法监听到`滚动到底部`事件
         * **/
        let isOnTop = this.getScrollTop()<=0+this.options.offset[0],
            isOnBottom = this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight() - this.options.offset[2];

        if(this.options.scrollToBottom&&type === 'el') {
            this.state.bottomState.bottomWasArrivaled.call(this,isOnBottom)
        }else if(this.options.scrollToBottom&&type === 'window'){
            this.state.bottomState.bottomWasArrivaled.call(this,isOnBottom)
        }

        this.options.scrollToTop&&this.state.topState.topWasArrivaled.call(this,isOnTop);

        this.init()
    }

    // 绑定事件
    bindEvent(){
        if(this.options.scroll_elem.scrollHeight>this.options.scroll_elem.clientHeight){
            this.options.scroll_elem.addEventListener('scroll', this.dispatchEvent.bind(this,'el'))
        }else {
            window.addEventListener('scroll', this.dispatchEvent.bind(this,'window'))
        }
    }

    // 初始化
    init(){
        !!this.options.content_elems&&this.options.content_elems.forEach(function(item){
            this.isVisible(event,item)
        }.bind(this))
    }
}

let FSM = {
    off: {
        topWasArrivaled: function(isOnTop) {
            if(!isOnTop){
                this.state.topState = FSM.on;
            }
        },
        bottomWasArrivaled: function(isOnBottom) {
            if(!isOnBottom){
                this.state.bottomState = FSM.on;
            }
        }
    },
    on: {
        topWasArrivaled: function(isOnTop) {
            if(isOnTop){
                this.state.topState = FSM.off;
                return this.options.scrollToTop(event);
            }

        },
        bottomWasArrivaled: function(isOnBottom) {
            if(isOnBottom){
                this.state.bottomState = FSM.off;
                return this.options.scrollToBottom(event);
            }
        }
    }
};

/**
 * @native 其他原生功能 - 暂不封装
 *
 * 滚动到指定位置
 * [window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
 * **/