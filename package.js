var packageContains = create({
  init_tool:"./tools/init_tool",
  experiment:"./tools/experiment.js"
});
customizePackage = function(){
  var install = require("install");
  install(packageContains.experiment).push(console.log("New Dev"));
  console.warn("Customizing package may alter the way the package works.");
}
