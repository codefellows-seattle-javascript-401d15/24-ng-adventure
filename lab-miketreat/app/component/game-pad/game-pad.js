'use strict';

// require('./_gamepad.scss')

require('angular')
.module('ngAdventure')
.component('gamePad', {
  template: require('./game-pad.html'),
  controllerAs: 'gamepadCtrl',
  controller: ['$log','playerService', function($log, playerService){
    $log.debug('#gamepadCtrl');


    this.direction = ['North', 'East', 'West', 'South'];
    this.moveDirection = this.direction[0];

    this.movePlayer = function() {
      playerService.movePlayer(this.moveDirection)
      .then(location =>{
        $log.log(`player currently at: ${location}`);
      })
      .catch($log.log);
    };
  }],
});
