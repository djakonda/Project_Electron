#!/usr/bin/env node
var exec = require('child_process').exec;
var path = require('path');
var url = process.argv[2];
if (url && !/^https?:/.test(url)) {
  url = path.resolve(process.cwd(), url);
}
var command = 'cd ' + __dirname + ' && npm start';
if (url) {
  command += ' -- "' + url + '"';
}

var vjs = exec(command);
vjs.stdout.pipe(process.stdout);
vjs.stdin.pipe(process.stdin);
vjs.stderr.pipe(process.stderr);
