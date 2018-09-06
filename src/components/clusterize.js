export const clusterize = function(param){
    // 基本信息
    this.options = {
        content_elem : param.content_elem,
        scroll_elem : param.scroll_elem,
        item_height : 0,
        top_height : 0,
        bottom_height : 0,
        _html : '',
        density : 20,
        clusterize_scroll:param.clusterize_scroll?param.clusterize_scroll:400,
        renderItem:param.renderItem,
        data:param.data
    };
    // 闭包参数
    var self = this.options,
        cache = [0],
        show_no_data_row=[],
        _change = 0

    /**
     * 通过控制<tbody>的头尾<tr>的高度来达到虚拟渲染
     * 灵感来自https://clusterize.js.org/
     * **/
    // 渲染dom函数
    this.render = function(show_no_data_row,cache){
        self._html = ''
        // firstChild 第一个tr的高度
        self.top_height = self.item_height * cache.length

        // lastChild 最后一个tr的高度
        self.bottom_height = self.item_height * (self.data.length-cache.length-show_no_data_row.length)

        // 中间的html内容
        show_no_data_row.forEach(function(item,index){
            self._html += self.renderItem(item,index)
        })
        self.content_elem.innerHTML = self._html
        self.content_elem.firstChild.style.height = Math.max(self.item_height,self.top_height)+'px'
        self.content_elem.lastChild.style.height = self.bottom_height+'px'
    }

    //页面生命周期 - 加载阶段
    document.addEventListener('DOMContentLoaded', function(){
        self.scroll_elem.style.maxHeight = self.clusterize_scroll+'px'
        // 在DOMContentLoaded阶段先获得item高度，以备后续计算密度
        self.content_elem.innerHTML = self.renderItem(aRows1[0],0)
        self.item_height = self.content_elem.offsetHeight
        // 计算密度
        self.density = parseInt((self.clusterize_scroll + self.item_height*2)/(self.item_height-2))
        self.top_height = 0
        self.bottom_height = self.item_height * (self.data.length-self.density*2)
    })

    // 加载完成
    window.onload = function(){
        this.render(self.data.slice(0,self.density*2),cache,0)
    }.bind(this)

    // 监听滚动事件
    self.scroll_elem.addEventListener('scroll', function(event){
        var len = self.density;
        var i = parseInt(event.srcElement.scrollTop/self.item_height/len)
        // 滚动高度/（块高度*密度）取整 - 用于判断滚动到一半时启动渲染
        if(_change!==i){
            _change = i
            cache = self.data.slice(0,len*i)
            show_no_data_row = self.data.slice(len*i,len*(i+2))
            this.render(show_no_data_row,cache,i)
        }
    }.bind(this))
}

/**
 * @other 其他相似组件
 *
 * new IntersectionObserver(callback, options)
 * [使用Intersection Observer API构建无限滚动组件](https://www.w3cplus.com/vue/build-an-infinite-scroll-component-using-intersection-observer-api.html)
 *
 * **/