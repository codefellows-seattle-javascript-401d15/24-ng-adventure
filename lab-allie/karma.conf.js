'use strict';

const webpack = require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'app/entry.js',
      'app/test/ngadventure-test.js',
    ],
    // list of files to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    preprocessors: {
      'app/entry.js': ['webpack'],
      'app/test/ngadventure-test.js': ['webpack'],
    },
    // test results reporter to use
    reporters: ['progress'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    logLevel: config.LOG_DEBUG,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // start these browsers
    browsers: ['Chrome'],
    // Continuous Integration mode
    singleRun: false,
    // Concurrency level
    concurrency: Infinity,
  });
};