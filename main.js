function filerForJS(filer){
   file = {
      process:true
   };
  for(var i = 0; i<filer.length; i++){
      filer.push(file.process);
  }
  if(file.process === true){
    require("package.json");
  }
}
function init(e){
  filerForJS(e);
  require("comet/package.js");
  e.file("build.js");
}
init("comet/package.js");
filerForJS("package.json");
