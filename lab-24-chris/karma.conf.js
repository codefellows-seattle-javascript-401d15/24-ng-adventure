'use strict';

const webpack = require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/entry.js',
      'app/test/*-test.js',
    ],
    exclude: [
    ],
    preprocessors: {
      '**/app/*.js': 'coverage',
      'app/entry.js': ['webpack'],
      'app/test/*-test.js': ['webpack'],
    },
    coverageReporter: {
      instrumenterOptions: {
        istanbul: { noCompact: true },
      },
      type : 'html',
      dir : 'coverage/',
    },
    reporters: ['mocha','coverage'],
    browserConsoleLogOptions: {
      level: 'log',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
