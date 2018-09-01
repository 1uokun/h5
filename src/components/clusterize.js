export const clusterize = function({content_elem,scroll_elem,data,clusterize_scroll}){
    // 基本信息
    this.options = {
        content_elem : document.getElementById(content_elem),
        scroll_elem : document.getElementById(scroll_elem),
        item_height : 0,
        top_height : 0,
        bottom_height : 0,
        _html : '',
        density : 20,
        clusterize_scroll:clusterize_scroll?clusterize_scroll:400,
        start : null,
        end : null,
    };
    // 闭包参数
    var self = this.options,
        cache = [],
        show_no_data_row=[],
        _change = 0

    /**
     * 通过控制<tbody>的头尾<tr>的高度来达到虚拟渲染
     * 灵感来自https://clusterize.js.org/
     * **/
    // 渲染dom函数
    this.render = function(show_no_data_row,cache,i){
        self._html = ''
        // firstChild 第一个tr的高度
        self.top_height = self.item_height * cache.length

        // lastChild 最后一个tr的高度
        self.bottom_height = self.item_height * (data.length-cache.length-show_no_data_row.length)

        // 中间的html内容
        for(var i=0;i<show_no_data_row.length;i++){
            self._html += show_no_data_row[i]
        }
        self.content_elem.innerHTML = self._html
        self.content_elem.firstChild.style.height = self.top_height+'px'
        self.content_elem.lastChild.style.height = self.bottom_height+'px'
    }

    //页面生命周期 - 加载阶段
    document.addEventListener('DOMContentLoaded', function(){
        // 在DOMContentLoaded阶段先获得item高度，以备后续计算密度
        self.content_elem.innerHTML = aRows1[0]
        self.item_height = self.content_elem.querySelector('td').offsetHeight
        // 计算密度
        self.density = parseInt(self.clusterize_scroll/(self.item_height-2))
        self.top_height = 0
        self.bottom_height = self.item_height * (data.length-self.density*2)
        self.start = `<tr style="height:${self.top_height}px"></tr>`
        self.end = `<tr style="height:${self.bottom_height}px"></tr>`

    })

    // 加载完成
    window.onload = function(){
        this.render(data.slice(0,self.density*2),cache,0)
    }.bind(this)

    // 监听滚动事件
    self.scroll_elem.addEventListener('scroll', function(event){
        var len = self.density;
        var i = parseInt(event.srcElement.scrollTop/self.item_height/len)
        // 滚动高度/（块高度*密度）取整 - 用于判断滚动到一半时启动渲染
        if(_change!==i){
            _change = i
            cache = data.slice(0,len*i)
            show_no_data_row = data.slice(len*i,len*(i+2))
            this.render(show_no_data_row,cache,i)
        }
    }.bind(this))
}