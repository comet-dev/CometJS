var repo = "";
var cometpkg = {
  source: "GitHub",
  owner: "Comet",
  comet-repo:"https://github.com/mosesag0813/comet"
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
