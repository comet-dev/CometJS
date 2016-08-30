var comet = require("comet");

function cometPlatform(){
  comet.create({
    platform:"optional platform enviroment"
  });
  comet.add("New Platform").parse(process.argv)
  comet.platform.compile("Comet32", "Comet64");
}
