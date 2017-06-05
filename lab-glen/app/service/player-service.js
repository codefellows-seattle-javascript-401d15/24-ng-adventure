'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player service');

  let service = {};
  let turn = 0;

  let player = service.player = {
    name: 'Cracky McCrackerton',
    location: 'alley',
    hp: 10,
  };

  let history = service.history = [
    {
      turn,
      desc: 'Must...find...crack!',
      location: 'alley',
      hp: player.hp,
    },
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'No crack here! Hurry and look elsewhere! ',
          location: player.location,
          hp: --player.hp,
        });
        return reject('No crack here! =( ');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
}]);
