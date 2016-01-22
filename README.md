![Logo](https://raw.githubusercontent.com/mosesag0813/comet/master/resources/Drawing%20(1).png)
# Comet

### Build Status
[![Build Status](https://travis-ci.org/comet-dev/comet.svg?branch=master)](https://travis-ci.org/comet-dev/comet) [![devDependency Status](https://david-dm.org/comet-dev/comet/dev-status.svg)](https://david-dm.org/mosesag0813/comet#info=devDependencies)[![Dependency Status](https://david-dm.org/comet-dev/comet.svg)](https://david-dm.org/mosesag0813/comet)

An organized, simple-to-use framework. It is managable, and it is simple. 
> Comet lets run your application, and lets you deploy it on the Web.

## Quickstart

```sh
git clone https://github.com/comet-dev/comet
npm install comet
comet new my-app
```
## Example for Script Building
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
## Contributing
- Great! Please see the CONTRIBUTING.md file, if decisions have been made to add to this project.
- Bugs? Send an issue!

