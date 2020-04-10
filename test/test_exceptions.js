var chai = require('chai'),
  expect = chai.expect;

var throwErrors = require('../server/throw_exception');

describe('Check the thrown Error', function () {
  it('Should throw Error because there is no argument', function () {
    expect(function () {
      throwErrors();
    }).to.throw();
  });

  it('Should not throw Error because there is an argement', function () {
    expect(function () {
      throwErrors(222);
    }).not.throw();
  });

})
