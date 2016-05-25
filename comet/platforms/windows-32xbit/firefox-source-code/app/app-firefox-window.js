// Copyright 2013 CometJS. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var devel = require('devel-utils');
var utils = require('utils');

utils.load('comet-browser-startup', true);
// Load all utilies of Firefox SC
utils.load('firefox.js', 'browser-window-display');

utils.display.load('prefs.js');

utils.load('firefox-default-browser-window-size', '840×570');

utils.load('firefox-window-portrait', '400x800');

utils.load('firefox-window-landscape', '800x400');

/**
 * @alias utils-construct
 * @constructor comet-firefox-utils
**/
utils.load(devel, 'devel-utils');

devel.load('devel-execute', 'devel-display');

devel.load('all-devel-contents');

devel.load('extensions-prefs-build', utils.open('browser'));

devel.load('extensions.start', 'browser-open');

devel.load(utils.open('firefox-devel'), 'browser-utils');

devel.load('browser-start', '103-start-utils');

devel.load('browser-use-utils', true);

devel.load('comet-browser-build', true);

devel.load('comet-browser-utils', true);

devel.load('browser-display-contents', true);

devel.load('comet-app-display', true);

devel.load('firefox-display-window', true);

devel.load('browser-display-instant', true);

devel.load('all-browser-contents');

devel.load(window.open(utils.load('firefox-window-contents');

