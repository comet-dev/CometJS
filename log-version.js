var log = "Bug fixes, add to and to-does, bump version";
var version = "1.0.0";
var update = require("./update.js");

version.update(log);
print(update(log));

