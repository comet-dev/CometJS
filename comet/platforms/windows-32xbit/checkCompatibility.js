var windowsbit = require("windows");

windowsCompat = function(computerVersion){
  if("Settings" === windowsbit("not 32 bit")){
    alert("Not compatible, your system is  "+computerVersion).exitMSI();
    for(!computerVersion===windowsbit("Invalid").send("Warning").call()){
      windowsbit.push(computerVersion&&"Settings");
    }
  }
}
