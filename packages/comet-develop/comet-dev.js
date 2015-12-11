dev = function(accessories){
  accessories = create({
    builder:"./tools/comet-builder",
    init_tool:"./tools/init_tool"
    experimentJS:"./tools/experiment"
  });
  accessories.debug("New Tool");
  accessories.find(accessories.log("$PATH"));
  accessories.develop("comet-dev").console.log("added tools!");
}
