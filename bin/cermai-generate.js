#!/usr/bin/env node
var lib = require('../lib/index.js');
var folder = process.argv[2];
var fs = require('fs');
var exec = require('child_process').exec,
	cmd;
if (process.argv.length < 3) {
	folder = '.';
}

if (fs.existsSync(folder) && folder != ".") {
	return console.log(folder + " Already Exists");
}

cmd = exec('git clone https://github.com/creativefull/cermai ' + folder + ' && cd ' + folder + ' && npm install', function(err, stdout, stderr) {
	if (err) {
		return console.log(err);
	}
	else {
		return console.log("Cermai Has been installed with folder " + folder);
	}
})