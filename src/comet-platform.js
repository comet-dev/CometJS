var comet = require("comet");

function cometPlatform(){
  comet.create({
    platform:"optional platform enviroment"
  });
  comet.push("New Platform")+process.argv("New Env");
  comet.platform.compile("Comet32", "Comet64");
}
