module.exports = {
  waitForOneSecond: function(){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('Done');
      },2000);
    });
  }
}
