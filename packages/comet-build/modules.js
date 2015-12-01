var cmd = {
  pkg: "install package properties",
  execute: "execute comet file",
  imprt: "import files to comet",
  pop:"pop array to build"
}
var modules = require("modules");
package.modules;
function createModules(mod1, mod2, mod3){
  if(mod1 === !mod2 || mod1 === !mod3){
    mod1.add(mod1);
    if(mod1 === true){
      mod1.exec(mod1);
    }
  }
  else if(mod2 === !mod1 || mod2 === !mod3){
    mod2.add(mod2);
    if(mod2 === true){
      mod2.exec(mod2);
    }
  }
  else if(mod3 === !mod1 || mod3 === !mod2){
    mod3.add(mod3);
    if(mod3 === true){
      mod3.exec(mod3);
    }
  }
}
cmd.pkg = function(file){
  var cmdpkg = require("cmd.pkg");
  modwithFile = file + mod1;
  file.push(modwithFile);
  modwithFile.exec();
  return package modwithFile;
  return modwithFile.open(cmd.pkg);
}
cmd.pop = function(addtoArray){
  var cmdpop = require("cmd.pop");
  var stack = "add to stack";
  addtoArray.add(stack);
  if(addtoArray > stack.push(cmd.pop).length){
    cmd.pop.exec();
  }
}
createModules(cmd.pkg, cmd.execute, cmd.imprt);
