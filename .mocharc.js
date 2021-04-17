module.exports = {
  diff: true,
  extension: ['js'],
  // opts: './test/mocha.opts',
  // package: './package.json',
  reporter: 'spec', //to set the reporter option
  // slow: 75,
  timeout: 20000000, //set the timeout which after Mocha considers the test case failed.
  ui: 'bdd' //to set the interface style to 'BDD', to use [describe, it, before, aftereach, etc.]
};

