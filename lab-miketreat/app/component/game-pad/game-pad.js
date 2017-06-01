'use strict';

// require('./_gamepad.scss')

require('angular')
.module('ngAdventure')
.component('gamePad', {
  template: require('./game-pad.html'),
  controllerAs: 'gamepadCtrl',
  controller: ['$log','playerService', function($log, playerService){
    $log.debug('#gamepadCtrl');

    this.direction = ['North', 'South', 'East', 'West'];
    this.moveDirection = this.direction[0];

    this.movePlayer = function() {
      playerService.movePlayer(this.moveDirection)
      .then(location =>{
        $log.log(`player currently at: ${location}`);
      })
      .catch($log.error);
    };
  }],
});
