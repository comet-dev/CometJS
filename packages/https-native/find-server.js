var server = require("8080");

server.app.send("8080").call("new Server");
server.app.go("5609");

var appServer = (function(){
  server.makeNewServer.name("5609");
  server.makeNewServer.stabilize("5609");
});

server.getElement(appServer.final());
server.url.ssl("app.153.comet");
server.setUrlTo("app.153.comet");
