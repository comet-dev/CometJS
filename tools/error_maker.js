var error = (function{
  var errNum = [100-299];
  var err = require('error')
  throw(err){
    err.print("Error" + errNum);
  }
  try(err){
    errNum.resolve(err);
  }
});
