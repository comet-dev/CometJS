var usr = "usr/login";

 organize = function(json, elements){
 elements.prompt("Organize elements? (y/n)");
 if(elements.confirm(usr.input) === "yes" || "Yes" || "y" || "Y"){
    elements.load("Organizing...");
 }
 JSON.getElementsByName('package.json'); 
}

function init(e){
  organize('package.json', '.ices');
  e.require("comet/package.js");
  e.file("build.js");
}
init("repo/package.json");

