import Touch from '../base/touch'

export default class Swiper{
    constructor(el,obj){
        this.options = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            _index: 0,
            last: 0,
            el: document.querySelector(el),
            slides: document.querySelector(el).querySelectorAll('.swiper-slide')
        }

        this.bindEvent()
        this.swiperActive()
    }

    /**
     * 判断移动的方向,结果是Left, Right, Up, Down中的一个
     * @param  {} x1 起点的横坐标
     * @param  {} x2 终点的横坐标
     * @param  {} y1 起点的纵坐标
     * @param  {} y2 终点的纵坐标
     *
     * 这里直接使用touch类的horizontalDirection
     */
    swiperDirection({x1,x2,y1,y2}){
        return x1 - x2 > 0 ? 'Left' : x1 - x2 < 0? 'Right' : false
        // return Math.abs(x1-x2) >=
        //         Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
    }

    /**
     * 首先，判断触摸时间
     * 1。短按 - 间隔时间300ms
     *    这种情况直接判断滑动方向进行滚动
     *
     * 2。长按 - 间隔时间大于300ms
     *    这种情况就需要判断滑动了多少距离 - 可自定义
     *    一般为超过第二张的一半时滑动
     *
     * **/
    TapTime(){
        let endTime = performance.now()
        return endTime - this.options.last
    }

    /**
     *  其次，滑动动画的原理
     *  1。坐标
     *     利用webkitTransform: translate3d(change, 0px, 0px)相对定位
     *
     *  2。动画时间
     *     transfrom-duration: 0ms - 300ms
     *     触发滚动事件时设置事件为300ms，结束后设置回原来的0ms
     * **/
    swiperRender(i){
        if(this.swiperDirection(this.options)=='Left'&&i<this.options.slides.length-1) {
            this.options.slides[i].classList.remove('swiper-slide-active')
            this.options.slides[i + 1].classList.add('swiper-slide-active')
            this.options._index += 1
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth * (i + 1)}px, 0px, 0px)`
        }else if(this.swiperDirection(this.options)=='Right'&&i>=1){
            this.options.slides[i].classList.remove('swiper-slide-active')
            this.options.slides[i - 1].classList.add('swiper-slide-active')
            this.options._index-=1
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*(i-1)}px, 0px, 0px)`
        }else {
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*i}px, 0px, 0px)`
        }
    }

    swiperActive(){
        if(!this.options.el.querySelector('.swiper-slide-active')){
            this.options.slides[0].classList.add('swiper-slide-active')
        }
        for(let i=0;i<this.options.slides.length;i++){
            if(this.options.slides[i].classList.contains('swiper-slide-active')){
                this.options._index = i
                this.options.el.style.transitionDuration = '0ms'
                this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*i}px, 0px, 0px)`
            }
        }
    }

    bindEvent(){
        let opt = this.options;
        new Touch({
            el:opt.el,
            touchStart: function(e){
                let coords = e.changedTouches.item(0)
                opt.x1 = coords.pageX
                opt.y1 = coords.pageY
                opt.el.style.transitionDuration = '0ms'
                opt.last = performance.now()
            },
            touchMove: function(e){
                opt.el.style.webkitTransform = `translate3d(${
                e.changedTouches.item(0).pageX
                -opt.x1    // 位移距离
                -opt.el.offsetWidth    // el宽度
                *opt._index            // 当前屏幕显示的slide所在的索引
                    }px, 0px, 0px)`
            },
            touchEnd: function(e){
                let coords = e.changedTouches.item(0)
                opt.x2 = coords.pageX
                opt.y2 = coords.pageY
                opt.el.style.transitionDuration = '300ms'
                opt.el.style.webkitTransform = `translate3d(-${opt.el.offsetWidth*opt._index}px, 0px, 0px)`
                if(Math.abs(opt.x2 - opt.x1) > opt.el.offsetWidth/2 || this.TapTime()<300){
                    this.swiperRender(opt._index)
                }
            }.bind(this),
        })
    }
}

/**
 * 其他：classList
 *
 * @prop  length    表示元素类名的个数
 * @prop  item(0)   支持一个参数，为类名的索引，返回对应的类名。超出索引返回null
 * @prop  add()     添加一个类名，如果存在则添加忽略.也可以添加多个类add('a','b')
 * @prop  remove()  移除一个类名
 * @prop  toggle()  支持一个类名字字符串，无则加勉，有则移除之意。
 *                  部分现代浏览器支持第2个参数，.toggle(token, switch) switch为boolean,true表示添加，false表示移除。返回boolean值
 * @prop  contains()支持一个类名字字符串，表示是否包含该类名
 *
 * 参考： [HTML5 DOM元素类名相关操作API classList简介 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2013/07/domtokenlist-html5-dom-classlist-类名/)
 *
 * **/
