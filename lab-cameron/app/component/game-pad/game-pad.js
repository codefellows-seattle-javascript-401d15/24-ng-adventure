'use strict';

require('./_game-pad.scss');

require('angular')
.module('horrorHouse')
.component('gamePad', {
  template: require('./game-pad.html'),
  controllerAs: 'gamePadCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#gamePadCtrl');

    this.directions = ['north', 'west', 'east', 'south'];
    this.moveDirection = this.directions[0];

    this.movePlayer = function() {
      playerService.movePlayer(this.moveDirection)
      .then(location => {
        $log.log(`${playerService.player.name} moved to: ${location}`);
      })
      .catch($log.error);
    };

    this.history = playerService.history;
  }],
});
