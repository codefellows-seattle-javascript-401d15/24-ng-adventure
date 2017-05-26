'use strict'

require('./_history.scss')

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'what goes here?',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#player-info controller')
    this.player = playerService.player
  }]
})
