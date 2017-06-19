'use strict';

require('./_history.scss');

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    this.$onInit = () => {

      $log.debug('#player-info controller');
      
      this.history = playerService.history;
    };
  }],
});