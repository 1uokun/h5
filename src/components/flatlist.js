export default class FlatList {
    constructor(param){
        this.state = {
            ref:document.querySelector(param.ref),
            data:typeof param.data === 'function'? param.data():param.data,
            renderItem:param.renderItem,
        }

        this.render()
    }

    render(){
        var _html = '',state = this.state
        state.data.forEach(function(item,index){
            _html+=state.renderItem(item,index)
        })
        state.ref.innerHTML = _html
    }
}