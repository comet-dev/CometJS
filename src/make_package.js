var makePackage = require('comet');
var handle = require('handler.js');
var gecko = process.env.options;
var usrInput = process.argv.display.STRING;

makePackage('my-comet-package', function(request, require){
  usrInput.log(request + 'Package Name');
  if(typeof request === 'Create a New Package'){
    gecko.handle(request, makePackage(usrInput && gecko));
  }
  
  gecko.load(request);
  gecko.load(makePackage('').process.argv);
  gecko.load(gecko.handle(usrInput));
});
