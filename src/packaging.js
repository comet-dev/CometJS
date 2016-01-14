var comet = {
  packageInfo: "comet/package.json",
  build: "multiplatformal",
  version: "^1.0.0"
}
var download = require("../comet");
download.debug(comet.version);
var system = {
  systemMac:"OS 7 or later",
  systemWindows:"Windows 8 or later"
}
function packaging(packageOne){
  var requirements = {
    systemMac:"OS 7 or later",
    systemWindows:"Windows 8 or later"
  }
  for(var e=0; e<requirements.length; e++){
    requirements.add(packageOne);
  }
  if(packageOne === requirements.systemWindows || packageOne === requirements.systemMac){
    packageOne = true;
  } else {
    packageOne = false;
    print("Sorry, the build is unable to install due to not meeting the requirements");
  }
}
function checkReq(systemA, systemB){
  if(systemA === true || systemB === true){
    packaging(systemA);  
  } else {
    packaging(systemB); 
  } else if(systemA === false || systemB === false) {
    print("Cannot build repo.");
  }
}
packaging("");
checkReq(requirements.systemMac, requirements.systemWindows);
