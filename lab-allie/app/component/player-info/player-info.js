'use strict';

require('./_player-info.scss');

require('angular')
.module('ngAdventure')
.component('playerInfo', {
  template: require('./player-info.html'),
  controllerAs: 'playerInfoCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    this.$onInit = () => {
      $log.debug('#player-info controller');
      
      this.player = playerService.player;
    };
  }],
  
});