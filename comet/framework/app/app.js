"use strict";
var app = require('app');
/**
 * @param app.window.URL, app.window.command
 * @access app.private.command
 * @description Access the private, public or protected control or ownership of the application.
 **/
 /** @protected **/
app.window.URL('1.100.COMET');
app.access.getElements('app.private.command', 'app.public.command', 'app.protected.command');
app.access.command('app.access.private','app.access.public', 'app.access.protected');
app.access.getUser('').save();
app.window.open(app);

app.on("build");
/**
 * @overview Loading significant files to app/project.
 * @todo 
 * - Window Sizing
 * - Constant Bugging 
 * - App Compatibility
 **/
app.use(window.open(app));
/** @protected **/
app.load('package.json');
/** @protected **/
app.load('comet.js');
/** @protected **/
app.load('desktop.js');
/** @protected **/
app.load('base.js');

