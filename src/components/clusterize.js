import Page from '../base/pagelife'
export default class clusterize extends Page{
    constructor(param){
        super(Object.assign(param,{el:param.scroll_elem}))
        this.options={
            content_elem : param.content_elem,
            content_height:param.content_height?param.content_height:400,
            scroll_elem : param.scroll_elem,
            item_height : 0,
            top_height : 0,
            bottom_height : 0,
            _html : '',
            density : 20,
            renderItem:param.renderItem,
            data:param.data
        }

        // 闭包参数
        this._change = 0
    }

    DOMContentLoaded(){
        this.getItemHeight()
        this.getDensity()
    }

    onload(){
        this.render(this.options.data.slice(0,this.options.density*2),[])
        this.onScroll()
    }

    // 获取单个item高度
    getItemHeight(){
        this.options.scroll_elem.style.height = this.options.content_height+'px'
        // 在DOMContentLoaded阶段先获得item高度，以备后续计算密度
        this.options.content_elem.innerHTML = this.options.renderItem(aRows1[0],0)
        this.options.item_height = this.options.content_elem.offsetHeight
    }

    // 获取content盒子内item的密度
    getDensity(){
        this.options.density = parseInt((this.options.content_height + this.options.item_height*2)/(this.options.item_height-2))
    }

    /**
     * 通过控制<tbody>的头尾<tr>的高度来达到虚拟渲染
     * 灵感来自https://clusterize.js.org/
     * **/
    // 动态渲染函数
    render(show_no_data_row,cache){
        this.options._html = ''
        // firstChild 第一个tr的高度
        this.options.top_height = this.options.item_height * cache.length

        // lastChild 最后一个tr的高度
        this.options.bottom_height = this.options.item_height * (this.options.data.length-cache.length-show_no_data_row.length)

        // 中间的html内容
        show_no_data_row.forEach(function(item,index){
            this.options._html += this.options.renderItem(item,index)
        }.bind(this));
        this.options.content_elem.innerHTML = this.options._html
        this.options.content_elem.firstChild.style.height = Math.max(this.options.item_height,this.options.top_height)+'px'
        this.options.content_elem.lastChild.style.height = this.options.bottom_height+'px'
    }

    // 监听滚动事件
    onScroll(){
        this.options.scroll_elem.addEventListener('scroll', function(event){
            let len = this.options.density;
            let i = parseInt(event.srcElement.scrollTop/this.options.item_height/len)
            // 滚动高度/（块高度*密度）取整 - 用于判断滚动到一半时启动渲染
            if(this._change!==i){
                this._change = i
                let cache = this.options.data.slice(0,len*i)
                let show_no_data_row = this.options.data.slice(len*i,len*(i+2))
                this.render(show_no_data_row,cache,i)
            }
        }.bind(this))
    }
}
/**
 * @other 其他相似组件
 *
 * new IntersectionObserver(callback, options)
 * [使用Intersection Observer API构建无限滚动组件](https://www.w3cplus.com/vue/build-an-infinite-scroll-component-using-intersection-observer-api.html)
 *
 * **/