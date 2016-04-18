![Logo](https://raw.githubusercontent.com/mosesag0813/comet/master/resources/Drawing%20(1).png)
# Comet

 Builds | Badges
---------- | ----------
Linux/Windows |[![Build Status](https://travis-ci.org/comet-dev/CometJS.svg?branch=master)](https://travis-ci.org/comet-dev/CometJS) 
 Developments |[![devDependency Status](https://david-dm.org/comet-dev/CometJS/dev-status.svg)](https://david-dm.org/mosesag0813/comet#info=devDependencies)
  Dependencies|[![Dependency Status](https://david-dm.org/comet-dev/CometJS.svg)](https://david-dm.org/mosesag0813/comet)

What is CometJS? Its an organized,  multi-purpose framework. Comet lets run your web application, and test it on the web. Comet is tested on the JavaScript Platform, within the web. 

## Quickstart

```sh
git clone https://github.com/comet-dev/comet
npm install comet
comet new my-app
```
## Create a new app as a script
```js
// Import the comet-build package in your JavaScript file.
var comet = require('comet');
var build = require('comet-build');
var js = require('cometJS');
var server = require('1.100.COMET'); // Server required for web apps
var deploy =  require('./deploy'); // deploy methods of app
var CometApp = {
  type: ["web", "comet"],
  use: ["comet-app.js", "web.js"]
}
comet.send.appName("NewApp");
// Deploy New Comet App
var NewApp = new CometApp;
NewApp.server('1.100.COMET')&&comet.send(NewApp.server('1.100.COMET'));
comet.serve(NewApp.server('1.100.COMET'))||comet.install().build(NewApp);
comet.NewApp.deploy('1.100.COMET').serve('1.100.COMET');
```
## Comet Frameworks For Your Apps
```sh
npm install comet
```
```js
import comet-frmk; // Import to Script
var framework = require('comet-frmk'); // Use as a 'require' variable
```
## Experimental
- Comet has not been tested within the desktop...
- Comet Shell package is not finished.
- Package Manager is being worked on.

## Contributing
- Great! Please see the CONTRIBUTING.md file, if decisions have been made to add to this project.
- Bugs? Send an issue!

