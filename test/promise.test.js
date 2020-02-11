import assert from 'assert'
import Promise from '../src/wheels/promise'
const expect = require('chai').expect;

// Follow the Promise/A+ promises-tests

describe('promise', function(){
    // 1."promise" is an object or function with a then method whose behavior conforms to this specification.
    let promise = new Promise();

    it("\"promise\" 是一个object", function() {
        expect(promise).to.be.an('object');
    });

    it("\"promise\" 有一个`then`方法", function() {
        expect(promise.then).to.be.a('function');
    });

    // 2."thenable" is an object or function that defines a then method.
    let thenable = {
        then:function(){

        }
    }
});

