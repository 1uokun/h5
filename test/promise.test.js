import assert from 'assert'
import Promise from '../src/wheels/promise'
const expect = require('chai').expect;

// Follow the Promise/A+ promises-tests

describe('Promise', function(){
    // 1."promise" is an object or function with a then method whose behavior conforms to this specification.
    let promise = new Promise();

    it("\"promise\" 是一个object", function() {
        expect(promise).to.be.an('object');
    });

    it("\"promise\" 有一个`then`方法", function() {
        expect(promise.then).to.be.a('function');
    });

    // assert(promise.then() instanceof promise,
    //     "\"promise\" 的`then`方法必须返回一个promise");

    // 2."thenable" is an object or function that defines a then method.
    let thenable = {
        then:function(){

        }
    }
});

describe('promise then', function(){
    let date = new Date().getTime();
    let time = 1000;
    let promise = new Promise(function(resolve, reject){
       setTimeout(()=>{
           resolve("1秒之后执行")
       },time)
   });

   promise.then(res=>{
       assert(new Date().getTime() - date > time && new Date().getTime() - date < time*2,"应在\"1秒之后执行\"")
   });

});

describe('promise then & catch', function(){
    let date = new Date().getTime();
    let time = 1000;
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("1秒之后执行")
        },time)
    });

    let error = new Error("error");

    promise.then(res=>{
        assert(new Date().getTime() - date > time && new Date().getTime() - date < time*2,"应在\"1秒之后执行\"");

        throw error;
    }).then(res=>{
        assert.fail("如果有一个onFulfilled或onRejected返回一个值x，请运行Promise Resolution Procedure [[Resolve]](promise2, x)。");
    }).catch(err=>{
        assert(err === error,"如果任何一个onFulfilled或onRejected引发异常e，则promise2必须以拒绝e为理由。");
    });

});
