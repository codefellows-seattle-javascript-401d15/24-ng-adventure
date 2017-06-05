'use strict';

require('./_history.scss');

require('angular')
.module('horrorHouse')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#historyCtrl');
    this.playerService = playerService;
    $log.log(this.playerService.history);
  }],
});
