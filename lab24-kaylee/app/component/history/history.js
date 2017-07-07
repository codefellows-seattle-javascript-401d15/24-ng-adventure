'use strict'

require('./_history.scss')

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#historyCtrl')
    this.history = playerService.history
  }]
})
