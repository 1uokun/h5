function testable(target) {
    console.log(target)
    target.prototype.isTestable = true;
}

@testable
export default class {

}