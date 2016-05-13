var app32 = require('app32');
var chromium = require('./chromium.js');
var path = require('path');
var within = {
  ices: ".ices",
  js:"comet.js",
  minJS:"comet.min.js"
};
if(app32(within).confirm("Install 32bit application and dependencies" + path.join(chromium(within))) === true){
  path.log('New Path');
  || path.join('dir');
  || path.getElementById('dir/path');
}

function onInstall(e){
  app32(e).call('comet-prebuilt-app');
  chromium.add('chromium.window.js');
}

onInstall(app32(within));
