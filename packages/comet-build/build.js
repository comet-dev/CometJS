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
var build = require('.../tools/builder');
/**
 * @description Use builder tool, and integrates with Gecko (XULRunner).
 * @param {geckoStartup, build, ices}
 * @requires gecko-dev, CometJS 
 **/ 
var geckoStartup = require('gecko-dev');
var comet = require('CometJS');
var ices = require('ices.js');



/** @protected **/
geckoStartup.prototype.build('app');

//------------------------------------//




/**
 * @interface Gives status, then prompts for a new build.
 * @instance
 **/ 
const newBuild = ices.build.createElement('New Build');


if(typeof newBuild === 'New Build' && NewBuild.status === 'StartingStart'){
  build.status.test('build', 'RunningState');
}
 build.add(GeckoStartup.handle(newBuild), function(startBuild){
    var on = this.on;
    var generate = this.generate;
    comet.load(geckoStartup, build);
    
    /** @protected **/
    while(comet.load(geckoStartup, build).status === 'ReadyState'){
      build.add(this.on);
      /** @fires {package} **/
      package build, geckoStartup;
      this.generate.createElement('generate-build');
      this.on.add(this.generate);
    }
    
 })(startBuild);

 
