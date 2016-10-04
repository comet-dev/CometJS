var on = require('app');
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

/**
 * @author Mosesag0813
 * @overview Gather elements using ID, promoting an easy, organization structure while testing.
 * @todo 
 *  - Display elements to app
 **/ 
app.on('comet-build-setup');
/** @public **/
while(app.on('comet-build') === 'running'){
  app.find.getElementsByName('comet.min.js');
  app.load('comet.min.js');
}

/**
 * @param app.on.confirm, app.display
 * @class app
 **/
app.on.confirm("Setup Complete");
/** @public **/
app.display = app.on.createElement("my-comet-app");

it('will run when called on ices'){
  ices.call('app');
};

/** @protected **/
modules.exports = {
  export app;
}

