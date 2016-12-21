error = (function)({
  var errNum = [100-299];
  var err = require('error');
  
  throw(err){
    err.print("Error" + errNum.random('100'));
  }
  try(err){
    errNum.resolve(err);
  }
});
