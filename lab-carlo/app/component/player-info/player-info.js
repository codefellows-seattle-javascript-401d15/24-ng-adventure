'use strict';

// require('./_player-info.scss')

require('angular')
.module('ngAdventure')
.component('playerInfo', {
  template: require('./player-info.html'),
  controllerAs: 'playerInfoCtrl',
  controller: ['$log', 'playerService', 'mapService', function($log, playerService) {
    $log.debug('#player-info controller');
    this.player = playerService.player;
  }]
});
