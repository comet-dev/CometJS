var on = require('app');
var app;

app.on("comet-build-setup");
while(app.on("comet-build")===true){
  app.use("comet.min.js")
}

//Turn on app
app.on().confirm("Setup Complete");
app.display = app.on.getElementsById("app");

