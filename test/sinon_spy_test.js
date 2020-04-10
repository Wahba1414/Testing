var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon');


var robots = require('../server/sinon_robots');

describe('Sinon Spy', function () {

  describe('Spy on standalone function', function () {

    it('Should be called once', function () {
      // define spy.
      var spy = sinon.spy(robots.createNewRobot);

      robots.wrapper(spy);

      expect(spy.called).to.be.true;

    });

    it('Should return 2', function () {
      // define spy.
      var spy = sinon.spy(robots.createNewRobot);

      robots.wrapper(spy);

      expect(spy.returnValues[0]).to.equal(2);

    });
  });

  describe('Spy on a member function', function () {
    var spy, spy2;
    var sandbox;

    before(function () {
      sandbox = sinon.createSandbox();
      spy = sandbox.spy(robots.robot, 'prepareCoffee');
      spy2 = sandbox.spy(robots.robot, 'prepareLaunch');
    });

    after(function () {
      sandbox.restore();
    })

    it('Should be called once', function () {
      robots.member_wrapper(robots.robot, 'prepareCoffee');

      expect(spy.called).to.be.true;
    });

    it('Should return 4', function () {
      robots.member_wrapper(robots.robot, 'prepareLaunch');

      expect(spy2.returnValues[0]).to.equal(4);
    });

  })

});
