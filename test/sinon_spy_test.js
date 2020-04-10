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
    var spy;
    before(function () {
      spy = sinon.spy(robots.robot, 'prepareCoffee');
    });

    it('Should be called once', function () {
      robots.member_wrapper(robots.robot, 'prepareCoffee');

      expect(spy.called).to.be.true;
    });

    it('Should return 3', function () {
      robots.member_wrapper(robots.robot, 'prepareCoffee');

      expect(spy.returnValues[0]).to.equal(3);
    });

  })

});
