import CometPackages from Comet
var userInput = "";
var pkgs = create({
  pkgsbuild: "build a package",
  pkgsinstall: "install a package"
});
make.package = function(pkg){
  pkg.push("NewPackage");
  if(pkg === "New"){
    userInput.comet("Initialization");
  }
  }
}
