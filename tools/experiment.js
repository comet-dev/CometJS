var experimentJS = require("ExperimentJS");
var browserify = require("Browserify");
var cometJS = require("comet.js")
comet = function(file){
  browserify(file).comet(file);
  while(browserify(file).comet(ExperimentJS(file))){
    do {
      file.comet(browserify("ExperimentJS"));
    }
  }
}
experiment = function(pkg){
  experimentJS(pkg);
  pkg.experiment(browserify(pkg));
  pkg._debug()._experiment(ExperimentJS(pkg));
for(var i=0; i<9; i++){
  browserify(cometJS(file.comet("bin/comet")));
  file.push(pkg).open(cometJS("bin/comet"));
  pkg.find(cometJS("bin/comet"));
  }
}
comet(browserify("comet-build")._experiment(cometJS("comet.js")));

