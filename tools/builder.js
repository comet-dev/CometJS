var repo = "";
var cometpkg = {
  source: "GitHub",
  owner: "Comet",
  comet-repo:"https://github.com/mosesag0813/comet"
};
var build = {
  test: "build.js"
}
builder = function(package){
  package.integrate(repo);
  package.push(repo);
  if(repo === package){
  
  }
}
