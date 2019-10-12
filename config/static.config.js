const fs = require('fs'),
  path = require('path'),
  express = require('express'),
  __cwd = process.cwd(),
  files = [],
  dirs = [];


const ignores = fs.readFileSync(path.join(__dirname, 'static.ignore'), 'utf8')
  .split('\n')
  .map(item => item.trim().toUpperCase())
  .filter(item => item != '')


fs.readdirSync(__cwd)
  .filter(item => !ignores.includes(item.toUpperCase()))
  .forEach(item => {
    if (fs.lstatSync(path.join(__cwd, item)).isDirectory()) {
      dirs.push(item);
    } else {
      files.push(item);
    }
  });

module.exports = (server) => {
  dirs.forEach(dir => {
    server.use(`/${dir}`, express.static(path.join(__cwd, dir)));
  });

  files.forEach(file => {
    server.use(`/${file}`, express.static(path.join(__cwd, file)));
  });
}