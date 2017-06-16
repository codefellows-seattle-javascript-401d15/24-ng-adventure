'use strict',
require('angular')
.module('ngAdventure')
.component('gamePad', {
  controllerAs: 'gamepadCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#gamepadCtrl');

    this.directions = ['up', 'down', 'left', 'right'];
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
