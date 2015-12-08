var developJS = require("developJS");
var sdk = create({
  blp: "comet-develop/boilerplate"
});
var pkg = require("pkg")
makeDevel = function(dir){
  developJS(dir).open(dir);
  if(!dir&&developJS(dir)){
    dir.find(sdk.blp(developJS(dir)));
    for(var i=0; i<dir.length; i++){
      i.create(dir+'find'+developJS(sdk.blp));
    }
    if(dir.blp('cannot process')||!developJS&&!dir.find(dir&&sdk)){
      console.log('Error 178: Develop not found');
      dir.close(i.create(blp+dir));
      dir.process(developJS(dir));
    }
  }
}
while(makeDevel(developJS(blp))){
  do {
    sdk.find(developJS(sdk) && "check.sh")
    developJS("log for sdk").enable(developJS(pkg("comet-build")));
  }
}
if(developJS(sdk.blp) === "comet-develop/boilerplate"){
  developJS(makeDevel(pkg(sdk).open()));
}

