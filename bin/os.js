#!/usr/bin/env node

const colors = require('colors/safe'),
  argv = require('optimist')
    .boolean('cors')
    .boolean('log-ip')
    .argv;

require('dotenv').config()

const port = argv.p || argv.port || parseInt(process.env.PORT, 10) || 3007,
  host = argv.a || '0.0.0.0',
  isSPA = argv.spa || false;

if (argv.h || argv.help) {
  console.log(colors.cyan([
    '',
    'Usage: os [path] [options]', '',
    'Displays help information.', '',
    'options:', '',
    '  -p, --port    Port to use [8080]',
    '  -a            Address to use [0.0.0.0]',
    '  -s --silent   Suppress log messages from output',
    '  --spa         Serve as Single Page Application',
    '  -h, --help    Print this list and exit.', ''
  ].join('\n')));
  process.exit();
}

require('../lib/own-server')({ isSPA }).listen(port, () => {
  console.log('Magic Happent on port ' + port)
});

if (process.platform === 'win32') {
  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }).on('SIGINT', function () {
    process.emit('SIGINT');
  });
}

process.on('SIGINT', function () {
  console.log(colors.red('own-server stopped.'));
  process.exit();
});

process.on('SIGTERM', function () {
  console.log(colors.red('own-server stopped.'));
  process.exit();
});