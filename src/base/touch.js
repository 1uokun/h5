import Scroll from './scroll'
class Touch {
    constructor(param){
        this.options = {
            el : document.querySelector(param.el),
            touchStart : param.touchStart,
            touchMove : param.touchMove,
            touchEnd : param.touchEnd
        }
        this.state = {
            x1:0,
            x2:0,
            y1:0,
            y2:0
        }
        this.bindEvent()
    }

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

    onTouchStart(e){
        let coords = e.changedTouches.item(0)
        this.state.y1 = coords.pageY
        return this.options.touchStart(e)
    }
    onTouchMove(e){
        let coords = e.changedTouches.item(0)
        console.log(coords.pageY)
        // console.log(this.horizontalDirection({x1:coords.pageX,}))
        new Scroll({
            scroll_elem:'#list',
            scrollToTop:function(){
                this.state.y2 = coords.pageY
                console.log(this.state.y1,this.state.y2)
            }.bind(this),
        })


        return this.options.touchMove(e)

    }
    onTouchEnd(e){
        return this.options.touchEnd(e)
    }

    bindEvent(){
        this.options.el.addEventListener('touchstart',this.onTouchStart.bind(this))
        this.options.el.addEventListener('touchmove',this.onTouchMove.bind(this))
        this.options.el.addEventListener('touchend',this.onTouchEnd.bind(this))
    }
}

export default Touch