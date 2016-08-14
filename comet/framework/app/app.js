"use strict";
// Copyright 2015 CometJS. All Rights Reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at 
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and limitations under the License.

var app = require('app');
/**
 * @param app.window.URL, app.window.command
 * @access app.private.command
 * @description Access the private, public or protected control or ownership of the application.
 **/
 /** @protected **/
app.window.URL('1.100.COMET');
/**
 * @description Break the app down into access privileges 
 * and creating the elements to private, public, and protected.
 **/ 
app.access.createElement('app.private.command', 'app.public.command', 'app.protected.command');
/**
 * @description 
 * 
 **/ 
app.access.command('app.access.private','app.access.public', 'app.access.protected');
app.access.getUser('').save();
app.window.open(app);

app.on("build");
/**
 * @overview Loading significant files to app/project.
 * @todo 
 * - Window Sizing
 * - Constant Bugging - app.load modules 
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

