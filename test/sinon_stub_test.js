var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon');


var robots = require('../server/sinon_robots');

describe('Stub on Object', function () {
  var stub;
  before(function () {
    stub = sinon.stub(robots.robot);
  })

  it('Shoud be called once', function () {
    // This won't call the original function.
    robots.member_wrapper(stub, 'prepareLaunch');

    expect(stub.prepareLaunch.called).to.be.true;

  });

  it('Shoud return 55', function () {
    // so you should define the value you need to return (simulate) explicitely.
    stub.prepareLaunch.returns(55);

    // This won't call the original implementation.
    robots.member_wrapper(stub, 'prepareLaunch');
    // console.log(`stub.prepareLaunch.returnValues: ${stub.prepareLaunch.returnValues} - ${stub.prepareLaunch.returnValues.length}`)

    expect(stub.prepareLaunch.returnValues[stub.prepareLaunch.returnValues.length - 1]).to.equal(55);
  })


})