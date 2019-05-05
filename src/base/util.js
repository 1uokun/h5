// 节流 - https://github.com/mqyqingfeng/Blog/issues/26
let throttle = function(action){
    let isRunning = false;
    return function(){
        let context = this, args = arguments
        if(isRunning) return;
        isRunning = true;
        window.requestAnimationFrame(()=>{
            action.apply(context,args);
            isRunning = false;
        })
    }
};

// 防抖 - https://github.com/mqyqingfeng/Blog/issues/22
let debounce = function(func,wait){
    let timeout;

    return function(){
        if(timeout){
            clearTimeout(timeout)
        }

        let context = this,args = arguments;
        timeout = setTimeout(function(){
            func.apply(context, args)
        },wait)
    }
};

Function.prototype.before = function( beforefn ) {
    var __self = this;
    return function () {
        beforefn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
}
Function.prototype.after = function( afterfn ){
    var __self = this;
    return function(){
        var ret = __self.apply( this, arguments );
        afterfn.apply( this, arguments );
        return ret;
    }
};

module.exports = {
    throttle,
    debounce
};
