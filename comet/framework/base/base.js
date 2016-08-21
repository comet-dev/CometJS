var base = require('app.js');
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
import app from 'comet';
import gecko from 'firefox';

gecko
  .handle('base.js' , 'Base setup and foundation for app')
  .base('elements', 'Add elements to base')
  .parse();
/** @protected **/  
const setup = app.base('New Setup');

/**
 * @param {base, createSetup}
 **/ 
comet.baseSetup = function(baseUp, createSetup){
  var opts = {
    queue: 'base',
    implement: 'elements'
  }
  baseUp = this.baseUp;
  createSetup = this.createSetup;
  this.createSetup = {
    base: 'true',
    load: 'gecko-simplified',
    load1:'chromium.js'
    firefox:'firefox.js'
  }
  
  this.createSetup.test(this.baseUp);
  
  var newSetup = new this.createSetup;
  
  /** @protected **/
  if(typeof newSetup === 'settings'){
    opts.method = this.baseUp.data
                || this.createSetup.firefox
                || this.baseUp.on(opts.queue)
                || opts.implement;
  }
}

