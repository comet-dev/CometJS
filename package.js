import ices from 'ices';
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
var packages = require('.../packages');
var gecko = require('./firefox/gecko-dev');

/**
 * @constructor packages
 * @param {packages.gecko.req}, {components}
 **/ 
geckoDev.prototype.packages = (function(){
  var install = this.install;
  packages('start', function(req, com){
    gecko.start = ices.options
               || ices.components.push('.../tools/init_tool'); 
               || ices.call(gecko.handle('.../tools/builder'));
  });
  // Type of requirements pushes Gecko's components to package
  if(typeof req === ices.compile(packages.components.push(req, com))){
    /** @protected **/
    packages.createElement('inside');
    // add installation process as an event
    packages.addEventListener(this.install);
  }
  return packages(gecko.start && this.install);
});
/**
 * @parameters {packages.gecko.run}
 **/ 
geckoDev.prototype.build = (function(){
  var buildPkg = this.buildPkg;
  
  if(typeof this.buildPkg === this.buildPkg.test(packages('build-package'))){
    packages.append(this.buildPkg);
  }
});
/** @interface 
 * - Packages with robust, steadfast integration
 * - Easy execution
 * - Made with ❤ for Github Repositories
 **/ 
geckoDev.prototype.run = (function(){
  var run = this.run; 
  /**
   * @class geckoDev
   * @param {this.run}
   **/ 
  if(this.run instanceof === packages(this.run)){ 
    this.run = packages.components.parse('inside');
  }
  return this.run;
});
