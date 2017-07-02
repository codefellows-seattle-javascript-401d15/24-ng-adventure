'use strict';

require('angular')
.module('ngAdventure')
.component('playerHistory', {
  template: require('./player-history.html'),
  controllerAs: 'playerHistCtrl',
  controller: ['$log', 'playerService', function($log, playerService){
    $log.debug('#player-history controller');
    this.history = playerService.history;
  }]
});
