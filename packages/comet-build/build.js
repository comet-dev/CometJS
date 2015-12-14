#!/usr/bin/env node
var repository = "";
function createBuild(repo){
  var build = require("../comet-build");
  var comet = require("bin/comet")
  if(build === true){
    repo.open(build);
    repo.compile(build);
  }
  repo + comet.debug(repository);
}
createBuild(repository);


