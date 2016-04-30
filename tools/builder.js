var repo = "";
var building = require("build.js");
var cometpkg = {
  source: "GitHub",
  owner: "Comet",
  comet-repo:"https://github.com/comet-dev/comet"
};
var build = {
  test: "build.js"
}
builder = function(pkg){
  pkg.integrate(repo);
  pkg.push(repo);
  if(repo === pkg){
    pkg = true;
  }
  var makeApkg = new cometpkg;
  var makeAbuild = new build;
}
building.setTo.intializationMode("$#@");
building.exec("package").confirm("New Package has been Built");

builder(cometpkg);
