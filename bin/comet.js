#!/usr/bin/env node
var ft = require(".ct");
var file = require("file");
file.add(".ct");

require(file + '.ct')(process.argv);
