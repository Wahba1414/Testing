var chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

//chai.should(); // This statement adds a should function to all JS objects which include all objects, functions, etc.

// require Sum Module.
const sum = require('../server/sum');

describe('Test Sum Function', function () {

  // Before hook.
  before(function () {
    // console.log(`Inside before hook`);

    // some logic

  });

  after(function () {
    // console.log(`Inside after hook`);

    // some logic

  });


  it('Sum Should be 10', function () {
    expect(sum(1, 2, 3, 4)).to.be.a('number').and.equals(10);
  });

  it('Return zero when there are no args', function () {
    expect(sum()).equals(0);
  });


  it('When an argument is not a number, throw an error', function () {
    expect(function () { //Important: it should be wrapped in a function.
      sum('a', 2);
    }).to.throw('Some argument is not a number');
  });


})