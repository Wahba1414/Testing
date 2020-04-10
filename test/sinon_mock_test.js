var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon');

var robots = require('../server/sinon_robots');


describe('Mock on Object', function () {
  var sandbox;
  var mock;

  before(function () {
    sandbox = sinon.createSandbox();
    mock = sandbox.mock(robots.robot);
  });


  after(function () {
    sandbox.restore();
  })

  it('Should be called once', function () {

    mock.expects('prepareCoffee').called.once;

    robots.robot.prepareCoffee();
    // robots.robot.prepareCoffee();

    mock.verify();
  });

})