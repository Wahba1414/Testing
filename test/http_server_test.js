var chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;


describe('Test HTTP requests', function () {

  it('Get Hello World response', function (done) { //use call back pattern this time. by this, Mocha knows this 'it' is async.

    chai.request('http://localhost:3000')
      .get('').then(function (res) {
        try {
          expect(res.text).to.equal('Hello World');
          done(); //to go to the next test case.
        } catch (error) {
          done(error);
        }
      }, function (error) {
        done(error);
      })

  })

});