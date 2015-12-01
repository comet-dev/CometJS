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
function package(package){
  var requirements = {
    systemMac:"OS 7 or later",
    systemWindows:"Windows 8 or later"
  }
  for(var e=0; e<requirements.length; e++){
    requirements.add(package);
  }
  if(package === requirements.systemWindows || package === requirements.systemMac){
    package = true;
  } else {
    package = false;
    print("Sorry, the build is unable to install due to not meeting the requirements");
  }
}
function checkReq(systemA, systemB){
  if(systemA === true || systemB === true){
    package(systemA);  
  } else {
    package(systemB); 
  } else if(systemA === false || systemB === false) {
    print("Cannot build repo.");
  }
}
package(ApplesBuild);
checkReq(requirements.systemMac, requirements.systemWindows);
