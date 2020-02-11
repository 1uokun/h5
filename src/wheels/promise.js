
/**
 * 规范：Follow by [Promise/A+](https://promisesaplus.com/)
 * 参考答案： https://github.com/forthealllight/blog/issues/4
 * **/

// 2. Requirements|要求
// 2.1 Promise States
const PENDING = 1;
const FULFILLED = 2;
const REJECTED = 3;

function Promise(){

}

Promise.prototype.then = function(onFulfilled, onRejected){
    if(typeof onFulfilled !== "function" || typeof onRejected !== "function"){
        new TypeError("Both onFulfilled and onRejected are optional arguments:")
    }

    // then must return a promise [3.3].
    return this
};

module.exports = Promise;
