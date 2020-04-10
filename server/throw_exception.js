module.exports = function throwErrorIfNoArg(arg) {
  if (arg == undefined) {
    throw new Error('No passign argument');
  }
}