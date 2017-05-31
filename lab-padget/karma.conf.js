const webpack = require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'app/entry.js',
      'test/**/*-test.js',
    ],

    exclude: [
      'no',
    ],

    preprocessors: {
      'app/entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },

    // reporters: ['mocha'], // search for karma mocha reporter as -D
    reporters: ['progress'],

    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
