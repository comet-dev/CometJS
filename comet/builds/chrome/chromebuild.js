import chr from 'chrome'

var chrome = require('chromium');

chr
  .build('--win32', 'Build to Windows 32bit');
  .build('--win64', 'Build to Windows 64bit');
  .parse();

const load = chr.build.parse(chr.load());
