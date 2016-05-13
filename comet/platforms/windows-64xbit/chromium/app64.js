var app64 = require('app64');
var chromium = require('./chromium.js');
var path = require('path');
var within = {
  ices: ".ices",
  js:"comet.js",
  minJS:"comet.min.js"
};
if(app64(within).confirm("Install 32bit application and dependencies" + path.join(chromium(within))) === true){
  path.log('New Path');
  || path.join('dir');
  || path.getElementById('dir/path');
}

function onInstall(e){
  app64(e).call('comet-prebuilt-app');
  chromium.add('chromium.window.js');
}

onInstall(app64(within));
