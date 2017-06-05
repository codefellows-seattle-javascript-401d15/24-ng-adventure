'use strict';

require('angular')
.module('horrorHouse')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');

  let service = {};
  service.gameOverMessage = 'Oh no! You lost!';
  let turn = 0;
  let player = service.player = {
    name: 'Cameron',
    location: 'courtyard',
    hp: 5,
  };

  let history = service.history = [
    {
      turn,
      desc: 'welcome to my text adventure!',
      location: 'courtyard',
      hp: player.hp,
    },
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      ++turn;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if (history[0].hp < 1) {
        history.unshift({
          turn,
          desc: service.gameOverMessage,
          location: player.location,
          hp: 0,
        });
        return;
      }

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'you have run into a wall!',
          location: player.location,
          hp: --player.hp,
        });
        return reject('no room in that direction');
      }

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}]);
