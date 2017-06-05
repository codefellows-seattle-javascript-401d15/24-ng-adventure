'use strict';

// require('./_game-pad.scss')

require('angular')
.module('ngAdventure')
.component('gamePad', {
  template: require('./game-pad.html'),
  controllerAs: 'gamePadCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#gamePadCtrl');

    this.directions = ['north', 'east', 'south', 'west'];
    this.moveDirection = this.directions[0];

    this.movePlayer = function() {
      playerService.movePlayer(this.moveDirection)
      .then(location => {
        $log.log(`player currently at: ${location}`);
      })
      .catch($log.error);
    };
  }],
});
