'use strict';

/**
 * <del> 规范：Follow by [Promise/A+](https://promisesaplus.com/) </del>
 * 规范： Follow by chrome console log
 * 参考答案： https://github.com/forthealllight/blog/issues/4
 * **/

// 2. Requirements|要求
// 2.1 Promise States
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

const PromiseStatus = Symbol("[[PromiseStatus]]");
const PromiseValue = Symbol("[[PromiseValue]]");
let listenersMap = new WeakMap();
let resolve,reject;
let catchFunction = function(){};

function Promise2(){
    // 一个promise必须有3个状态，pending，fulfilled(resolved)，rejected
    // 当处于pending状态的时候，可以转移到fulfilled(resolved)或者rejected状态。
    // 当处于fulfilled(resolved)状态或者rejected状态的时候，就不可变。

    listenersMap.set(this, []);
    this[PromiseStatus] = PENDING;
    resolve =(res)=>{
        this[PromiseStatus] = FULFILLED;
        this[PromiseValue] = res;

        // dispatch listener
        let current = listenersMap.get(this).shift()||[];
        this.then(...current)

    };

    reject =(err)=>{
        this[PromiseStatus] = REJECTED;
        !this[PromiseValue] && (this[PromiseValue] = err);

        listenersMap.set(this, []);
        catchFunction(err)
    };

    try{
        arguments[0](resolve,reject)
    }catch(err){
        reject(err)
    }
}

Promise2.prototype.then = function(){
    let onFulfilled=typeof arguments[0]==="function"?arguments[0]:function(x){return x},
        onRejected = typeof arguments[1] === "function" ? arguments[1] : function(e){throw e};

    let listeners = listenersMap.get(this);

    if(this[PromiseStatus] === PENDING){
        listeners.push([onFulfilled,onRejected]);
    }else if(this[PromiseStatus] === FULFILLED){
        try{
            onFulfilled(this[PromiseValue]);
            listeners.length > 0 && resolve(this[PromiseValue])
        }catch (e) {
            reject(e)
        }

    }else if(this[PromiseStatus] === REJECTED){
        onRejected()
    }

    // then must return a promise [3.3].
    return this
};

Promise2.prototype.catch = function(){
    catchFunction = (err)=>{
        arguments[0](err)
    }
};

// for promises-aplus-tests
Promise2.deferred=function(){
    let dfd={};
    dfd.promise=new Promise2(function(resolve,reject){
        dfd.resolve=resolve;
        dfd.reject=reject;
    });
    return dfd;
};

module.exports = Promise2;
