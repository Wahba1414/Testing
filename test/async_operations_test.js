var chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

// require async_operations.
const async = require('../server/async_operations');

// X prefix means skip this test case. ==> describe.skip
describe('Test asynchronous operations', function () {

  it('Try it with Async & Await + Correct output', async function () {
    var output = await async.waitForOneSecond();
    expect(output).to.equal('Done');
  });

  it('Try it with Promises + Correct output', function () {
    return async.waitForOneSecond().then(function (output) {
      expect(output).to.equal('Done');
    })
  });

});