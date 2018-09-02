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

module.exports = {
    throttle,
    debounce
};