var depend = require("dependencies");
var pkg;
deps = function(dependencies){
  depend(dependencies).find("DevelopJS");
  if(dependencies === "DevelopJS"){
    depend(pkg&&dependencies.compile(pkg&&dependencies));
    while(depend(pkg.parse("DevelopJS"))){
      do {
        depend(pkg.compile());
      }
    }
  }
}
