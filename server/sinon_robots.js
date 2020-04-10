var robot = {
  prepareCoffee: function () {
    // console.log('Log::Inside prepareCoffee');
    // do some stuffs.
    return 3;
  },

  prepareLaunch: function () {
    console.log('Log::Inside prepareLaunch');
    // do some stuffs.
    return 4;
  }
}

function createNewRobot() {
  // console.log('Log::Inside createNewRobot function');
  return 2;
}

function wrapper(cb) {
  // console.log('Log::Inside wrapper');
  cb();

  return 1;
}

function member_wrapper(obj, memberName) {
  // console.log('Log::Inside memebr wrapper');
  if (obj[memberName]) {
    obj[memberName]();
  }

  return 1;
}



module.exports = {
  robot,
  createNewRobot,
  wrapper,
  member_wrapper
}