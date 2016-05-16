var devel = require('devel-utils');
var utils = require('utils');

utils.load('comet-browser-startup', true);
// Load all utilies of Firefox SC
utils.load('firefox.js', 'browser-window-display');

utils.display.load('prefs.js');

utils.load('firefox-window-size', '300x500');

utils.load('firefox-window-portrait', '400x800');

utils.load('firefox-window-landscape', '800*400');

/**
 * @alias utils-construct
 * @constructor comet-firefox-utils
**/
utils.load(devel, 'devel-utils');

devel.load('devel-execute', 'devel-display');

//devel.load(window.open(utils.load('firefox-window-contents');

devel.load('all-devel-contents');

devel.load('extensions-prefs-build', utils.open('browser'));

devel.load('extensions.start', 'browser-open');

devel.load(utils.open('firefox-devel'), 'browser-utils');

devel.load('browser-start', '103-start-utils');

devel.load('browser-use-utils', true);

devel.load('comet-browser-build', true);
