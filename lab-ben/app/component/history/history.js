'use strict';

//require ('./history.scss');

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'HistoryCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#history Controller');
    this.history = playerService.history;
  }],
});
