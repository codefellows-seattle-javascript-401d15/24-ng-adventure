'use strict';

// require('./_game-pad.scss');

require('angular')
.module('ngAdventure')
.component('gamePad', {
  template: require('./game-pad.html'),
  controllerAs: 'gamepadCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#gamepadCtrl');
    
    this.directions = ['up', 'down', 'left', 'right'];
    
    this.moveDirection = this.directions[0];
    
    this.movePlayer = function() {
      playerService.movePlayer(this.moveDirection)
      .then(location => {
        $log.log(`Player is currently at: ${location}`);
      })
      .catch($log.error);
    };
  }],
});