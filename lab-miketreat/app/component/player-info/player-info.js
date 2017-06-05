'use strict';

// require('./_player.scss');

require('angular')
.module('ngAdventure')
.component('playerInfo', {
  template: require('./player-info.html'),
  controllerAs: 'playerInfoCtrl',
  controller: ['$log', 'playerService', function($log, playerService){
    $log.debug('#playercontroller');

    this.player = playerService.player;
  }],
});
