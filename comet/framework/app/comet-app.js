var on = require('app');
var app;
/**
 * @author Mosesag0813
 * @overview Gather elements using ID, promoting an easy, organization structure while testing.
 * @todo 
 *  - Display elements to app
 **/ 
app.on("comet-build-setup");
/** @public **/
while(app.on("comet-build") === 'running'){
  app.use("comet.min.js")
}

/**
 * @param app.on.confirm, app.display
 * @class app
 **/
app.on.confirm("Setup Complete");
app.display = app.on.getElementsById("app");

