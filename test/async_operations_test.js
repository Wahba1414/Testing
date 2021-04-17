/*
Asynchronous tests will start and FINISH before the next one (sequentionally)
*/
var chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

// require async_operations.
const async = require('../server/async_operations');

describe('Test asynchronous operations', function () {

  it('Try it with Async & Await + Correct output', async function () {
    console.log(`1`);
    var output = await async.waitForOneSecond();
    console.log(`2`);
    expect(output).to.equal('Done');
  });


  it('Try it with Promises + Correct output', function () {
    console.log(`3`);
    return async.waitForOneSecond().then(function (output) {
      console.log(`4`);
      expect(output).to.equal('Done');
    })
  });

  it('Try it with Async & Await + Correct output', async function () {
    console.log(`5`);
    var output = await async.waitForOneSecond();
    console.log(`6`);
    expect(output).to.equal('Done');
  });

});