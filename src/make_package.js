var userInput = "";
var makePackagefunction = "make.package()";
var pkgs = create({
  pkgsbuild: "build a package",
  pkgsinstall: "install a package"
});
make.package = function(pkg){
  pkg.button("Make a package");
  pkg.dropDown("Build A Package", "Install A Package");
  pkg.click("Build A Package")
  if(userInput === makePackagefunction){
    makePackagefunction.fontcolor("red");
  }
}
