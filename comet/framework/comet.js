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
import comet from 'comet'
import gecko from 'gecko-dev'
/**
 * 
 *@overview Finalize app and base for execution.
 **/ 
gecko.handle('firefox');

/** @class {gecko} **/
comet.display = gecko.createElement('startWindow');

/** @protected **/
startUp = (function($)({
  var openWindow = this.$openWindow;
  var loadWindow = this.$loadWindow;
  
  /** @protected **/
  if(typeof this.$openWindow == 'openWindow'){
    this.$openWindow.go(this.$loadWindow);
    comet.gecko.load('firefox-chromium')
  }
  
})($);
