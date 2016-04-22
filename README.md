![Logo](https://raw.githubusercontent.com/mosesag0813/comet/master/resources/Drawing%20(1).png)
# Comet

 Builds | Badges
---------- | ----------
Linux/Mac |[![Build Status](https://travis-ci.org/comet-dev/CometJS.svg?branch=master)](https://travis-ci.org/comet-dev/CometJS) 
 Developments |[![devDependency Status](https://david-dm.org/comet-dev/CometJS/dev-status.svg)](https://david-dm.org/mosesag0813/comet#info=devDependencies)
  Dependencies|[![Dependency Status](https://david-dm.org/comet-dev/CometJS.svg)](https://david-dm.org/mosesag0813/comet)

## What is CometJS? 

**C**omet is quick and precise development within your choice of workflow.

**O**ver complications are never a problem because Comet keeps it simple, but lets you do things on your own.

**M**assive development tools, so you can create your apps with tools that work at your level of development.

**E**lements keep your apps looking nice, in a more of an organizational structure.

**T**he best of the best, all in one repository.

## Quickstart

```sh
# Git Clone
git clone https://github.com/comet-dev/comet
# or npm
npm install comet
```
```sh
# comet  cli
comet new my-app
comet my-app init
```
## Create a new app as a script
```js
// Import the comet-build package in your JavaScript file.
var comet = require('comet');
var build = require('comet-build');
var js = require('cometJS');
var server = require('1.100.COMET'); // Server required for web apps
var deploy =  require('./deploy'); // deploy elements of app
var CometApp = { // Clarify the type of app, and use (dependencies)
  type: ["web", "comet"],
  use: ["comet-app.js", "web.js"]
}
comet.send.appName("NewApp"); // Name your app
// Deployment
var NewApp = new CometApp; // Make your app an object 
NewApp.server('1.100.COMET') && comet.send(NewApp.server('1.100.COMET')); // Send your app to 1.100.COMET (Official IP Address)
comet.serve(NewApp.server('1.100.COMET')) || comet.install().build(NewApp); // Comet will install, build, and serve your app to the IP Address
comet.NewApp.deploy('1.100.COMET').serve('1.100.COMET'); // Deployment
```
## Comet Frameworks For Your Apps
```sh
cpm install comet-frmk
```
```js
import comet-frmk; // Import to Script
var framework = require('comet-frmk'); // Use as a 'require' variable
```
## Experimental
- Comet has not been tested within the desktop...
- Comet Shell package and commands has not been worked on.


## Contributing
- Great! Please see the CONTRIBUTING.md file, if decisions have been made to add to this project.
- Bugs? Send an issue!

