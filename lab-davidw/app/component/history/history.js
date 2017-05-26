'use strict';

//require('./_history.scss')

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'playerService', 'mapService', function($log, playerService) {
    $log.debug('#historyCtrl');

    // TODO: logic for historyCtrl

    this.movePlayer = function() {
      playerService.movePlayer(this.moveDirection);
    };
  }],
});
