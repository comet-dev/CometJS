var version = require("update.js")
notifications = function(notify){
  make.prototype.box = notify.alert("Comet has been update to " + version("update.js"));
}
notifications(version("update.js"));
