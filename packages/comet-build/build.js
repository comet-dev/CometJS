#!/usr/bin/env node
var repository = "";

function createBuild(repo){
  var build = require("../comet-build");
  var comet = require("bin/comet")
  
  if(build(repo)&&comet.use("new build") === true){
    
  }
}
