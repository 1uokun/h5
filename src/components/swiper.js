import Touch from '../base/touch'

export default class Swiper extends Touch{
    constructor(param){
        super(param);
        this.options = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            _index: param.index||0,  //initial slide index
            last: 0, //record interval time
            el: param.el,
        };

        this.loop=Boolean(param.loop);  //whether loop Swiper

        this.initialSwiperActive()
    }

    /**
     *  滑动动画的原理
     *  1。坐标
     *     利用webkitTransform: translate3d(change, 0px, 0px)相对定位
     *
     *  2。动画时间
     *     transfrom-duration: 0ms - 300ms
     *     触发滚动事件时设置事件为300ms，结束后设置回原来的0ms
     *
     *  3。如何循环
     *     在轮播队列 el.children 中unshift最后1个节点，push第1个节点
     *     比如 原队列为[1,2,3] 循环体则为[3,1,2,3,1]
     *     滚动到新增的第1个或最后1个时，transform直接还原到本体上
     *     在onTouchMove事件中处理
     * **/
    initialSwiperActive(){
        const _slides = this.options.el.children;
        //if loop
        if(this.loop){//是否循环
            const firstSlider=_slides[0].cloneNode(true);
            const lastSlider=_slides[_slides.length-1].cloneNode(true);
            this.options.el.insertBefore(lastSlider,this.options.el.childNodes[0]);
            this.options.el.appendChild(firstSlider);
        }
        //if no .swiper-slide-active node
        if(!this.options.el.querySelector('.swiper-slide-active')){
            _slides[this.loop?1:0].classList.add('swiper-slide-active')
        }
        //if has .swiper-slide-active node
        for(let i=0;i<_slides.length;i++){
            if(_slides[i].classList.contains('swiper-slide-active')){
                this.options._index = i;
                this.options.el.style.transitionDuration = '0ms';
                this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*i}px, 0px, 0px)`
                break;
            }
        }
    }

    swiperRender(i){
        const direction = this.horizontalDirection(this.options);
        if(direction==='Left'&&i<this.options.el.children.length-1) {
            this.options._index+=1;
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth * (i + 1)}px, 0px, 0px)`
        }else if(direction==='Right'&&i>=1){
            this.options._index-=1;
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*(i-1)}px, 0px, 0px)`
        }else {
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*i}px, 0px, 0px)`
        }
    }

    /** listen slide active for example : dot
     *
     * @param last_index  Last index before @swiperRender() change
     * @param next_index  Current index
     */
    onSlideActive(last_index,next_index) {
        this.options.el.children[next_index].classList.add('swiper-slide-active');
        this.options.el.children[last_index].classList.remove('swiper-slide-active');
    }
    onTouchStart(e){
        let coords = e.changedTouches.item(0),opt = this.options;
        opt.x1 = coords.pageX;
        opt.y1 = coords.pageY;
        opt.el.style.transitionDuration = '0ms';
        opt.last = performance.now();
    }
    onTouchMove(e){
        let opt = this.options;

        //loop logic core code
        if(this.loop){
            const _len = opt.el.children.length;
            if(opt._index===0){
                this.options._index=_len-2;
                this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth * (_len - 1)}px, 0px, 0px)`
            }else if(opt._index===_len-1){
                this.options._index=1;
                this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth * (1)}px, 0px, 0px)`
            }
        }

        opt.el.style.webkitTransform = `translate3d(${
        e.changedTouches.item(0).pageX
        -opt.x1    // 位移距离
        -opt.el.offsetWidth    // el宽度
        *opt._index            // 当前屏幕显示的slide所在的索引
            }px, 0px, 0px)`
    }
    onTouchEnd(e){
        let coords = e.changedTouches.item(0),opt = this.options;
        opt.x2 = coords.pageX;
        opt.y2 = coords.pageY;
        opt.el.style.transitionDuration = '300ms';
        opt.el.style.webkitTransform = `translate3d(-${opt.el.offsetWidth*opt._index}px, 0px, 0px)`;
        /**
         * @param TapTime
         *
         * 首先，判断触摸时间
         * 1。短按 - 间隔时间300ms
         *    这种情况直接判断滑动方向进行滚动
         *
         * 2。长按 - 间隔时间大于300ms
         *    这种情况就需要判断滑动了多少距离 - 可自定义
         *    一般为超过第二张的一半时滑动
         *
         * **/
        if(Math.abs(opt.x2 - opt.x1) > opt.el.offsetWidth/2 || this.TapTime(opt.last)<300){
            const last_index = opt._index;
            this.swiperRender(opt._index);
            this.onSlideActive(last_index,opt._index);
        }
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
