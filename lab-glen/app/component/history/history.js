'use strict';

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {

    this.playerService = playerService;
    $log.log(this.playerService.history[0].desc);

  }],
});
