var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon');

var robots = require('../server/sinon_robots');


describe('Mock on Object', function () {
  it('Should be called once', function () {
    var mock = sinon.mock(robots.robot);

    mock.expects('prepareCoffee').called.once;

    robots.robot.prepareCoffee();
    // robots.robot.prepareCoffee();

    mock.verify();
  });

})