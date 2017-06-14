'use strict';

require('angular')
.module('ngAdventure')
.component('gamePad', {
  template: require('./game-pad.html'),
  controllerAs: 'gamepadCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#gamepadCtrl');

    this.directions = ['north', 'south', 'east', 'west'];

    this.moveDirection = this.directions[0];

    this.status = false;

    this.movePlayer = function() {
      playerService.movePlayer(this.moveDirection)
      .then(location => {
        $log.log(`player currently at: ${location}`);
        if(playerService.gameStatus.gameOver === true){
          this.status = true;
        }
      })
      .catch(err => {
        console.error(err);
        console.log(playerService.player.hp);
        if(playerService.gameStatus.gameOver === true){
          this.status = true;
        }
      });
    };
  }],
});
