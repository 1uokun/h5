import {throttle} from "./util";

export default class Touch {
    constructor(param){
        this.options = {
            el : param.el,
            touchStart : param.touchStart,
            touchMove : param.touchMove,
            touchEnd : param.touchEnd
        };
        this.bindEvent()
    }

    /**
     * 判断移动的方向,结果是Left, Right, Up, Down中的一个
     * @param  x1 起点的横坐标
     * @param  x2 终点的横坐标
     * @param  y1 起点的纵坐标
     * @param  y2 终点的纵坐标
     *
     */
    // Direction
    horizontalDirection({x1, x2}){
        return x1 - x2 > 0 ? 'Left' : x1 - x2 < 0 ? 'Right' : false
    }

    verticalDirection({y1, y2}) {
        return y1 - y2 > 0 ? 'Up' : y1 - y2 < 0 ? 'Down' : false
    }

    direction({x1, x2, y1, y2}) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ?
            (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
    }
    //触摸时间
    TapTime(last){
        let endTime = performance.now();
        return endTime - last
    }

    //private _onTouchStart for mouse event
    _onTouchStart(e){
        this.isMouseDown = true;
        let pageX = e.type === 'touchstart'?e.targetTouches[0].pageX : e.pageX || e.clientX;
        /**
         * public this.onTouchStart
         * @param {pageX} for Swiper
         * **/
        this.onTouchStart({pageX:pageX});
    }
    onTouchStart(e){
        return this.options.touchStart(e)
    }


    _onTouchMove(e){
        document.addEventListener('touchmove',(event)=>{
            event.preventDefault()
        });
        e.stopImmediatePropagation();
        let pageX = e.pageX||e.targetTouches[0].pageX;
        this.isMouseDown&&throttle(this.onTouchMove({pageX:pageX}));
    }
    onTouchMove(e){
        return this.options.touchMove(e)
    }


    _onTouchEnd(e){
        this.isMouseDown = false;
        let pageX = e.pageX||e.changedTouches[0].pageX;
        this.onTouchEnd({pageX:pageX});
    }
    onTouchEnd(e){
        return this.options.touchEnd(e)
    }

    bindEvent(){
        this.options.el.addEventListener('touchstart',this._onTouchStart.bind(this))
        this.options.el.addEventListener('touchmove',this._onTouchMove.bind(this))
        this.options.el.addEventListener('touchend',this._onTouchEnd.bind(this))

        //添加鼠标事件
        this.options.el.addEventListener('mousedown',this._onTouchStart.bind(this))
        this.options.el.addEventListener('mousemove',this._onTouchMove.bind(this))
        this.options.el.addEventListener('mouseup',this._onTouchEnd.bind(this))
    }
}
