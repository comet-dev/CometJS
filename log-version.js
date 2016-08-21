var log = "Bug fixes, add to and to-does, bump version";
var version = "0.4.5";
var update = require("./update.js");

version.update(log);
print(update(log));

