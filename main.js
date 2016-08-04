function organize(json, elements){
 elements.confirm("Organize elements? (y/n)");
 if(elements.confirm() === "yes" || "Yes" || "y" || "Y"){
    elements.print("Organizing...");
 }
 JSON.getElementsByName('package.json'); 
}
function init(e){
  organize('package.json', '.ices');
  e.require("comet/package.js");
  e.file("build.js");
}
init("comet/package.js");

