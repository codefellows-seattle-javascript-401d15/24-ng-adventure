'use strict';

require('angular')
.module('ngAdventure')
.component('historyInfo', {
  template: require('./history-info.html'),
  controllerAs: 'historyInfoCtrl',
  controller: ['$log', 'playerService', function($log, playerService){
    $log.debug('#history-info controller');
    this.history = playerService.history;
  }],
});
