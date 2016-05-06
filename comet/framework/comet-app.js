var on = require('app');
var app;

app.on("comet-build-setup");
while(app.on("comet-build")===true){
  app.use("comet.min.js")
}

app.on().confirm("Setup Complete");

